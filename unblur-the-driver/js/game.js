// ================================================================
// game.js — Game state, logic, rendering, search
// ================================================================

// ============================================================
// FLAG CODE MAP — nationality → ISO 3166-1 alpha-2
// ============================================================
const FLAG_CODES = {
  'British':        'gb',
  'Dutch':          'nl',
  'Finnish':        'fi',
  'Mexican':        'mx',
  'Monegasque':     'mc',
  'Spanish':        'es',
  'Australian':     'au',
  'French':         'fr',
  'Japanese':       'jp',
  'German':         'de',
  'Canadian':       'ca',
  'Thai':           'th',
  'Danish':         'dk',
  'Chinese':        'cn',
  'American':       'us',
  'New Zealander':  'nz',
  'Italian':        'it',
  'Brazilian':      'br',
  'Austrian':       'at',
  'Argentinian':    'ar',
  'Colombian':      'co',
  'Venezuelan':     've',
  'Swedish':        'se',
  'Belgian':        'be',
  'Russian':        'ru',
  'Polish':         'pl',
  'South African':  'za',
};

function getFlagCode(nationality) {
  return FLAG_CODES[nationality] || 'un';
}

// GAME STATE
// ============================================================
const MAX_GUESSES = 8;
let targetDriver = null;
let guessCount = 0;
let gameOver = false;
let guessedIds = new Set();

function pickRandomDriver() {
  const withPhotos = DRIVERS.filter(d => d.photo);
  return withPhotos[Math.floor(Math.random() * withPhotos.length)];
}

let gameStarted = false;

function newGame() {
  const img = document.getElementById('driverPhoto');
  img.style.display = 'none';
  img.src = '';

  targetDriver = pickRandomDriver();
  guessCount = 0;
  gameOver = false;
  gameStarted = false;
  guessedIds = new Set();

  document.getElementById('guessRows').innerHTML = '';
  document.getElementById('resultBanner').className = 'result-banner';
  document.getElementById('searchContainer').style.display = 'block';
  document.getElementById('searchInput').value = '';
  document.getElementById('dropdown').className = 'dropdown';

  // Reset timer display fără să-l porneasca
  stopTimer();
  secondsLeft = TIMER_SECONDS;
  document.getElementById('timerDisplay').textContent = '2:00';
  document.getElementById('timerDisplay').classList.remove('warning','danger');

  // Arată overlay-ul
  const overlay = document.getElementById('playOverlay');
  overlay.classList.remove('hidden');

  // Placeholder gri, fără poză
  document.getElementById('photoPlaceholder').style.display = 'flex';
  document.getElementById('photoPlaceholder').classList.add('lobby-placeholder');
  img.style.display = 'none';

  updateGuessLabel();
}

function startGame() {
  gameStarted = true;

  // Ascunde overlay cu fade
  const overlay = document.getElementById('playOverlay');
  overlay.classList.add('hidden');

  // Scoate clasa lobby de pe placeholder
  document.getElementById('photoPlaceholder').classList.remove('lobby-placeholder');

  // Afișează poza și pornește timerul
  updatePhoto();
  startTimer();
}

function updateGuessLabel() {
  document.getElementById('guessLabel').textContent =
    `GUESS ${guessCount + 1} OF ${MAX_GUESSES}`;
}

function updatePhoto() {
  const img = document.getElementById('driverPhoto');
  const placeholder = document.getElementById('photoPlaceholder');

  if (targetDriver.photo) {
    const blurPercent = Math.max(0, 100 - guessCount * 12.5);
    // px value: 100% blur = 40px, scale down proportionally
    const blurPx = (blurPercent / 100) * 8;

    if (!img.src.endsWith(targetDriver.photo.replace(/^\.?\/?/, ''))) {
      // Noua poza — seteaza blur inainte de a o afisa, fara tranzitie
      img.style.transition = 'none';
      img.style.filter = `blur(${blurPx}px)`;
      img.src = targetDriver.photo;
      img.onload = () => {
        placeholder.style.display = 'none';
        img.style.display = 'block';
        // Reactiveaza tranzitia dupa ce poza e incarcata
        requestAnimationFrame(() => {
          img.style.transition = 'filter 0.5s ease';
        });
      };
      img.onerror = () => {
        img.style.display = 'none';
        placeholder.style.display = 'flex';
      };
    } else {
      // Aceeasi poza — doar actualizeaza blur-ul cu tranzitie
      img.style.transition = 'filter 0.5s ease';
      img.style.filter = `blur(${blurPx}px)`;
    }
  } else {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
  }
}

// ============================================================

// COMPARISON LOGIC
// ============================================================
function compare(guess, target) {
  const results = {};

  // Nationality — correct / close (vecin/continent) / wrong
  results.nationality = getNationalityResult(guess.nationality, target.nationality);

  // Team
  results.team = guess.team === target.team ? 'correct' : 'wrong';

  // Born decade: correct = exact, close = 1 decade apart, wrong = 2+ decades apart
  // Map decades to numbers for comparison
  const decadeMap = { '1910s': 1, '20s': 2, '30s': 3, '40s': 4, '50s': 5, '60s': 6, '70s': 7, '80s': 8, '90s': 9, '00s': 10, '2010s': 11 };
  const gBorn = decadeMap[guess.born] || 0;
  const tBorn = decadeMap[target.born] || 0;
  const bornDiff = Math.abs(gBorn - tBorn);
  if (bornDiff === 0) results.born = { state: 'correct', arrow: '' };
  else if (bornDiff === 1) results.born = { state: 'close', arrow: gBorn < tBorn ? 'up' : 'down' };
  else results.born = { state: 'wrong', arrow: gBorn < tBorn ? 'up' : 'down' };

  // Wins: correct = exact, close = within 5
  if (guess.wins === target.wins) results.wins = { state: 'correct', arrow: '' };
  else if (Math.abs(guess.wins - target.wins) <= 5) results.wins = { state: 'close', arrow: guess.wins < target.wins ? 'up' : 'down' };
  else results.wins = { state: 'wrong', arrow: guess.wins < target.wins ? 'up' : 'down' };

  // Poles: correct = exact, close = within 5
  if (guess.poles === target.poles) results.poles = { state: 'correct', arrow: '' };
  else if (Math.abs(guess.poles - target.poles) <= 5) results.poles = { state: 'close', arrow: guess.poles < target.poles ? 'up' : 'down' };
  else results.poles = { state: 'wrong', arrow: guess.poles < target.poles ? 'up' : 'down' };

  return results;
}

// ============================================================
// RENDER GUESS ROW
// ============================================================
function renderGuessRow(driver, results) {
  const row = document.createElement('div');
  row.className = 'guess-row';

  // Name cell
  const nameCell = document.createElement('div');
  const isCorrect = driver.id === targetDriver.id;
  nameCell.className = `guess-cell name-cell driver-name-cell ${isCorrect ? 'correct' : 'wrong'}`;
  nameCell.innerHTML = `<div class="cell-main">${driver.name}</div>`;
  row.appendChild(nameCell);

  // Nationality
  const natCell = document.createElement('div');
  natCell.className = `guess-cell ${results.nationality}`;
  natCell.innerHTML = `<img class="flag-img" src="https://flagcdn.com/h20/${getFlagCode(driver.nationality)}.png" alt="${driver.nationality}" onerror="this.style.display='none'"><div class="cell-sub">${driver.nationality}</div>`;
  row.appendChild(natCell);

  // Team
  const teamCell = document.createElement('div');
  teamCell.className = `guess-cell ${results.team}`;
  teamCell.innerHTML = `
    <div style="width:8px;height:8px;border-radius:50%;background:${driver.teamColor};margin-bottom:3px"></div>
    <div class="cell-main" style="font-size:11px">${driver.team}</div>
  `;
  row.appendChild(teamCell);

  // Born
  const bornCell = document.createElement('div');
  bornCell.className = `guess-cell ${results.born.state}`;
  bornCell.innerHTML = `<div class="cell-main">${driver.born}</div>${results.born.arrow ? `<div class="arrow ${results.born.arrow}"></div>` : ''}`;
  row.appendChild(bornCell);

  // Wins
  const winsCell = document.createElement('div');
  winsCell.className = `guess-cell ${results.wins.state}`;
  winsCell.innerHTML = `<div class="cell-main">${driver.wins}</div>${results.wins.arrow ? `<div class="arrow ${results.wins.arrow}"></div>` : ''}`;
  row.appendChild(winsCell);

  // Poles
  const polesCell = document.createElement('div');
  polesCell.className = `guess-cell ${results.poles.state}`;
  polesCell.innerHTML = `<div class="cell-main">${driver.poles}</div>${results.poles.arrow ? `<div class="arrow ${results.poles.arrow}"></div>` : ''}`;
  row.appendChild(polesCell);

  document.getElementById('guessRows').prepend(row);
}

// ============================================================
// SUBMIT GUESS
// ============================================================
function submitGuess(driver) {
  if (!gameStarted) return;
  if (gameOver) return;
  if (guessedIds.has(driver.id)) return;

  guessedIds.add(driver.id);
  guessCount++;

  const results = compare(driver, targetDriver);
  renderGuessRow(driver, results);
  updatePhoto();

  // Check win
  const isWin = driver.id === targetDriver.id;
  if (isWin) {
    updateGuessLabel();
    endGame(true);
    return;
  }

  // Check lose
  if (guessCount >= MAX_GUESSES) {
    // Don't update label — keep showing GUESS 8 OF 8
    endGame(false);
    return;
  }

  updateGuessLabel();
}

function endGame(won, timeout = false) {
  gameOver = true;
  stopTimer();
  document.getElementById('searchContainer').style.display = 'none';

  // Show unblurred photo
  const img = document.getElementById('driverPhoto');
  if (img.style.display !== 'none') {
    img.style.transition = 'filter 0.5s ease';
    img.style.filter = 'blur(0px)';
  }

  const banner = document.getElementById('resultBanner');
  const title = document.getElementById('resultTitle');
  const desc = document.getElementById('resultDesc');

  if (won) {
    banner.className = 'result-banner win';
    title.textContent = `🏆 CORRECT!`;
    desc.textContent = `You found ${targetDriver.name} in ${guessCount} guess${guessCount !== 1 ? 'es' : ''}!`;
    launchConfetti();
  } else if (timeout) {
    banner.className = 'result-banner lose';
    title.textContent = '⏱ TIME UP!';
    desc.textContent = `The driver was ${targetDriver.name}. Better luck next time!`;
  } else {
    banner.className = 'result-banner lose';
    title.textContent = 'DNF';
    desc.textContent = `The driver was ${targetDriver.name}. Better luck next time!`;
  }
}

// ============================================================
// SEARCH / DROPDOWN
// ============================================================
const searchInput = document.getElementById('searchInput');
const dropdown = document.getElementById('dropdown');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { dropdown.className = 'dropdown'; return; }

  const matches = DRIVERS.filter(d =>
    d.name.toLowerCase().includes(q) && !guessedIds.has(d.id)
  );

  dropdown.innerHTML = '';
  if (matches.length === 0) {
    dropdown.innerHTML = '<div class="no-results">No drivers found</div>';
  } else {
    matches.forEach(d => {
      const item = document.createElement('div');
      item.className = 'dropdown-item';
      item.innerHTML = `<span>${d.name}</span>`;
      item.addEventListener('click', () => {
        searchInput.value = '';
        dropdown.className = 'dropdown';
        submitGuess(d);
      });
      dropdown.appendChild(item);
    });
  }
  dropdown.className = 'dropdown open';
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container')) {
    dropdown.className = 'dropdown';
  }
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') dropdown.className = 'dropdown';
});

// ============================================================
// TIMER
// ============================================================
const TIMER_SECONDS = 120; // 2 minute
let timerInterval = null;
let secondsLeft = TIMER_SECONDS;

function startTimer() {
  clearInterval(timerInterval);
  secondsLeft = TIMER_SECONDS;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay();

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      if (!gameOver) endGame(false, true);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimerDisplay() {
  const el = document.getElementById('timerDisplay');
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  el.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

  el.classList.remove('warning', 'danger');
  if (secondsLeft <= 30) el.classList.add('danger');
  else if (secondsLeft <= 60) el.classList.add('warning');
}

// ============================================================
// CONFETTI
// ============================================================
(function() {
  const COLORS = [
    '#e8002d', '#c9a84c', '#00d68f', '#f4f2ec',
    '#e8c96a', '#2979ff', '#f5a623', '#ffffff'
  ];
  const SHAPES = ['square', 'circle', 'strip'];
  let canvas, ctx, particles = [], animId = null;

  function createCanvas() {
    if (canvas) return;
    canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.cssText = [
      'position:fixed', 'top:0', 'left:0',
      'width:100%', 'height:100%',
      'pointer-events:none', 'z-index:9999'
    ].join(';');
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
  }

  function resize() {
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function rand(a, b) { return a + Math.random() * (b - a); }

  // Spawn o particulă dintr-un punct de origine cu un unghi și viteză dată
  function spawnFrom(ox, oy, angleMin, angleMax, speedMin, speedMax) {
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    const angle = rand(angleMin, angleMax);
    const speed = rand(speedMin, speedMax);
    return {
      x: ox, y: oy,
      w: shape === 'strip' ? rand(3, 6)   : rand(7, 14),
      h: shape === 'strip' ? rand(14, 24) : rand(7, 14),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      rot: rand(0, Math.PI * 2),
      spin: rand(-0.22, 0.22),
      alpha: 1,
      decay: rand(0.010, 0.018),
      wobble: rand(0, Math.PI * 2),
      wobbleSpeed: rand(0.03, 0.08),
    };
  }

  function drawParticle(p) {
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    if (p.shape === 'circle') {
      ctx.beginPath();
      ctx.ellipse(0, 0, p.w / 2, p.h / 2, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    }
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.wobble += p.wobbleSpeed;
      p.x   += p.vx + Math.sin(p.wobble) * 0.8;
      p.y   += p.vy;
      p.vx  *= 0.985;        // frecare orizontală
      p.vy  += 0.18;         // gravitație
      p.rot += p.spin;
      p.alpha -= p.decay;
    });
    particles = particles.filter(p => p.alpha > 0.02);
    particles.forEach(drawParticle);

    if (particles.length > 0) {
      animId = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(animId);
      animId = null;
      if (canvas) { canvas.remove(); canvas = null; ctx = null; }
    }
  }

  function burst(ox, oy, angleMin, angleMax, count) {
    for (let i = 0; i < count; i++) {
      particles.push(spawnFrom(ox, oy, angleMin, angleMax, 8, 22));
    }
  }

  window.launchConfetti = function() {
    if (animId) { cancelAnimationFrame(animId); animId = null; }
    if (canvas) { canvas.remove(); canvas = null; ctx = null; }
    particles = [];
    createCanvas();

    const W = canvas.width;
    const DEG = Math.PI / 180;

    // Explodează imediat din 5 puncte ca în poză:
    // Colț stânga-sus → spre dreapta-jos (20°–80°)
    burst(0, 0,            20*DEG,  80*DEG,  60);
    // Colț dreapta-sus → spre stânga-jos (100°–160°)
    burst(W, 0,            100*DEG, 160*DEG, 60);
    // Centru-sus → explodează în evantai (30°–150°)
    burst(W * 0.5, 0,      30*DEG,  150*DEG, 80);
    // Sfert-stânga sus → spre interior (10°–90°)
    burst(W * 0.15, 0,     15*DEG,  95*DEG,  50);
    // Sfert-dreapta sus → spre interior (85°–165°)
    burst(W * 0.85, 0,     85*DEG,  165*DEG, 50);

    // Val 2 după 350ms — același pattern, mai puțin
    setTimeout(() => {
      burst(0, 0,           20*DEG,  80*DEG,  35);
      burst(W, 0,           100*DEG, 160*DEG, 35);
      burst(W * 0.5, 0,     30*DEG,  150*DEG, 45);
    }, 350);

    // Val 3 după 750ms — finish
    setTimeout(() => {
      burst(W * 0.25, 0,    20*DEG,  120*DEG, 30);
      burst(W * 0.75, 0,    60*DEG,  160*DEG, 30);
    }, 750);

    animId = requestAnimationFrame(tick);
  };
})();

// ============================================================
// START
// ============================================================
newGame();

// Prevent right-click / drag on driver photo to avoid revealing unblurred image
document.getElementById('driverPhoto').addEventListener('contextmenu', e => e.preventDefault());
document.getElementById('driverPhoto').addEventListener('dragstart', e => e.preventDefault());
