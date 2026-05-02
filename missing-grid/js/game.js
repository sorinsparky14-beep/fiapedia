const G = {
  race:     { name:'', year:'', flag:'' },
  drivers:  [],
  hidden:   new Set(),
  answers:  {},
  state:    {},
  selChip:  null,
  dragging: null,
  mode:     'random',   
  teamColors: {},       
  
  timerSec: 0,
  timerRef: null,
  timerRunning: false,
  
  hintsUsed: 0,
  hintedPos: new Set(),
  MAX_HINTS: 1,
  hintMode: false,   
  
  lives: 3,
  MAX_LIVES: 3,
};

let adUsed = false;

function showLanding(pushUrl = true) {
  if (pushUrl) history.pushState({page:'landing'}, '', '/');
  stopTimer();
  document.body.style.overflow = '';
  document.querySelector('header').classList.remove('visible');
  document.getElementById('landing-page').style.display  = 'flex';
  document.getElementById('editor-panel').style.display  = 'none';
  document.getElementById('game-area').style.display     = 'none';
  document.getElementById('result-overlay').classList.remove('show');
  document.getElementById('hdr-timer').style.display     = 'none';
  document.getElementById('hdr-score').style.display     = 'none';
  document.getElementById('hdr-logo').style.display      = 'none';
}

function showCustomEditor(pushUrl = true) {
  if (pushUrl) history.pushState({page:'custom'}, '', '/custom');
  G.mode = 'custom';
  document.body.style.overflow = '';
  document.querySelector('header').classList.remove('visible');
  document.getElementById('landing-page').style.display  = 'none';
  document.getElementById('editor-panel').style.display  = 'flex';
  document.getElementById('game-area').style.display     = 'none';
  document.getElementById('result-overlay').classList.remove('show');
  buildRaceSelector();
  
  document.getElementById('race-select').value = '';
  document.getElementById('in-name').value = '';
  document.getElementById('in-year').value = '';
  renderDriversTable([]);
  G.hidden = new Set();
  renderHiddenChips(0, []);
}

function showEditor() {
  showCustomEditor();
}

function toggleHowToPlay() {
  const sec = document.getElementById('htp-section');
  const btn = document.querySelector('.btn-htp');
  if (sec.style.display === 'none') {
    sec.style.display = 'block';
    btn.textContent = '✕ CLOSE';
  } else {
    sec.style.display = 'none';
    btn.textContent = '❓ HOW TO PLAY';
  }
}

function startRandomGame(forceDifficulty, pushUrl = true) {
  G.mode = 'random';
  if (pushUrl) history.pushState({page:'play-random'}, '', '/play-random-race');

  if (typeof RACES === 'undefined' || !RACES.length) {
    toast('Race data not loaded. Please refresh.', 'bad');
    showLanding(false);
    return;
  }

  
  const pool = forceDifficulty
    ? RACES.filter(r => r.difficulty === forceDifficulty)
    : RACES;

  if (!pool.length) {
    toast('No races available for this difficulty.', 'bad');
    showLanding(false);
    return;
  }

  const race = pool[Math.floor(Math.random() * pool.length)];

  
  G.race.name       = race.name;
  G.race.year       = race.year;
  G.race.flag       = race.flag;
  G.race.id         = race.id;
  G.race.difficulty = race.difficulty || null;
  G.drivers         = race.drivers.map(d => ({ ...d }));

  
  
  const total = G.drivers.length;
  const diffRanges = { easy: [6, 10], medium: [6, 8], hard: [6, 6] };
  const [hideMin, hideMax] = diffRanges[G.race.difficulty] || [6, 10];
  const hideCount = Math.min(hideMin + Math.floor(Math.random() * (hideMax - hideMin + 1)), total - 1);

  const allPos   = Array.from({ length: total }, (_, i) => i + 1);
  const shuffled = [...allPos].sort(() => Math.random() - .5);
  G.hidden = new Set(shuffled.slice(0, hideCount));

  _launchGame();
}

function buildGame() {
  G.mode = 'custom';
  readEditorForm();
  if (!G.drivers.length) { toast('Add drivers first!', 'bad'); return; }
  if (!G.hidden.size)    { toast('Select hidden positions!', 'bad'); switchTab('hidden'); return; }
  _launchGame();
}

function _launchGame() {
  
  G.answers   = {};
  G.state     = {};
  G.selChip   = null;
  G.dragging  = null;
  G.hintsUsed = 0;
  G.hintedPos = new Set();
  G.hintMode  = false;
  G.lives     = G.MAX_LIVES;
  G.MAX_HINTS = 1;
  adUsed      = false;
  G.teamColors = resolveTeamColors(G.drivers);
  G.hidden.forEach(p => { if (p <= G.drivers.length) G.state[p] = 'empty'; });

  
  document.querySelector('header').classList.add('visible');
  document.getElementById('hdr-logo').style.display      = 'flex';
  document.getElementById('hdr-timer').style.display     = 'flex';
  document.getElementById('hdr-score').style.display     = 'none';

  
  document.getElementById('gl-label').textContent = G.race.year;
  document.getElementById('gl-title').textContent = G.race.name;
  document.getElementById('gl-sub').textContent   = 'Race Result';

  
  const diffBadge = document.getElementById('gl-difficulty');
  if (diffBadge && G.mode === 'random') {
    const labels = { easy: '🟢 Easy', medium: '🟡 Medium', hard: '🔴 Hard' };
    diffBadge.textContent = labels[G.race.difficulty] || '';
    diffBadge.className   = `diff-badge diff-${G.race.difficulty}`;
    diffBadge.style.display = 'inline-block';
  } else if (diffBadge) {
    diffBadge.style.display = 'none';
  }

  updateLives();
  updateHintCounter();
  updateProg();
  buildPool();
  buildGridList();
  initGridClickDelegate();

  
  document.getElementById('landing-page').style.display  = 'none';
  document.getElementById('editor-panel').style.display  = 'none';
  document.getElementById('game-area').style.display     = 'block';

  startTimer();
}

const DISTINCT_COLORS = [
  '#E8002D', 
  '#3671C6', 
  '#FF8000', 
  '#27F4D2', 
  '#229971', 
  '#FFD800', 
  '#FF87BC', 
  '#64C4FF', 
  '#C92D4B', 
  '#A855F7', 
  '#F97316', 
  '#14B8A6', 
  '#EAB308', 
  '#06B6D4', 
  '#84CC16', 
  '#F43F5E', 
  '#8B5CF6', 
  '#10B981', 
  '#FB923C', 
  '#60A5FA', 
];

function resolveTeamColors(drivers) {
  
  const teamColorMap = {};
  let distinctIdx = 0;

  
  drivers.forEach(d => {
    const c = (d.color || '').toLowerCase();
    if (c && c !== '#888888' && c !== '#000000') {
      teamColorMap[d.team] = d.color;
    }
  });

  
  drivers.forEach(d => {
    if (!teamColorMap[d.team]) {
      
      while (
        distinctIdx < DISTINCT_COLORS.length &&
        Object.values(teamColorMap).includes(DISTINCT_COLORS[distinctIdx])
      ) { distinctIdx++; }
      teamColorMap[d.team] = DISTINCT_COLORS[distinctIdx % DISTINCT_COLORS.length];
      distinctIdx++;
    }
  });

  return teamColorMap;
}

function getColor(d) {
  return G.teamColors[d.team] || d.color || '#888888';
}

function buildPool() {
  const pool = document.getElementById('pool-chips');
  pool.innerHTML = '';

  [...G.hidden]
    .filter(p => p <= G.drivers.length)
    .sort(() => Math.random() - 0.5)
    .forEach(pos => {
      const d    = G.drivers[pos - 1];
      const chip = document.createElement('div');
      chip.className   = 'dchip';
      chip.id          = `chip-${pos}`;
      chip.dataset.pos = pos;
      chip.draggable   = true;
      const col = getColor(d);
      chip.innerHTML   = `
        <div class="chip-body" style="background:${col}; border-left: 4px solid rgba(0,0,0,0.3);">
          <div class="chip-abbr" style="color:#fff; text-shadow:0 1px 3px rgba(0,0,0,0.7);">${d.abbr}</div>
          <div class="chip-name" style="color:rgba(255,255,255,0.85);">${getFullName(d)}</div>
        </div>
      `;
      chip.addEventListener('dragstart', () => {
        G.dragging = pos;
        chip.classList.add('dragging');
        setTimeout(() => chip.classList.remove('dragging'), 0);
      });
      chip.addEventListener('dragend',  () => { G.dragging = null; });
      chip.addEventListener('click',    () => selectChip(pos));
      pool.appendChild(chip);
    });
}

function buildGridList() {
  const list = document.getElementById('grid-list');
  list.innerHTML = '';
  for (let pos = 1; pos <= G.drivers.length; pos++) {
    const entry = makeEntry(pos);
    entry.style.animationDelay = `${(pos - 1) * 0.035}s`;
    list.appendChild(entry);
  }
}

function initGridClickDelegate() {
  const list = document.getElementById('grid-list');
  if (list._delegateAttached) return;
  list._delegateAttached = true;
  list.addEventListener('click', (e) => {
    if (e.target.closest('.rm-btn')) return;
    const entry = e.target.closest('.grid-entry');
    if (!entry) return;
    const pos = Number(entry.dataset.pos);
    if (!pos) return;
    
    if (G.hintMode) { applyHintToPos(pos); return; }
    onEntryClick(pos);
  });
}

function makeEntry(pos) {
  const d        = G.drivers[pos - 1];
  const isHidden = G.hidden.has(pos);
  const entry    = document.createElement('div');
  entry.id          = `entry-${pos}`;
  entry.dataset.pos = pos;

  if (!isHidden) {
    entry.className = 'grid-entry revealed';
    entry.innerHTML = revealedHTML(d, pos);
  } else {
    entry.className = 'grid-entry drop-zone';
    entry.innerHTML = dropZoneHTML(pos);
    attachDropEvents(entry, pos);
  }
  return entry;
}

function getFullName(d) {
  if (d.fullName && d.fullName.trim()) return d.fullName.trim();
  return d.name || d.abbr;
}

function revealedHTML(d, pos) {
  const dnfTag = d.isDNF ? '<span class="dnf-tag">DNF</span>' : '';
  const col = getColor(d);
  return `
    <div class="pos-badge">${pos}</div>
    <div class="entry-accent" style="background:${col}"></div>
    <div class="entry-body" style="background:linear-gradient(90deg,rgba(${hexToRgb(col)},.18) 0%,rgba(18,18,18,.85) 55%);">
      <div class="entry-info">
        <div class="entry-name">${d.abbr} <span style="font-weight:600;font-size:.82rem;color:rgba(255,255,255,.65)">${getFullName(d)}</span></div>
        <div class="entry-team">${d.team}</div>
      </div>
      ${dnfTag}
    </div>
  `;
}

function dropZoneHTML(pos) {
  return `
    <div class="pos-badge">${pos}</div>
    <div class="entry-accent" style="background:rgba(255,255,255,.05)"></div>
    <div class="entry-body">
    </div>
  `;
}

function filledHTML(d, pos) {
  const col = getColor(d);
  return `
    <div class="pos-badge">${pos}</div>
    <div class="entry-accent" style="background:${col}"></div>
    <div class="entry-body" style="background:linear-gradient(90deg,rgba(${hexToRgb(col)},.15) 0%,rgba(18,18,18,.85) 50%);">
      <div class="entry-info">
        <div class="entry-name">${d.abbr} <span style="font-weight:600;font-size:.82rem;color:rgba(255,255,255,.65)">${getFullName(d)}</span></div>
        <div class="entry-team">${d.team}</div>
      </div>
    </div>
    <button class="rm-btn" onclick="removeFromEntry(${pos},event)" title="Elimină">✕</button>
  `;
}

function correctHTML(d, pos) {
  const hintTag = G.hintedPos.has(pos) ? '<span class="hint-tag">HINT</span>' : '';
  const col = getColor(d);
  return `
    <div class="pos-badge">${pos}</div>
    <div class="entry-accent" style="background:${col}"></div>
    <div class="entry-body" style="background:linear-gradient(90deg,rgba(${hexToRgb(col)},.14) 0%,rgba(0,230,118,.04) 100%);">
      <div class="entry-info">
        <div class="entry-name">${d.abbr} <span style="font-weight:600;font-size:.82rem;color:rgba(255,255,255,.65)">${getFullName(d)}</span></div>
        <div class="entry-team">${d.team}</div>
      </div>
      ${hintTag}
      <span class="ok-tick">✓</span>
    </div>
  `;
}

function attachDropEvents(el, pos) {
  el.addEventListener('dragover',  e  => { e.preventDefault(); el.classList.add('drag-over'); });
  el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
  el.addEventListener('drop',      e  => { e.preventDefault(); el.classList.remove('drag-over'); onDrop(pos); });
}

function selectChip(pos) {
  if (G.hintMode) { cancelHintMode(); return; } 
  if (G.state[pos] === 'correct') return;
  G.selChip = pos;
  document.querySelectorAll('.dchip').forEach(c => c.classList.remove('sel-chip'));
  const c = document.getElementById(`chip-${pos}`);
  if (c) c.classList.add('sel-chip');
  toast('Tap a slot in the grid');
}

function onDrop(targetPos) {
  if (G.dragging === null) return;
  if (!G.hidden.has(targetPos)) return;          
  if (G.state[targetPos] === 'correct') return;
  if (G.state[targetPos] === 'wrong')   return;
  placeDriver(G.dragging, targetPos);
  G.dragging = null;
}

function onEntryClick(targetPos) {
  if (!G.hidden.has(targetPos)) return;          
  if (G.state[targetPos] === 'correct') return;
  if (G.state[targetPos] === 'wrong')   return;
  if (G.selChip !== null) {
    placeDriver(G.selChip, targetPos);
    G.selChip = null;
    document.querySelectorAll('.dchip').forEach(c => c.classList.remove('sel-chip'));
  } else if (G.state[targetPos] === 'filled') {
    removeFromEntry(targetPos);
  }
}

function placeDriver(fromPos, targetPos) {
  if (!G.hidden.has(targetPos)) return;          
  if (G.state[targetPos] === 'correct') return;
  if (G.state[targetPos] === 'wrong')   return;

  
  const prevSlot = Object.keys(G.answers).map(Number).find(k => G.answers[k] === fromPos);
  if (prevSlot !== undefined && prevSlot !== targetPos && G.state[prevSlot] !== 'correct') {
    delete G.answers[prevSlot];
    G.state[prevSlot] = 'empty';
    const oldEntry = document.getElementById(`entry-${prevSlot}`);
    if (oldEntry) {
      oldEntry.className = 'grid-entry drop-zone';
      oldEntry.innerHTML = dropZoneHTML(prevSlot);
      attachDropEvents(oldEntry, prevSlot);
    }
  }

  if (G.state[targetPos] === 'filled') {
    freeChip(G.answers[targetPos]);
    delete G.answers[targetPos];
  }
  G.answers[targetPos] = fromPos;
  G.state[targetPos]   = 'filled';
  const chip = document.getElementById(`chip-${fromPos}`);
  if (chip) chip.classList.add('placed');
  const entry = document.getElementById(`entry-${targetPos}`);
  if (entry) {
    const d = G.drivers[fromPos - 1];
    entry.className = 'grid-entry filled';
    entry.innerHTML = filledHTML(d, targetPos);
    attachDropEvents(entry, targetPos);
  }
  updateProg();
}

function removeFromEntry(pos, e) {
  if (e) e.stopPropagation();
  if (G.state[pos] === 'correct') return;
  const prev = G.answers[pos];
  if (prev !== undefined) freeChip(prev);
  delete G.answers[pos];
  G.state[pos] = 'empty';
  const entry = document.getElementById(`entry-${pos}`);
  if (entry) {
    entry.className = 'grid-entry drop-zone';
    entry.innerHTML = dropZoneHTML(pos);
    attachDropEvents(entry, pos);
  }
  updateProg();
}

function freeChip(pos) {
  const c = document.getElementById(`chip-${pos}`);
  if (c) c.classList.remove('placed');
}

function useHint() {
  if (G.hintsUsed >= G.MAX_HINTS) { toast('Ai folosit deja hint-ul!', 'bad'); return; }
  const valid      = [...G.hidden].filter(p => p <= G.drivers.length);
  const candidates = valid.filter(p => G.state[p] !== 'correct');
  if (candidates.length === 0) { toast('Nu mai sunt poziții de ghicit!', 'bad'); return; }

  
  G.hintMode = true;
  document.getElementById('btn-hint').classList.add('hint-selecting');
  toast('💡 Apasă pe poziția unde vrei hint!', 'hint');

  
  candidates.forEach(pos => {
    const entry = document.getElementById(`entry-${pos}`);
    if (entry) entry.classList.add('hint-target');
  });
}

function applyHintToPos(pos) {
  if (!G.hintMode) return;
  if (!G.hidden.has(pos)) return;
  if (G.state[pos] === 'correct') return;
  if (G.state[pos] === 'wrong')   return; 

  const valid = [...G.hidden].filter(p => p <= G.drivers.length); 

  
  G.hintMode = false;
  document.getElementById('btn-hint').classList.remove('hint-selecting');
  document.querySelectorAll('.hint-target').forEach(el => el.classList.remove('hint-target'));

  
  if (G.state[pos] === 'filled') {
    const evictedChipPos = G.answers[pos];
    
    Object.keys(G.answers).forEach(k => {
      if (G.answers[k] === evictedChipPos) delete G.answers[k];
    });
    
    const evictedChip = document.getElementById(`chip-${evictedChipPos}`);
    if (evictedChip) {
      evictedChip.classList.remove('placed', 'sel-chip');
      evictedChip.style.opacity = '';
    }
  }

  G.answers[pos]   = pos;
  G.state[pos]     = 'correct';
  G.hintedPos.add(pos);
  G.hintsUsed++;

  const chip = document.getElementById(`chip-${pos}`);
  if (chip) chip.classList.add('placed');
  const entry = document.getElementById(`entry-${pos}`);
  if (entry) {
    entry.className = 'grid-entry correct hint-revealed';
    entry.innerHTML = correctHTML(G.drivers[pos - 1], pos);
  }
  updateHintCounter();
  updateProg();
  toast(`💡 Hint: P${pos} → ${G.drivers[pos - 1].abbr}`, 'hint');
  const stillOpen = valid.filter(p => G.state[p] !== 'correct').length;
  if (stillOpen === 0) setTimeout(() => checkAnswers(), 200);
}

function cancelHintMode() {
  if (!G.hintMode) return;
  G.hintMode = false;
  document.getElementById('btn-hint').classList.remove('hint-selecting');
  document.querySelectorAll('.hint-target').forEach(el => el.classList.remove('hint-target'));
  toast('Hint anulat.', '');
}

function updateHintCounter() {
  const el = document.getElementById('hint-counter');
  if (el) {
    const left = G.MAX_HINTS - G.hintsUsed;
    el.textContent = left > 0 ? `${left} left` : 'used';
  }
  const btn = document.getElementById('btn-hint');
  if (btn) btn.disabled = (G.hintsUsed >= G.MAX_HINTS);
  updateAdHintBtn();
}

function updateAdHintBtn() {
  const btn = document.getElementById('btn-ad-hint');
  if (!btn) return;
  if (G.hintsUsed >= G.MAX_HINTS && !adUsed) {
    btn.style.display = 'inline-flex';
  } else {
    btn.style.display = 'none';
  }
}

function watchAdForHint() {
  if (adUsed) { toast('You already earned an extra hint this race.', 'bad'); return; }
  if (G.hintMode) cancelHintMode();

  const modal  = document.getElementById('ad-modal');
  const bar    = document.getElementById('ad-progress-bar');
  const secEl  = document.getElementById('ad-seconds');
  const skipBtn = document.getElementById('ad-skip-btn');

  modal.classList.add('show');
  skipBtn.disabled = true;
  skipBtn.textContent = 'Skip';
  bar.style.width = '0%';
  secEl.textContent = '5';

  let elapsed = 0;
  const total = 5000;
  const step  = 50;

  const ticker = setInterval(() => {
    elapsed += step;
    bar.style.width = Math.min((elapsed / total) * 100, 100) + '%';
    secEl.textContent = Math.max(0, Math.ceil((total - elapsed) / 1000));
    if (elapsed >= total) {
      clearInterval(ticker);
      skipBtn.disabled = false;
      skipBtn.textContent = 'Claim Hint ✓';
    }
  }, step);

  modal._ticker = ticker;
}

function skipAd() {
  const modal   = document.getElementById('ad-modal');
  const skipBtn = document.getElementById('ad-skip-btn');
  if (skipBtn.disabled) return;
  clearInterval(modal._ticker);
  modal.classList.remove('show');
  skipBtn.textContent = 'Skip';
  skipBtn.disabled = true;
  adUsed = true;
  G.MAX_HINTS++;
  updateHintCounter();
  toast('💡 Extra hint earned! Press Hint to use it.', 'hint');
}

function updateLives() {
  for (let i = 1; i <= G.MAX_LIVES; i++) {
    const el = document.getElementById(`life-${i}`);
    if (el) el.textContent = i <= G.lives ? '❤️' : '🖤';
  }
}

function checkAnswers() {
  if (G.hintMode) cancelHintMode(); 
  const valid    = [...G.hidden].filter(p => p <= G.drivers.length);
  const unfilled = valid.filter(p => G.state[p] !== 'correct' && G.state[p] !== 'filled');
  if (unfilled.length > 0) { toast(`${unfilled.length} position${unfilled.length !== 1 ? 's' : ''} still empty!`, 'bad'); return; }

  let correct = 0;
  let wrong   = 0;
  const total = valid.length;

  valid.forEach(pos => {
    if (G.state[pos] === 'correct') { correct++; return; }
    const placed = G.answers[pos];
    if (placed === pos) {
      G.state[pos] = 'correct';
      correct++;
      const entry = document.getElementById(`entry-${pos}`);
      if (entry) {
        entry.className = 'grid-entry correct';
        entry.innerHTML = correctHTML(G.drivers[pos - 1], pos);
      }
    } else {
      wrong++;
      G.state[pos] = 'wrong'; 
      const entry = document.getElementById(`entry-${pos}`);
      if (entry) {
        entry.classList.add('wrong');
        setTimeout(() => {
          removeFromEntry(pos);
        }, 650);
      }
    }
  });

  if (wrong > 0) {
    G.lives = Math.max(0, G.lives - 1);
    updateLives();
    if (G.lives === 0) {
      stopTimer();
      setTimeout(() => showResult(correct, total), 700);
      return;
    }
    toast(`❌ Wrong! ${G.lives} life${G.lives !== 1 ? 's' : ''} left`, 'bad');
  }

  const stillOpen = valid.filter(p => G.state[p] !== 'correct').length;
  if (stillOpen === 0) {
    stopTimer();
    setTimeout(() => showResult(correct, total), 480);
  } else if (wrong === 0) {
    toast(`✓ ${correct}/${total} correct. Keep going!`, 'good');
  }
}

function resetGame() {
  document.getElementById('result-overlay').classList.remove('show');
  stopTimer();
  G.answers   = {};
  G.state     = {};
  G.selChip   = null;
  G.dragging  = null;
  G.hintsUsed = 0;
  G.hintedPos = new Set();
  G.hintMode  = false;
  G.lives     = G.MAX_LIVES;
  G.MAX_HINTS = 1;
  adUsed      = false;
  document.querySelectorAll('.hint-target').forEach(el => el.classList.remove('hint-target'));
  const hintBtn = document.getElementById('btn-hint');
  if (hintBtn) hintBtn.classList.remove('hint-selecting');
  G.hidden.forEach(p => { if (p <= G.drivers.length) G.state[p] = 'empty'; });
  buildPool();
  buildGridList();
  const list = document.getElementById('grid-list');
  if (list) list._delegateAttached = false;
  initGridClickDelegate();
  updateLives();
  updateHintCounter();
  updateProg();
  startTimer();
}

function showResult(correct, total) {
  
  if (G.hintMode) cancelHintMode();
  const pct = Math.round(correct / total * 100);
  let emoji = '😅', title = 'Try Again!';
  if      (pct === 100) { emoji = '🏆'; title = 'PERFECT!';    }
  else if (pct >= 80)   { emoji = '🥇'; title = 'Excellent!';  }
  else if (pct >= 60)   { emoji = '🥈'; title = 'Well done!';  }
  else if (pct >= 40)   { emoji = '🥉'; title = 'Decent!';     }

  document.getElementById('res-emoji').textContent = emoji;
  document.getElementById('res-title').textContent = title;

  const timeEl = document.getElementById('res-time');
  if (timeEl) timeEl.textContent = `${correct}/${total} correct`;

  const penaltyEl = document.getElementById('res-hint-penalty');
  if (G.hintsUsed > 0) {
    penaltyEl.textContent   = `💡 You used ${G.hintsUsed} hint${G.hintsUsed !== 1 ? 's' : ''} (-${G.hintsUsed * 5}% potential score)`;
    penaltyEl.style.display = 'block';
  } else {
    penaltyEl.style.display = 'none';
  }

  
  document.getElementById('res-random-btns').style.display = G.mode === 'random' ? 'flex' : 'none';
  document.getElementById('res-custom-btns').style.display = G.mode === 'custom' ? 'flex' : 'none';

  document.getElementById('result-overlay').classList.add('show');
  if (pct === 100) launchConfetti();

  
  const storyEl  = document.getElementById('res-story');
  const storyTxt = document.getElementById('res-story-text');
  const storyTags = document.getElementById('res-story-tags');
  const story = (typeof RACE_STORIES !== 'undefined') && RACE_STORIES[G.race.id];
  if (story && G.mode === 'random') {
    storyTxt.textContent = story.text;
    storyTags.innerHTML = story.tags.map(t => `<span class="story-tag">${t}</span>`).join('');
    storyEl.style.display = 'block';
  } else {
    storyEl.style.display = 'none';
  }
}

function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#e10600','#f5c518','#00e676','#ff8c00','#64c4ff','#fff'];
  const pieces = Array.from({length: 120}, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * -canvas.height,
    vx: (Math.random() - .5) * 3,
    vy: Math.random() * 4 + 2,
    rot: Math.random() * 360,
    rv:  (Math.random() - .5) * 6,
    w:   Math.random() * 10 + 6,
    h:   Math.random() * 6 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: 1,
  }));
  let raf;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.rv;
      if (p.y > canvas.height * .7) p.alpha -= .015;
      if (p.alpha > 0) alive = true;
      ctx.save(); ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color; ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    if (alive) raf = requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  cancelAnimationFrame(raf);
  draw();
}

function startTimer() {}
function stopTimer()  { clearInterval(G.timerRef); G.timerRunning = false; }

function hexToRgb(hex) {
  const h = (hex || '#888888').replace('#','');
  return `${parseInt(h.substring(0,2),16)},${parseInt(h.substring(2,4),16)},${parseInt(h.substring(4,6),16)}`;
}
function updateProg() {
  
}
function toast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className   = 'show' + (type ? ` toast-${type}` : '');
  clearTimeout(t._t);
  t._t = setTimeout(() => { t.className = ''; }, 2400);
}

window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  try {
    if (path === '/play-random-race') {
      startRandomGame(undefined, false);
    } else if (path === '/custom') {
      showCustomEditor(false);
    } else {
      history.replaceState({page:'landing'}, '', '/');
      showLanding(false);
    }
  } catch (err) {
    console.error('Init error:', err);
    history.replaceState({page:'landing'}, '', '/');
    showLanding(false);
  }
});

window.addEventListener('popstate', (e) => {
  const state = e.state;
  if (!state) { showLanding(false); return; }
  if (state.page === 'landing')        showLanding(false);
  else if (state.page === 'custom')    showCustomEditor(false);
  else if (state.page === 'play-random') startRandomGame(undefined, false);
});