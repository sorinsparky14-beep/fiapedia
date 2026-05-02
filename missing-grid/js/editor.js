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

function buildRaceSelector() {
  const wrap = document.getElementById('race-select-wrap');
  const hiddenSel = document.getElementById('race-select');
  if (!wrap) return;
  if (typeof RACES === 'undefined' || !RACES.length) return;

  function flagImg(emoji) {
    const pts = [...emoji].map(c => c.codePointAt(0));
    if (pts.length === 2 && pts[0] >= 0x1F1E6 && pts[0] <= 0x1F1FF) {
      const iso = pts.map(p => String.fromCharCode(p - 0x1F1A5)).join('').toLowerCase();
      const img = document.createElement('img');
      img.className = 'rs-flag-img';
      img.src = 'https://flagcdn.com/20x15/' + iso + '.png';
      img.width = 20;
      img.height = 15;
      img.alt = iso.toUpperCase();
      img.onerror = function(){ this.hidden = true; };
      return img.outerHTML;
    }
    const sp = document.createElement('span');
    sp.className = 'rs-flag-emoji';
    sp.textContent = emoji;
    return sp.outerHTML;
  }

    let open = false;

  const btn = document.createElement('div');
  btn.className = 'rs-btn';
  btn.innerHTML = '<span class="rs-label">— Choose a race —</span><span class="rs-arrow">▾</span>';

  const list = document.createElement('div');
  list.className = 'rs-list';

  const placeholder = document.createElement('div');
  placeholder.className = 'rs-option rs-placeholder';
  placeholder.textContent = '— Choose a race —';
  placeholder.addEventListener('click', () => {
    btn.querySelector('.rs-label').innerHTML = '— Choose a race —';
    if (hiddenSel) hiddenSel.value = '';
    document.getElementById('in-name').value = '';
    document.getElementById('in-year').value = '';
    renderDriversTable([]);
    G.hidden = new Set();
    renderHiddenChips(0, []);
    closeList();
  });
  list.appendChild(placeholder);

  RACES.forEach(r => {
    const item = document.createElement('div');
    item.className = 'rs-option';
    item.innerHTML = flagImg(r.flag) + '<span class="rs-name">' + r.name + ' (' + r.year + ')</span>';
    item.addEventListener('click', () => {
      btn.querySelector('.rs-label').innerHTML = flagImg(r.flag) + '<span class="rs-name">' + r.name + ' (' + r.year + ')</span>';
      if (hiddenSel) hiddenSel.value = r.id;
      loadRace(r);
      closeList();
    });
    list.appendChild(item);
  });

  function closeList() {
    open = false;
    list.classList.remove('rs-open');
    btn.classList.remove('rs-active');
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    open = !open;
    list.classList.toggle('rs-open', open);
    btn.classList.toggle('rs-active', open);
  });

  document.addEventListener('click', () => { if (open) closeList(); }, { passive: true });

  wrap.innerHTML = '';
  wrap.appendChild(btn);
  wrap.appendChild(list);
}

function loadRace(race) {
  document.getElementById('in-name').value = race.name;
  document.getElementById('in-year').value = race.year;
  renderDriversTable(race.drivers);
  G.hidden = new Set(race.hidden);
  renderHiddenChips(race.drivers.length, race.hidden);
  switchTab('race');
  toast(`${race.name} ${race.year} loaded!`);
}

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

  tb.querySelectorAll('tr').forEach((row, i) => {
    row.querySelector('.pt').textContent = `P${i + 1}`;
  });
  renderHiddenChips(tb.querySelectorAll('tr').length, [...G.hidden]);
}

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