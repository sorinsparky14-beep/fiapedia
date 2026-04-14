/* ═══════════════════════════════════════════
   Missing Grid – F1 Puzzle Game
   editor.js  —  Editor panel logic (Custom mode)
   ═══════════════════════════════════════════ */

/* ══ TAB SWITCHING ══ */
function switchTab(name) {
  document.querySelectorAll('.etab').forEach(t =>
    t.classList.toggle('active', t.dataset.tab === name)
  );
  document.querySelectorAll('.tcontent').forEach(c =>
    c.classList.toggle('active', c.id === `tab-${name}`)
  );
}

document.querySelectorAll('.etab').forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.dataset.tab === 'hidden') {
      const n = document.getElementById('drivers-tbody').querySelectorAll('tr').length;
      renderHiddenChips(n, [...G.hidden]);
    }
    switchTab(tab.dataset.tab);
  });
});

/* ══ RACE SELECTOR ══ */
function buildRaceSelector() {
  const sel = document.getElementById('race-select');
  if (!sel) return;
  // Rebuild always to ensure options are populated
  sel.innerHTML = '<option value="">— Choose a race —</option>';
  if (typeof RACES === 'undefined' || !RACES.length) return;
  RACES.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.id;
    opt.textContent = `${r.flag}  ${r.name} (${r.year})`;
    sel.appendChild(opt);
  });
  // Remove any existing listener before adding a new one
  if (sel._changeHandler) sel.removeEventListener('change', sel._changeHandler);
  sel._changeHandler = () => {
    if (!sel.value) {
      document.getElementById('in-name').value = '';
      document.getElementById('in-year').value = '';
      renderDriversTable([]);
      G.hidden = new Set();
      renderHiddenChips(0, []);
      return;
    }
    const race = RACES.find(r => r.id === sel.value);
    if (race) loadRace(race);
  };
  sel.addEventListener('change', sel._changeHandler);
}

/* ══ LOAD RACE ══ */
function loadRace(race) {
  document.getElementById('in-name').value = race.name;
  document.getElementById('in-year').value = race.year;
  renderDriversTable(race.drivers);
  G.hidden = new Set(race.hidden);
  renderHiddenChips(race.drivers.length, race.hidden);
  switchTab('race');
  toast(`${race.name} ${race.year} loaded!`);
}

/* ══ DRIVERS TABLE ══ */
function renderDriversTable(preset = []) {
  const tb = document.getElementById('drivers-tbody');
  tb.innerHTML = '';
  for (let i = 0; i < preset.length; i++) {
    tb.appendChild(buildDriverRow(i + 1, preset[i] || {}));
  }
}

function escapeAttr(str) {
  return (str || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function buildDriverRow(pos, d = {}) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td class="pt">P${pos}</td>
    <td><input type="text"  class="d-abbr" value="${escapeAttr(d.abbr)}" placeholder="" style="width:54px;text-transform:uppercase" maxlength="3"></td>
    <td><input type="text"  class="d-name" value="${escapeAttr(d.name)}" placeholder="" style="width:148px"></td>
    <td><input type="text"  class="d-team" value="${escapeAttr(d.team)}" placeholder="" style="width:118px"></td>
    <td><input type="color" class="cc d-color" value="${escapeAttr(d.color || '#888888')}"></td>
    <td><label class="dnfl"><input type="checkbox" class="d-dnf" ${d.isDNF ? 'checked' : ''}>DNF</label></td>
    <td><button class="btn-rm-row" onclick="removeRow(this)" title="Șterge">−</button></td>
  `;
  return tr;
}

function addRow() {
  const tb = document.getElementById('drivers-tbody');
  const n  = tb.querySelectorAll('tr').length;
  tb.appendChild(buildDriverRow(n + 1));
  renderHiddenChips(n + 1, [...G.hidden]);
}

function removeRow(btn) {
  const tb  = document.getElementById('drivers-tbody');
  const tr  = btn.closest('tr');
  tr.remove();
  // Renumerotează pozițiile
  tb.querySelectorAll('tr').forEach((row, i) => {
    row.querySelector('.pt').textContent = `P${i + 1}`;
  });
  renderHiddenChips(tb.querySelectorAll('tr').length, [...G.hidden]);
}

/* ══ HIDDEN CHIPS ══ */
function renderHiddenChips(n, sel = []) {
  const wrap = document.getElementById('hchips');
  wrap.innerHTML = '';
  G.hidden = new Set(sel.filter(p => p >= 1 && p <= n));
  for (let i = 1; i <= n; i++) {
    const chip = document.createElement('div');
    chip.className = 'hchip' + (G.hidden.has(i) ? ' sel' : '');
    chip.textContent = `P${i}`;
    chip.dataset.pos = i;
    chip.addEventListener('click', () => {
      if (G.hidden.has(i)) { G.hidden.delete(i); chip.classList.remove('sel'); }
      else                  { G.hidden.add(i);    chip.classList.add('sel');    }
    });
    wrap.appendChild(chip);
  }
}

/* ══ READ FORM ══ */
function readEditorForm() {
  G.race.name = document.getElementById('in-name').value || 'Grand Prix';
  G.race.year = document.getElementById('in-year').value || '';
  G.race.flag = '🏁';

  const abbrs = [...document.querySelectorAll('.d-abbr')];
  const names = [...document.querySelectorAll('.d-name')];
  const teams = [...document.querySelectorAll('.d-team')];
  const cols  = [...document.querySelectorAll('.d-color')];
  const dnfs  = [...document.querySelectorAll('.d-dnf')];

  G.drivers = [];
  for (let i = 0; i < abbrs.length; i++) {
    const abbr = abbrs[i].value.trim().toUpperCase();
    if (!abbr) continue;
    G.drivers.push({
      abbr,
      name:  names[i].value.trim(),
      team:  teams[i].value.trim(),
      color: cols[i].value,
      isDNF: dnfs[i].checked,
    });
  }
}

/* ══ INIT — nu se mai rulează automat, ci lazy din showCustomEditor() ══ */
