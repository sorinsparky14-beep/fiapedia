// Lights Out & Toe Away — Core Game Logic

const BEST_OF = 5;
const WIN_TARGET = 3; // first to 3 rounds wins series
const TURN_TIME = 60;
let GS={
  board:Array(9).fill(null),rows:[],cols:[],cur:"X",
  scores:{X:0,O:0},  // series round wins
  used:new Set(),over:false,
  drawOffer:null,     // "X" or "O" if one player offered draw
  round:1,
  roundStarter:"X"   // who started the current round — used to re-start draws
}
// ── RANDOM FIRST PLAYER ───────────────────────────────────────────────
// Returns "X" or "O" with equal probability — used at the start of every round
function randomStart(){ return Math.random() < 0.5 ? "X" : "O"; }
// Returns who should start the NEXT round:
//   draw  → same player who started this round (roundStarter)
//   X won → O starts (loser starts)
//   O won → X starts (loser starts)
function nextRoundStarter(winnerP){
  if(winnerP==="draw") return GS.roundStarter;
  return winnerP==="X" ? "O" : "X";
}
// ── GAME MODE GLOBALS ─────────────────────────────────────────────────
let GAME_MODE = "same";
let P1_LABEL = "Player 1";
let P2_LABEL = "Player 2";
let ROOM_CODE = "";
let roomBC = null;
let roomRole = "";
let ROOM_POLL = null;
let selIdx=null;
let timerInterval=null;
let timerLeft=TURN_TIME;
let drawPending=false;

// ── ELEMENT PREFIX HELPER ─────────────────────────────────────────────
// Each game mode has its own screen with prefixed element IDs.
// px() returns the right prefix so all DOM lookups hit the active screen.
function px(){ return GAME_MODE==="bot" ? "bot-" : GAME_MODE==="room" ? "room-" : "same-"; }
function el(id){ return document.getElementById(px()+id); }
// Active game screen id
function gameScreenId(){ return GAME_MODE==="bot" ? "game-bot" : GAME_MODE==="room" ? "game-room" : "game-same"; }

// ── RENDER LABEL ─────────────────────────────────────────────────────────
function mkLabel(cat,extra=""){
  const el=document.createElement("div");
  el.className="cl"+(extra?" "+extra:"");
  const txt=cat.label.replace(/\n/g,"<br>");
  const badgeClass=cat.badge||"";
  const groupLabels={team:"TEAM",nat:"NATION",trophy:"TROPHY",circuit:"CIRCUIT",tp:"BOSS",wild:"WILDCARD",tm:"TEAMMATE"};
  const badgeTxt=groupLabels[cat.g]||cat.g.toUpperCase();
  if(cat.img && cat.carImg){
    el.innerHTML=`<img class="cl-car" src="${cat.img}" alt=""/><div class="cl-tx">${txt}</div><span class="badge ${badgeClass}">${badgeTxt}</span>`;
  } else if(cat.img && cat.flagImg){
    el.innerHTML=`<img class="cl-flag" src="${cat.img}" alt=""/><div class="cl-tx">${txt}</div><span class="badge ${badgeClass}">${badgeTxt}</span>`;
  } else if(cat.img){
    el.innerHTML=`<img class="cl-pt" src="${cat.img}" alt=""/><div class="cl-tx">${txt}</div><span class="badge ${badgeClass}">${badgeTxt}</span>`;
  } else {
    el.innerHTML=`<div class="cl-ic">${cat.icon}</div><div class="cl-tx">${txt}</div><span class="badge ${badgeClass}">${badgeTxt}</span>`;
  }
  return el;
}

// ── RENDER GRID ────────────────────────────────────────────────────────────
function renderGrid(){
  const gg=el("gg");
  const {board,rows,cols}=GS;
  gg.innerHTML="";
  const corner=document.createElement("div");
  corner.className="corner";
  // Empty corner — no logo, no text
  gg.appendChild(corner);
  cols.forEach(c=>gg.appendChild(mkLabel(c)));

  // Determine if the local player can interact
  const isMyTurn = GAME_MODE==="same"
    || (GAME_MODE==="bot" && GS.cur==="X")
    || (GAME_MODE==="room" && ((roomRole==="host" && GS.cur==="X") || (roomRole==="guest" && GS.cur==="O")));

  // Toggle pointer-events / hover class on the grid wrapper
  if(isMyTurn && !GS.over){
    gg.classList.remove("no-hover");
  } else {
    gg.classList.add("no-hover");
  }

  for(let r=0;r<3;r++){
    gg.appendChild(mkLabel(rows[r],"row-cl"));
    for(let c=0;c<3;c++){
      const idx=r*3+c;
      const cell=document.createElement("div");
      cell.className="cell"+(board[idx]?" taken":"");
      cell.dataset.idx=idx;
      if(board[idx]){
        const p=board[idx].p;
        cell.innerHTML=`<div class="ci"><div class="cm cm-${p.toLowerCase()}">${p}</div><div class="cd">${board[idx].drv}</div></div>`;
      } else {
        cell.innerHTML=`<div class="ci"><div class="ce"></div></div>`;
        if(!GS.over && isMyTurn) cell.addEventListener("click",()=>openM(idx));
      }
      gg.appendChild(cell);
    }
  }
  const w=checkWin(board);
  if(w&&w.p!=="draw"){
    el("gg").querySelectorAll(".cell").forEach(c=>{
      if(w.l.includes(parseInt(c.dataset.idx))) c.classList.add("w"+w.p.toLowerCase());
    });
  }
}
function renderScore(){
  // Pips
  ["X","O"].forEach(p=>{
    const pipEl=el("pips-"+p.toLowerCase());
    if(!pipEl) return;
    pipEl.innerHTML="";
    for(let i=0;i<WIN_TARGET;i++){
      const pip=document.createElement("div");
      pip.className="pip "+(p==="X"?"x-pip":"o-pip")+(i<GS.scores[p]?" won":"");
      pipEl.appendChild(pip);
    }
  });
  const roundEl=el("round-lbl"); if(roundEl) roundEl.textContent="Round "+GS.round;
  const ti=el("ti");
  const p1lbl=P1_LABEL||"Player 1";
  const p2lbl=P2_LABEL||"Player 2";
  if(ti){
    if(GS.cur==="X"){ti.textContent=p1lbl+" — X";ti.className="ti ti-x";}
    else{ti.textContent=p2lbl+" — O";ti.className="ti ti-o";}
  }
  const timerLbl=el("timer-lbl"); if(timerLbl) timerLbl.textContent=(GS.cur==="X"?p1lbl:p2lbl)+" TURN";
  // Update scoreboard names
  const p1el=el("name-x"); if(p1el) p1el.textContent=p1lbl;
  const p2el=el("name-o"); if(p2el) p2el.textContent=p2lbl;
  // Button visibility
  const isMyTurn = GAME_MODE!=="room" || (roomRole==="host" ? GS.cur==="X" : GS.cur==="O");
  const isBotTurn = GAME_MODE==="bot" && GS.cur==="O";
  const skipBtn = el("skip-btn");
  const drawBtn = el("draw-btn");
  if(skipBtn) skipBtn.style.visibility = (isBotTurn || !isMyTurn) ? "hidden" : "visible";
  if(drawBtn){
    drawBtn.style.visibility = (isBotTurn || !isMyTurn) ? "hidden" : "visible";
    // Always reset label when draw is no longer pending
    if(!drawPending){
      drawBtn.textContent="🤝 Offer Draw";
      drawBtn.style.borderColor="";
      drawBtn.style.color="";
    }
  }
  // Grid turn class
  const gw=el("gg");
  if(gw){gw.classList.toggle("turn-x",GS.cur==="X");gw.classList.toggle("turn-o",GS.cur==="O");}
}
function renderUsed(){
  const ub=el("ub");
  if(!ub) return;
  if(!GS.used.size){ub.innerHTML="";return;}
  ub.innerHTML="Used: "+[...GS.used].map(d=>`<span class="ut">${d}</span>`).join("");
}

// ── MODAL ─────────────────────────────────────────────────────────────────
function openM(idx){
  if(GS.over)return;
  if(GAME_MODE==="room"){
    const myTurn=(roomRole==="host"&&GS.cur==="X")||(roomRole==="guest"&&GS.cur==="O");
    if(!myTurn) return;
  }
  selIdx=idx;
  const r=Math.floor(idx/3),c=idx%3;
  const isP1=GS.cur==="X";
  const pCls=isP1?"ct ct-x":"ct ct-o";
  const pColor=isP1?"var(--red)":"var(--blue)";
  const pGrad=isP1?"rgba(154,4,0,.6)":"rgba(0,100,180,.6)";
  const pName=isP1?P1_LABEL:P2_LABEL;
  const rl=GS.rows[r].label.replace(/\n/g," ");
  const cl2=GS.cols[c].label.replace(/\n/g," ");
  // Player-aware header background
  const mh=document.getElementById("mttl");
  mh.textContent=`${pName} — NAME A DRIVER`;
  mh.style.background=`linear-gradient(90deg,${pGrad},transparent)`;
  mh.style.color=pColor;
  // Player-aware input border on focus
  const di=document.getElementById("di");
  di.style.setProperty("--player-color", pColor);
  di.className="di player-di";
  document.getElementById("mctx").innerHTML=`<span class="${pCls}">${rl}</span><span style="color:var(--t2)">×</span><span class="${pCls}">${cl2}</span>`;
  di.value="";
  document.getElementById("err").textContent="";
  document.getElementById("sugg").innerHTML="";
  document.getElementById("mov").classList.add("on");
  setTimeout(()=>di.focus(),50);
}
function closeM(){document.getElementById("mov").classList.remove("on");selIdx=null;const s=document.getElementById("sugg");if(s){s.innerHTML="";s.style.display="none";}}
const normalize=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
document.getElementById("di").addEventListener("input",function(){
  const q=normalize(this.value);
  if(q.length < 2){const s=document.getElementById("sugg");s.innerHTML="";s.style.display="none";return;}
  const hits=DB.filter(d=>normalize(d.name).includes(q)).slice(0,20);
  const suggEl=document.getElementById("sugg");
  if(hits.length===0){suggEl.innerHTML="";suggEl.style.display="none";return;}
  suggEl.style.display="block";
  suggEl.innerHTML=hits.map(d=>{
    const esc=d.name.replace(/'/g,"\\'");
    // Highlight matched portion in bold
    const normName=normalize(d.name);
    const idx=normName.indexOf(q);
    const highlighted=d.name.slice(0,idx)+'<strong>'+d.name.slice(idx,idx+q.length)+'</strong>'+d.name.slice(idx+q.length);
    return `<div class="si" onclick="pickSug('${esc}')">${highlighted}</div>`;
  }).join("");
  document.getElementById("err").textContent="";
});
document.getElementById("di").addEventListener("keydown",e=>{if(e.key==="Enter")submitD();if(e.key==="Escape")closeM();});
document.getElementById("mov").addEventListener("click",e=>{if(e.target===document.getElementById("mov"))closeM();});
function pickSug(name){document.getElementById("di").value=name;const s=document.getElementById("sugg");s.innerHTML="";s.style.display="none";submitD();}
function submitD(){
  const raw=document.getElementById("di").value.trim();
  if(!raw)return;
  if(selIdx===null||selIdx===undefined){return;}
  let drv=DB.find(d=>d.name.toLowerCase()===raw.toLowerCase());
  if(!drv){
    const partial=DB.find(d=>normalize(d.name).includes(normalize(raw)));
    if(partial&&partial.name){document.getElementById("di").value=partial.name;submitWith(partial);return;}
    document.getElementById("err").textContent="❌ Driver not found. Check spelling.";return;
  }
  submitWith(drv);
}
// Check that all remaining empty cells can be completed with distinct unused drivers
function canCompleteBoard(board, placingIdx, usedAfter, rows, cols){
  // Build cells: for each empty cell (excluding the one being placed), find available drivers
  var emptyCells=[];
  for(var i=0;i<9;i++){
    if(board[i]!==null) continue; // already filled
    if(i===placingIdx) continue;  // cell being placed right now
    var ri=Math.floor(i/3), ci=i%3;
    var rc=rows[ri], cc=cols[ci];
    var drivers=[];
    for(var d=0;d<DB.length;d++){
      if(usedAfter.has(DB[d].name)) continue;
      try{ if(rc.check(DB[d])&&cc.check(DB[d])) drivers.push(d); }catch(e){}
    }
    emptyCells.push({cell:i, drivers:drivers});
  }
  if(emptyCells.length===0) return true; // no empty cells left
  // Check each cell has at least 1 candidate
  for(var j=0;j<emptyCells.length;j++){
    if(emptyCells[j].drivers.length===0) return false;
  }
  // Run bipartite matching on remaining cells
  var numCells=emptyCells.length;
  var matchDriver={};
  function augment(ci,seen){
    var drivers=emptyCells[ci].drivers;
    for(var k=0;k<drivers.length;k++){
      var drv=drivers[k]; if(seen[drv]) continue; seen[drv]=true;
      if(matchDriver[drv]===undefined||augment(matchDriver[drv],seen)){ matchDriver[drv]=ci; return true; }
    }
    return false;
  }
  var matched=0;
  for(var i=0;i<numCells;i++){ if(augment(i,{})) matched++; }
  return matched===numCells;
}

function submitWith(drv){
  if(!drv||!drv.name){console.error("submitWith: drv is undefined");return;}
  const idx=selIdx;
  if(idx===null||idx===undefined){return;}
  const r=Math.floor(idx/3),c=idx%3;
  // Wrong answer → flash cell, pass turn
  if(GS.used.has(drv.name)){
    document.getElementById("err").textContent="❌ Already used — turn passes!";
    setTimeout(()=>{closeM();passTurn("already used");},900);
    return;
  }
  if(!GS.rows[r].check(drv)){
    document.getElementById("err").textContent=`❌ ${drv.name} doesn't fit — turn passes!`;
    setTimeout(()=>{closeM();passTurn("wrong answer");},900);
    return;
  }
  if(!GS.cols[c].check(drv)){
    document.getElementById("err").textContent=`❌ ${drv.name} doesn't fit — turn passes!`;
    setTimeout(()=>{closeM();passTurn("wrong answer");},900);
    return;
  }
  // Check: placing this driver must not leave any remaining empty cell unsolvable
  const usedAfter=new Set(GS.used);
  usedAfter.add(drv.name);
  if(!canCompleteBoard(GS.board,idx,usedAfter,GS.rows,GS.cols)){
    document.getElementById("err").textContent=`❌ ${drv.name} doesn't fit — turn passes!`;
    setTimeout(()=>{closeM();passTurn("wrong answer");},900);
    return;
  }
  // Correct!
  GS.board[idx]={p:GS.cur,drv:drv.name};
  GS.used.add(drv.name);
  drawPending=false; // cancel any pending draw offer
  // Room mode: broadcast move
  if(GAME_MODE==="room"){
    broadcastMove({type:"place", cell:idx, driver:drv.name});
  }
  closeM();renderGrid();renderUsed();
  const w=checkWin(GS.board);
  if(w){
    stopTimer();
    GS.over=true;
    if(w.p!=="draw")GS.scores[w.p]++;
    renderScore();
    setTimeout(()=>showResult(w),350);
  } else {
    GS.cur=GS.cur==="X"?"O":"X";
    renderScore();
    resetTimer();
    if(GAME_MODE==="bot") setTimeout(maybeBotTurn,150);
  }
}
function passTurn(reason){
  const gg=el("gg");
  const cells=gg ? gg.querySelectorAll(".cell") : [];
  if(selIdx!==null&&cells[selIdx]) cells[selIdx].classList.add("mistake");
  setTimeout(()=>cells.forEach(c=>c.classList.remove("mistake")),500);
  drawPending=false;
  GS.cur=GS.cur==="X"?"O":"X";
  renderGrid();
  renderScore();
  // Only broadcast if this is a LOCAL pass in room mode, not a remote skip or bot skip
  if(GAME_MODE==="room" && reason!=="remote skip") broadcastMove({type:"skip"});
  resetTimer();
  if(GAME_MODE==="bot") setTimeout(maybeBotTurn,100);
}
let resCountdownTimer = null;
let cdInterval = null;

function clearResultCountdown(){
  clearInterval(cdInterval); cdInterval=null;
  clearTimeout(resCountdownTimer); resCountdownTimer=null;
  document.getElementById("res").classList.remove("on");
  document.getElementById("res-countdown").textContent="";
}

function showResult(w){
  document.getElementById("rtr").textContent=w.p==="draw"?"🤝":"🏆";
  const tt=document.getElementById("rtt");
  const sw=document.getElementById("series-won");
  sw.textContent="";
  const isSeries=GS.scores.X>=WIN_TARGET||GS.scores.O>=WIN_TARGET;
  if(w.p==="draw"){
    tt.textContent="IT'S A DRAW";tt.className="rtt dr";
    document.getElementById("rts").textContent="Full board — no winner";
  } else {
    const winnerName=w.p==="X"?P1_LABEL:P2_LABEL;
    tt.textContent=`${winnerName} WINS!`;
    tt.className="rtt "+w.p.toLowerCase()+"w";
    document.getElementById("rts").textContent=`Score: ${P1_LABEL} ${GS.scores.X} — ${GS.scores.O} ${P2_LABEL}`;
  }
  if(isSeries){
    const winner=GS.scores.X>=WIN_TARGET?"X":"O";
    const wName=winner==="X"?P1_LABEL:P2_LABEL;
    sw.textContent=`🏆 ${wName} WINS THE SERIES!`;
  }
  document.getElementById("res").classList.add("on");
  clearTimeout(resCountdownTimer);
  clearInterval(cdInterval); cdInterval=null;

  // In room mode, only the HOST drives the countdown — guest waits for broadcast
  if(GAME_MODE==="room" && roomRole==="guest") return;

  const cdEl=document.getElementById("res-countdown");

  function advanceRound(){
    document.getElementById("res").classList.remove("on");
    cdEl.textContent="";
    const fp=nextRoundStarter(w.p);
    if(GAME_MODE==="room"){
      const {rows,cols}=buildGrid();
      const rowIdxs=rows.map(r=>CATS.findIndex(c=>c.id===r.id));
      const colIdxs=cols.map(c=>CATS.findIndex(ca=>ca.id===c.id));
      const grid={rows:rowIdxs,cols:colIdxs};
      if(isSeries){
        // New series = fresh random start for both players
        const seriesFp=randomStart();
        broadcastMove({type:"new-series", grid, firstPlayer: seriesFp});
        GS.scores={X:0,O:0};GS.round=1;
        newRoundBoard({rows:rowIdxs,cols:colIdxs}, seriesFp);
      } else {
        // Next round = loser starts
        broadcastMove({type:"next-round", grid, firstPlayer: fp});
        GS.round++;
        newRoundBoard({rows:rowIdxs,cols:colIdxs}, fp);
      }
    } else {
      if(isSeries) newSeries(); else nextRound(fp);
    }
  }

  if(w.p==="draw"){
    // Draw: no board reveal — just wait 4s on the result screen then advance
    cdEl.textContent="";
    resCountdownTimer=setTimeout(advanceRound, 4000);
  } else {
    // Win: show 5s countdown, reveal board for 5s, then advance
    let secs=5;
    cdEl.textContent="Board visible in "+secs+"s…";
    cdInterval=setInterval(()=>{
      secs--;
      if(secs>0){ cdEl.textContent="Board visible in "+secs+"s…"; }
      else{
        clearInterval(cdInterval);
        document.getElementById("res").classList.remove("on");
        cdEl.textContent="";
        resCountdownTimer=setTimeout(advanceRound, 5000);
      }
    },1000);
  }
}

// ── GAME CONTROL ────────────────────────────────────────────────────────────
function startGame(){
  // Full new series
  GS.scores={X:0,O:0};
  GS.round=1;
  newRoundBoard();
}
// ── GAME MODE ENTRY POINTS ────────────────────────────────────────────
function startSameScreen(){
  GAME_MODE="same";P1_LABEL="Player 1";P2_LABEL="Player 2";
  removeBotBadge();
  startGame();
}
let mmInterval = null;
let mmFoundTimer = null;

function startVsBot(){
  GAME_MODE="bot"; P1_LABEL="You"; P2_LABEL="Opponent";
  showS("matchmaking");

  const totalSecs = 120;
  // 99% chance: found between 10–30s; 1% chance: 30–120s
  const foundAt = Math.random() < 0.99
    ? 10 + Math.floor(Math.random() * 21)   // 10–30s
    : 30 + Math.floor(Math.random() * 91);  // 30–120s
  let elapsed = 0;
  const CIRC = 2 * Math.PI * 46; // r=46 → circumference ≈ 289.03

  const ring = document.getElementById("mm-ring");
  const timerEl = document.getElementById("mm-timer");
  const statusEl = document.getElementById("mm-status");
  const foundEl = document.getElementById("mm-found");

  // Reset UI — ring starts empty, timer at 0:00
  statusEl.style.display = "";
  foundEl.style.display = "none";
  ring.style.stroke = "var(--green)";
  ring.style.strokeDashoffset = String(CIRC); // fully empty
  timerEl.style.color = "var(--t1)";
  timerEl.textContent = "0:00";

  clearInterval(mmInterval);
  clearTimeout(mmFoundTimer);

  mmInterval = setInterval(()=>{
    elapsed++;
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    timerEl.textContent = mins + ":" + (secs < 10 ? "0" : "") + secs;

    // Ring fills as time increases
    const pct = elapsed / totalSecs;
    ring.style.strokeDashoffset = String(CIRC * (1 - pct));

    if(elapsed >= foundAt || elapsed >= totalSecs){
      clearInterval(mmInterval); mmInterval = null;
      statusEl.style.display = "none";
      foundEl.style.display = "flex";
      mmFoundTimer = setTimeout(()=>{ launchBotGame(); }, 1500);
    }
  }, 1000);
}

function launchBotGame(){
  P2_LABEL = "Opponent";
  addBotBadge();
  startGame();
}

function cancelMatchmaking(){
  clearInterval(mmInterval); mmInterval = null;
  clearTimeout(mmFoundTimer); mmFoundTimer = null;
  GAME_MODE="same"; P1_LABEL="Player 1"; P2_LABEL="Player 2";
  showS("home");
}

function removeBotBadge(){document.querySelectorAll(".bot-badge").forEach(b=>b.remove());}
function addBotBadge(){
  removeBotBadge();
  const p2el=el("name-o");
  if(!p2el) return;
  const badge=document.createElement("span");
  badge.className="bot-badge";badge.textContent="";badge.style.display="none";
  p2el.insertAdjacentElement("afterend",badge);
}
function nextRound(fp){
  GS.round++;
  if(_cpick._isCustom){
    // Custom game: save next starter then go back to picker
    _cpick.nextStarter = fp || null;
    cpickNewRound();
  } else {
    newRoundBoard(null, fp);
  }
}
function newSeries(){
  GS.scores={X:0,O:0};
  GS.round=1;
  if(_cpick._isCustom){
    _cpick.nextStarter = null; // new series = fresh random start
    cpickNewRound();
  } else {
    newRoundBoard(); // no fp → randomStart() inside newRoundBoard
  }
}
function cpickNewRound(){
  cpickStopTimer(); // stop any running timer before reset
  // Reset picks but keep scores and round counter
  _cpick.rows=[null,null,null];
  _cpick.cols=[null,null,null];
  _cpick.tab='team';
  _cpick.activeType=null;
  _cpick.activeIdx=null;
  _cpick.turn=0;
  _cpick.consecutiveSkips=0;
  _cpick.timerInterval=null;
  _cpick.timerLeft=60;
  showS('custompicker', false);
  cpickRenderVisualGrid();
  cpickUpdateHeader();
  cpickStartTurnTimer();
}
function newRoundBoard(prebuiltGrid, firstPlayer){
  let rows, cols;
  if(prebuiltGrid){
    rows = prebuiltGrid.rows.map(i=>CATS[i]);
    cols = prebuiltGrid.cols.map(i=>CATS[i]);
  } else {
    const g = buildGrid();
    rows = g.rows; cols = g.cols;
  }
  GS.board=Array(9).fill(null);GS.rows=rows;GS.cols=cols;
  GS.cur=firstPlayer||randomStart();GS.roundStarter=GS.cur;GS.used=new Set();GS.over=false;
  GS.drawOffer=null;drawPending=false;
  clearTimeout(drawCancelTimer); drawCancelTimer=null;
  clearResultCountdown();
  // In room mode, don't push a new history entry — stay on /play-with-a-friend
  showS("game", GAME_MODE!=="room");
  renderGrid();renderScore();renderUsed();
  resetTimer();
  if(GAME_MODE==="bot") setTimeout(maybeBotTurn,300);
}
function confirmQuit(){
  stopTimer();
  cpickStopTimer();
  clearTimeout(botThinkTimer); botThinkTimer=null;
  const ov = document.getElementById("quit-overlay");
  if(ov) ov.style.display = "flex";
}
function cancelQuit(){
  const ov = document.getElementById("quit-overlay");
  if(ov) ov.style.display = "none";
  resetTimer();
  if(GAME_MODE==="bot" && GS.cur==="O") setTimeout(maybeBotTurn,100);
}
function confirmQuitYes(){
  const ov = document.getElementById("quit-overlay");
  if(ov) ov.style.display = "none";
  goHome();
}
// ── TIMER ────────────────────────────────────────────────────────────────
const CIRC = 2*Math.PI*22; // circumference of r=22
function startTimer(){
  stopTimer();
  timerLeft=TURN_TIME;
  updateTimerUI();
  // In room mode, guest never runs the timer — host drives it
  if(GAME_MODE==="room" && roomRole==="guest") return;
  // Broadcast turn-reset to guest so their display syncs immediately
  if(GAME_MODE==="room") broadcastMove({type:"turn-reset"});
  timerInterval=setInterval(()=>{
    timerLeft--;
    updateTimerUI();
    // Broadcast tick to guest every second
    if(GAME_MODE==="room") broadcastMove({type:"tick", t:timerLeft});
    if(timerLeft<=0){
      stopTimer();
      if(document.getElementById("mov").classList.contains("on")) closeM();
      flashTimeUp();
      setTimeout(()=>{
        if(drawPending){
          drawPending=false;
          const btn=el("draw-btn");
          if(btn){btn.textContent="🤝 Offer Draw";btn.style.borderColor="";btn.style.color="";}
        }
        GS.cur=GS.cur==="X"?"O":"X";
        renderScore();
        // Broadcast the timeout-triggered turn change to guest
        if(GAME_MODE==="room") broadcastMove({type:"skip"});
        resetTimer();
        if(GAME_MODE==="bot") setTimeout(maybeBotTurn,100);
      },700);
    }
  },1000);
}
function stopTimer(){clearInterval(timerInterval);timerInterval=null;}
function resetTimer(){
  // Guest never drives the timer — host broadcasts ticks
  if(GAME_MODE==="room" && roomRole==="guest") return;
  if(!GS.over) startTimer();
}
function updateTimerUI(){
  const n=el("timer-num");
  const fg=el("ring-fg");
  if(!n||!fg)return;
  n.textContent=timerLeft;
  const pct=timerLeft/TURN_TIME;
  const offset=CIRC*(1-pct);
  fg.style.strokeDashoffset=offset;
  const col=timerLeft>30?"#00e676":timerLeft>10?"#FFD700":"#E10600";
  fg.style.stroke=col;
  n.style.color=timerLeft<=10?"#E10600":timerLeft<=30?"#FFD700":"var(--t1)";
}
function flashTimeUp(){
  const n=el("timer-num");
  if(n){n.textContent="⏱";n.style.color="#E10600";}
}

// ── SKIP & DRAW ───────────────────────────────────────────────────────────
function skipTurn(){
  if(GS.over)return;
  if(GAME_MODE==="room"){
    const myTurn=(roomRole==="host"&&GS.cur==="X")||(roomRole==="guest"&&GS.cur==="O");
    if(!myTurn) return;
  }
  if(document.getElementById("mov").classList.contains("on"))closeM();
  // passTurn handles the broadcast in room mode
  passTurn("skip");
  // Brief visual feedback
  const ti=el("ti");
  if(ti){ ti.classList.add("flash"); setTimeout(()=>ti.classList.remove("flash"),500); }
}
let drawCancelTimer = null;

function offerDraw(){
  if(GS.over)return;
  if(drawPending){
    // Both agreed — it's a draw
    drawPending=false;
    clearTimeout(drawCancelTimer);
    stopTimer();
    GS.over=true;
    if(GAME_MODE==="room") broadcastMove({type:"draw-accept"});
    showResult({p:"draw",l:[]});
    return;
  }
  drawPending=true;
  const btn=el("draw-btn");
  btn.textContent="✅ Accept Draw?";
  btn.style.borderColor="var(--gold)";
  btn.style.color="var(--gold)";
  // Pass turn so other player can accept
  GS.cur=GS.cur==="X"?"O":"X";
  renderScore();
  resetTimer();
  // In room mode: tell opponent a draw was offered
  if(GAME_MODE==="room") broadcastMove({type:"draw-offer"});
  // Auto-cancel after one full turn if not accepted
  clearTimeout(drawCancelTimer);
  drawCancelTimer=setTimeout(()=>{
    if(drawPending){
      drawPending=false;
      const b=el("draw-btn");
      if(b){b.textContent="🤝 Offer Draw";b.style.borderColor="";b.style.color="";}
      if(GAME_MODE==="room") broadcastMove({type:"draw-cancel"});
    }
  },TURN_TIME*1000+500);
}

// ── SCREEN ROUTING ───────────────────────────────────────────────────
const SCREEN_TITLES = {
  "home":         "Lights Out & Toe Away",
  "howto":        "How to Play — Lights Out & Toe Away",
  "matchmaking":  "Play Online — Lights Out & Toe Away",
  "roomlobby":    "Play with a Friend — Lights Out & Toe Away",
  "roomcreated":  "Play with a Friend — Lights Out & Toe Away",
  "custompicker": "Custom Game — Lights Out & Toe Away",
};

// Map screen IDs to clean URL paths
function screenPath(id, resolvedId){
  if(id==="howto")                                  return "/lights-out-and-toe-away/how-to-play";
  if(id==="matchmaking")                            return "/lights-out-and-toe-away/play-online";
  if(id==="roomlobby" || id==="roomcreated")        return "/lights-out-and-toe-away/play-with-a-friend";
  if(id==="game" || resolvedId==="game-same")       return "/lights-out-and-toe-away/same-screen";
  if(resolvedId==="game-bot")                       return "/lights-out-and-toe-away/play-online";
  if(resolvedId==="game-room")                      return "/lights-out-and-toe-away/play-with-a-friend";
  if(id==="custompicker")                           return "/lights-out-and-toe-away/custom-game";
  return "/lights-out-and-toe-away/";
}

function showS(id, pushHistory=true){
  const resolvedId = id==="game" ? gameScreenId() : id;
  document.querySelectorAll(".scr").forEach(s=>{ s.classList.remove("on"); s.style.display=""; });
  const target=document.getElementById(resolvedId);
  if(target){ target.classList.add("on"); }
  // Red gradient on all pages except home
  document.body.classList.toggle("show-bg", resolvedId !== "home");
  const footer=document.getElementById("info-footer");
  if(footer){
    const isGame = id==="game" || resolvedId==="game-same" || resolvedId==="game-bot" || resolvedId==="game-room";
    footer.style.display = isGame ? "block" : "none";
  }
  if(pushHistory){
    const path = screenPath(id, resolvedId);
    let title = SCREEN_TITLES[id] || SCREEN_TITLES[resolvedId] || "Lights Out & Toe Away";
    if(id==="game"){
      if(GAME_MODE==="bot")        title="Play Online — Lights Out & Toe Away";
      else if(GAME_MODE==="room")  title="Play with a Friend — Lights Out & Toe Away";
      else                         title="Same Screen — Lights Out & Toe Away";
    }
    history.pushState({screen:resolvedId}, "", path);
    document.title = title;
  }
}

window.addEventListener("popstate", function(e){
  const id = (e.state && e.state.screen) || "home";
  const isGameScreen = id==="game-same"||id==="game-bot"||id==="game-room";
  // Run cleanup when returning to home, any game screen, or custom picker
  if(id==="home" || isGameScreen || id==="custompicker"){
    stopTimer();
    stopHeartbeat();
    clearTimeout(botThinkTimer); botThinkTimer=null;
    clearInterval(mmInterval); mmInterval=null;
    clearTimeout(mmFoundTimer); mmFoundTimer=null;
    clearTimeout(resCountdownTimer); resCountdownTimer=null;
    clearTimeout(drawCancelTimer); drawCancelTimer=null;
    const dov=document.getElementById("disconnect-overlay"); if(dov) dov.style.display="none";
    const qov=document.getElementById("quit-overlay"); if(qov) qov.style.display="none";
    clearInterval(ROOM_POLL);
    cpickStopTimer();
    // Reset state BEFORE closing connection to prevent disconnect overlay firing
    const prevMode=GAME_MODE;
    GAME_MODE="same"; ROOM_CODE=""; roomRole=""; drawPending=false; selIdx=null;
    if(prevMode==="room" && _conn && _conn.open){ try{ _conn.send({type:"bye"}); }catch(e){} }
    const connToClose=_conn; _conn=null;
    if(connToClose) connToClose.close();
    if(_peer && !_peer.destroyed){ _peer.destroy(); _peer=null; }
  }
  // Use showS(id, false) — properly updates show-bg, footer, screen visibility
  // without pushing a new history entry
  showS(id, false);
  // Update page title from map
  document.title = SCREEN_TITLES[id] || "Lights Out & Toe Away";
});



// ── Safe localStorage helpers (artifact-iframe compatible) ───────────
function safeLS_set(key, val){ try{ localStorage.setItem(key,val); }catch(e){} }
function safeLS_get(key){ try{ return localStorage.getItem(key); }catch(e){ return null; } }// ═══════════════════════════════════════════════════════════════════════
// BOT AI  (medium difficulty)
// ═══════════════════════════════════════════════════════════════════════
let botThinkTimer = null;

function maybeBotTurn(){
  if(GAME_MODE !== "bot") return;
  if(GS.over) return;
  if(GS.cur !== "O") return;
  clearTimeout(botThinkTimer);
  botThinkTimer = setTimeout(doBotMove, 200); // small delay then doBotMove schedules its own timing
}

function doBotMove(){
  if(GS.over || GS.cur !== "O") return;

  // Helper: random ms between two second values
  function randMs(secMin, secMax){
    return (secMin + Math.random()*(secMax-secMin)) * 1000;
  }

  // If human offered a draw → 50% accept, 50% ignore (both after 20-40s delay)
  if(drawPending){
    const drawDelay = randMs(20, 40);
    if(Math.random() < 0.50){
      setTimeout(()=>{ if(GS.over||GS.cur!=="O")return; offerDraw(); }, drawDelay);
    }
    // else: ignore draw offer, let it auto-cancel, then play normally below
    // Schedule normal move too (will be ignored if draw accepted first)
    // Actually just return here — timer will fire passTurn at 60s if nothing happens
    return;
  }

  // ~15% chance: skip — but only after 40-60 seconds have elapsed
  if(Math.random() < 0.15){
    const skipDelay = randMs(40, 58);
    setTimeout(()=>{ if(GS.over||GS.cur!=="O")return; passTurn("bot skip"); }, skipDelay);
    return;
  }

  // Normal move: play between 20-40 seconds
  const moveDelay = randMs(20, 40);
  setTimeout(()=>{
    if(GS.over || GS.cur !== "O") return;

    const emptyCells=[];
    for(let i=0;i<9;i++){ if(!GS.board[i]) emptyCells.push(i); }
    if(!emptyCells.length) return;

    const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    function bestCell(){
      // Only try to win ~55% of the time
      if(Math.random() < 0.55){
        for(const [a,b,c] of wins){
          const cells=[a,b,c];
          const mine=cells.filter(i=>GS.board[i]&&GS.board[i].p==="O").length;
          const empty=cells.filter(i=>!GS.board[i]);
          if(mine===2&&empty.length===1&&emptyCells.includes(empty[0])) return empty[0];
        }
      }
      // Only block ~60% of the time
      if(Math.random() < 0.60){
        for(const [a,b,c] of wins){
          const cells=[a,b,c];
          const opp=cells.filter(i=>GS.board[i]&&GS.board[i].p==="X").length;
          const empty=cells.filter(i=>!GS.board[i]);
          if(opp===2&&empty.length===1&&emptyCells.includes(empty[0])) return empty[0];
        }
      }
      return emptyCells[Math.floor(Math.random()*emptyCells.length)];
    }

    const cellIdx = (Math.random() < 0.40) ? bestCell() : emptyCells[Math.floor(Math.random()*emptyCells.length)];
    const r=Math.floor(cellIdx/3), c=cellIdx%3;
    const rowCat=GS.rows[r], colCat=GS.cols[c];

    const candidates=DB.filter(d=>!GS.used.has(d.name)&&rowCat.check(d)&&colCat.check(d));
    if(!candidates.length){ passTurn("bot skip"); return; }

    // Pick a safe candidate that doesn't block other cells
    const shuffled=candidates.slice().sort(()=>Math.random()-.5);
    let chosen=null;
    for(const drv of shuffled){
      const usedAfter=new Set(GS.used); usedAfter.add(drv.name);
      if(canCompleteBoard(GS.board,cellIdx,usedAfter,GS.rows,GS.cols)){ chosen=drv; break; }
    }
    if(!chosen) chosen=shuffled[0]; // fallback: pick any if all block (shouldn't happen with valid grid)
    selIdx=cellIdx;
    GS.board[cellIdx]={p:"O",drv:chosen.name};
    GS.used.add(chosen.name);

    const cells=el("gg") ? el("gg").querySelectorAll(".cell") : [];
    if(cells[cellIdx]){
      cells[cellIdx].classList.add("bot-move");
      setTimeout(()=>cells[cellIdx].classList.remove("bot-move"),600);
    }
    const w=checkWin(GS.board);
    if(w){ renderGrid();renderUsed();stopTimer();GS.over=true;if(w.p!=="draw")GS.scores[w.p]++;renderScore();setTimeout(()=>showResult(w),400); return; }
    selIdx=null; // clear so passTurn doesn't flash the bot's cell on next human mistake
    GS.cur="X"; // swap turn BEFORE renderGrid so isMyTurn is correct
    renderGrid(); renderUsed(); renderScore(); resetTimer();
  }, moveDelay);
}

// Block cell clicks during bot's turn
document.addEventListener("click",function(e){
  if(GAME_MODE==="bot"&&GS.cur==="O"&&!GS.over){
    if(e.target.closest(".cell")){ e.stopImmediatePropagation(); e.preventDefault(); }
  }
},true);

// ═══════════════════════════════════════════════════════════════════════
// PRIVATE ROOM SYSTEM  —  WebRTC via PeerJS (true peer-to-peer, no DB)
// ═══════════════════════════════════════════════════════════════════════
// How it works:
//   • PeerJS gives each browser a unique Peer ID using a free public
//     signaling server (just for the handshake — game data is P2P).
//   • The HOST's Peer ID *is* the room code players share.
//   • Once connected, all moves travel directly browser↔browser.
//   • No database, no backend, nothing stored anywhere.

let _peer = null;       // our PeerJS Peer instance
let _conn = null;       // the active DataConnection to the other player

// ── Load PeerJS from CDN if not already present ───────────────────────
function loadPeerJS(cb){
  if(window.Peer){ cb(); return; }
  const s=document.createElement("script");
  s.src="https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js";
  s.onload=cb;
  s.onerror=()=>alert("Could not load PeerJS. Check your internet connection.");
  document.head.appendChild(s);
}

// ── Shared UI helpers ─────────────────────────────────────────────────
function generateQR(text,container){
  container.innerHTML="";
  function makeQR(){
    try{new QRCode(container,{text,width:120,height:120,colorDark:"#FFD700",colorLight:"#16161f",correctLevel:QRCode.CorrectLevel.M});}
    catch(e){container.innerHTML="<div style='color:var(--t2);font-size:25px;text-align:center'>QR unavailable</div>";}
  }
  if(typeof QRCode!=="undefined"){ makeQR(); return; }
  const s=document.createElement("script");
  s.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
  s.onload=makeQR;
  s.onerror=()=>{container.innerHTML="<div style='color:var(--t2);font-size:25px;text-align:center;line-height:1.4'>SCAN<br>TO<br>JOIN</div>";};
  document.head.appendChild(s);
}

function getRoomURL(code){
  return window.location.origin + "/lights-out-and-toe-away/?room=" + code;
}

// ── Wire up an open DataConnection for both host & guest ──────────────
function showDisconnect(msg){
  // Only show if we're actually in an active game or waiting room, not already on home
  const activeScreens = ["game-room","roomcreated","roomlobby"];
  const currentlyVisible = activeScreens.some(id=>{
    const el=document.getElementById(id);
    return el && el.classList.contains("on");
  });
  if(!currentlyVisible) return;
  stopTimer();
  stopHeartbeat();
  clearTimeout(resCountdownTimer); resCountdownTimer=null;
  clearTimeout(drawCancelTimer); drawCancelTimer=null;
  const ov = document.getElementById("disconnect-overlay");
  const msgEl = document.getElementById("disconnect-msg");
  if(ov && msgEl){ msgEl.textContent = msg; ov.style.display = "flex"; }
}

function attachConn(conn){
  _conn=conn;
  let roomFull = false; // flag to suppress close handler on intentional room-full close
  conn.on("data", msg => {
    if(msg.type==="start")          { startRoomGameAsGuest(msg.grid, msg.firstPlayer); }
    else if(msg.type==="bye")       { showDisconnect("Your friend has disconnected."); }
    else if(msg.type==="room-full") {
      roomFull = true;
      _conn=null;
      GAME_MODE="same"; roomRole="";
      document.getElementById("lobby-err").style.color="var(--red)";
      document.getElementById("lobby-err").textContent="This room is full or game already started.";
      showS("roomlobby");
    }
    else                            { applyRoomMove(msg); }
  });
  conn.on("close", ()=>{
    if(roomFull) return; // intentional close — don't show disconnect overlay
    if(GAME_MODE==="room"){
      showDisconnect("Your friend has disconnected.");
    }
  });
  conn.on("error", e=>console.warn("conn error",e));
}

// ── Broadcast a move to the other player ─────────────────────────────
function broadcastMove(move){
  if(_conn && _conn.open) _conn.send(move);
}

// ── CREATE ROOM (host) ────────────────────────────────────────────────
function createRoom(){
  loadPeerJS(()=>{
    GAME_MODE="room"; roomRole="host"; P1_LABEL="You"; P2_LABEL="Friend";

    // Show a "connecting…" state while PeerJS registers us
    document.getElementById("room-code-display").textContent="…";
    document.getElementById("room-waiting").style.display="flex";
    document.getElementById("room-joined-msg").style.display="none";
    document.getElementById("room-start-btn").style.display="none";
    showS("roomcreated");

    if(_peer && !_peer.destroyed) _peer.destroy();
    // Generate a short code and use it directly as the PeerJS peer ID
    const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const shortCode=Array.from({length:6},()=>chars[Math.floor(Math.random()*chars.length)]).join("");
    ROOM_CODE = shortCode;
    _peer = new Peer("f1gl-"+shortCode, { debug: 0 });

    _peer.on("open", () => {
      document.getElementById("room-code-display").textContent=shortCode;
      const url=getRoomURL(shortCode);
      document.getElementById("room-link-input").value=url;
      generateQR(url, document.getElementById("room-qr"));
    });

    _peer.on("connection", conn => {
      // If any guest connection already exists, reject newcomers
      if(_conn){
        conn.on("open", ()=>{ conn.send({type:"room-full"}); conn.close(); });
        return;
      }
      attachConn(conn);
      conn.on("open", ()=>{
        document.getElementById("room-waiting").style.display="none";
        document.getElementById("room-joined-msg").style.display="block";
        document.getElementById("room-start-btn").style.display="block";
      });
    });

    _peer.on("error", e=>{
      console.warn("PeerJS error", e);
      document.getElementById("room-code-display").textContent="Error — retry";
    });
  });
}

// ── JOIN ROOM (guest) ─────────────────────────────────────────────────
function joinRoom(){
  const code=document.getElementById("join-code-input").value.trim();
  document.getElementById("lobby-err").textContent="";
  if(code.length<6){ document.getElementById("lobby-err").textContent="Please enter the full room code."; return; }

  loadPeerJS(()=>{
    GAME_MODE="room"; roomRole="guest"; ROOM_CODE=code; P1_LABEL="Friend"; P2_LABEL="You";

    document.getElementById("lobby-err").style.color="var(--t2)";
    document.getElementById("lobby-err").textContent="Connecting…";

    if(_peer && !_peer.destroyed) _peer.destroy();
    _peer = new Peer({ debug: 0 });

    _peer.on("open", ()=>{
      const conn = _peer.connect("f1gl-"+code, { reliable:true });

      conn.on("open", ()=>{
        document.getElementById("lobby-err").textContent="";
        attachConn(conn);
        showS("roomcreated");
        document.getElementById("room-code-display").textContent=code;
        const url=getRoomURL(code);
        document.getElementById("room-link-input").value=url;
        generateQR(url, document.getElementById("room-qr"));
        document.getElementById("room-waiting").innerHTML=
          '<span class="waiting-dot"></span><span class="waiting-dot"></span><span class="waiting-dot"></span> Waiting for host to start…';
        document.getElementById("room-waiting").style.display="flex";
        document.getElementById("room-joined-msg").style.display="none";
        document.getElementById("room-start-btn").style.display="none";
      });

      conn.on("error", e=>{
        document.getElementById("lobby-err").style.color="var(--red)";
        document.getElementById("lobby-err").textContent="Room not found. Check the code and try again.";
      });

      // Timeout if no connection in 8s
      setTimeout(()=>{
        if(!_conn){
          document.getElementById("lobby-err").style.color="var(--red)";
          document.getElementById("lobby-err").textContent="Could not connect. Is the host waiting?";
        }
      }, 8000);
    });

    _peer.on("error", e=>{
      document.getElementById("lobby-err").style.color="var(--red)";
      document.getElementById("lobby-err").textContent="Room not found. Check the code and try again.";
    });
  });
}

// ── START GAME (host presses Start) ──────────────────────────────────
function startRoomGame(){
  const {rows,cols}=buildGrid();
  const rowIdxs=rows.map(r=>CATS.findIndex(c=>c.id===r.id));
  const colIdxs=cols.map(c=>CATS.findIndex(ca=>ca.id===c.id));
  const fp=randomStart();
  broadcastMove({type:"start", grid:{rows:rowIdxs, cols:colIdxs}, firstPlayer:fp});
  launchRoomGame(rows, cols, fp);
}

function startRoomGameAsGuest(grid, firstPlayer){
  const rows=grid.rows.map(i=>CATS[i]);
  const cols=grid.cols.map(i=>CATS[i]);
  launchRoomGame(rows, cols, firstPlayer);
}

// ── LAUNCH GAME (both sides) ──────────────────────────────────────────
function launchRoomGame(rows,cols,firstPlayer){
  GS.scores={X:0,O:0};GS.round=1;
  GS.board=Array(9).fill(null);GS.rows=rows;GS.cols=cols;
  GS.cur=firstPlayer||randomStart();GS.roundStarter=GS.cur;GS.used=new Set();GS.over=false;GS.drawOffer=null;drawPending=false;
  removeBotBadge();
  document.getElementById("res").classList.remove("on");
  showS("game", GAME_MODE!=="room");renderGrid();renderScore();renderUsed();
  if(GAME_MODE==="room" && roomRole==="guest"){
    timerLeft=TURN_TIME;
    const n=el("timer-num"); if(n) n.textContent="—";
  }
  resetTimer();
  if(GAME_MODE==="room") startHeartbeat();
}

// ── APPLY AN INCOMING MOVE ────────────────────────────────────────────
function applyRoomMove(move){
  if(move.type==="place"){
    const drv=DB.find(d=>d.name===move.driver);
    if(drv&&!GS.board[move.cell]){
      GS.board[move.cell]={p:GS.cur,drv:drv.name};GS.used.add(drv.name);
      const w=checkWin(GS.board);
      if(w){
        renderGrid();renderUsed();
        stopTimer();GS.over=true;if(w.p!=="draw")GS.scores[w.p]++;renderScore();setTimeout(()=>showResult(w),400);return;
      }
      // Swap turn FIRST so renderGrid builds click listeners for the correct player
      GS.cur=GS.cur==="X"?"O":"X";
      renderGrid();renderUsed();renderScore();
      // Guest does not run the timer — host drives it via tick messages
      if(roomRole==="host") resetTimer();
    }
  } else if(move.type==="skip"){
    passTurn("remote skip");
  } else if(move.type==="tick"){
    // Host's authoritative timer tick — guest just mirrors the UI
    timerLeft=move.t;
    updateTimerUI();
  } else if(move.type==="turn-reset"){
    // Host signals a new turn started — guest resets their timer display
    timerLeft=TURN_TIME;
    updateTimerUI();
  } else if(move.type==="draw-offer"){
    GS.cur=GS.cur==="X"?"O":"X";
    drawPending=true;
    const btn=el("draw-btn");
    if(btn){
      btn.textContent="✅ Accept Draw?";
      btn.style.borderColor="var(--gold)";
      btn.style.color="var(--gold)";
    }
    renderScore();
    // No resetTimer here — the offerer's startTimer already sent a turn-reset tick
  } else if(move.type==="draw-accept"){
    drawPending=false;
    stopTimer();GS.over=true;
    showResult({p:"draw",l:[]});
  } else if(move.type==="draw-cancel"){
    drawPending=false;
    const btn=el("draw-btn");
    if(btn){btn.textContent="🤝 Offer Draw";btn.style.borderColor="";btn.style.color="";}
  } else if(move.type==="ping"){
    // Guest receives ping from host — respond and record liveness
    _lastPing = Date.now();
    broadcastMove({type:"pong"});
  } else if(move.type==="pong"){
    // Host receives pong — connection is alive, nothing to do
  } else if(move.type==="next-round"){
    document.getElementById("res").classList.remove("on");
    document.getElementById("res-countdown").textContent="";
    GS.round++;
    newRoundBoard(move.grid, move.firstPlayer);
  } else if(move.type==="new-series"){
    document.getElementById("res").classList.remove("on");
    document.getElementById("res-countdown").textContent="";
    GS.scores={X:0,O:0};GS.round=1;
    newRoundBoard(move.grid, move.firstPlayer);
  }
}

// ── COPY LINK ─────────────────────────────────────────────────────────
function copyRoomLink(){
  const val=document.getElementById("room-link-input").value;
  navigator.clipboard.writeText(val).then(()=>{
    const btn=document.querySelector("#roomcreated .roomcard-linkrow .btn");
    if(!btn)return;
    btn.textContent="COPIED!";btn.style.borderColor="var(--green)";btn.style.color="var(--green)";
    setTimeout(()=>{btn.textContent="COPY";btn.style.borderColor="";btn.style.color="";},2000);
  }).catch(()=>{ document.getElementById("room-link-input").select(); document.execCommand("copy"); });
}

// ── LEAVE ROOM ────────────────────────────────────────────────────────
function leaveRoom(){
  clearInterval(ROOM_POLL);
  if(GAME_MODE==="room" && _conn && _conn.open) broadcastMove({type:"bye"});
  ROOM_CODE=""; GAME_MODE="same"; roomRole=""; P1_LABEL="Player 1"; P2_LABEL="Player 2";
  const connToClose=_conn; _conn=null;
  if(connToClose) connToClose.close();
  if(_peer && !_peer.destroyed){ _peer.destroy(); _peer=null; }
  showS("home");
}

// ── GAME MODE ENTRY (same tab, path routing) ─────────────────────────
function openGameTab(mode){
  // No longer opens a new tab — navigates in same tab with clean path
  if(mode==="same")       { startSameScreen(); }
  else if(mode==="bot")   { startVsBot(); }
  else if(mode==="room")  { showS("roomlobby"); }
  else if(mode==="custom"){ startCustomPicker(); }
}

function handleLogoClick(){
  const path = window.location.pathname;
  // Pe pagina home a jocului → du-te la hub
  if(path === "/lights-out-and-toe-away/" || path === "/lights-out-and-toe-away"){
    window.location.href = "/";
  } else {
    // Pe orice alta pagina → pagina principala a jocului
    goHome();
  }
}

function goHome(){
  stopTimer();
  cpickStopTimer(); // fix: stop custom picker timer if active
  clearTimeout(botThinkTimer); botThinkTimer=null;
  _cpick._isCustom = false; // reset custom flag
  clearTimeout(resCountdownTimer); resCountdownTimer=null;
  clearInterval(cdInterval); cdInterval=null;
  clearTimeout(drawCancelTimer); drawCancelTimer=null;
  clearInterval(mmInterval); mmInterval=null;
  clearTimeout(mmFoundTimer); mmFoundTimer=null;
  stopHeartbeat();
  // Hide disconnect overlay if visible
  const ov=document.getElementById("disconnect-overlay"); if(ov) ov.style.display="none";
  const qov=document.getElementById("quit-overlay"); if(qov) qov.style.display="none";
  if(GAME_MODE==="room" && _conn && _conn.open) broadcastMove({type:"bye"});
  // Reset mode BEFORE closing connection so the async close event doesn't trigger showDisconnect
  GAME_MODE="same"; ROOM_CODE=""; roomRole=""; drawPending=false; selIdx=null;
  const connToClose=_conn; _conn=null;
  if(connToClose) connToClose.close();
  if(_peer && !_peer.destroyed){ _peer.destroy(); _peer=null; }
  showS("home");
}

// ── AUTO-JOIN FROM URL & INITIAL HISTORY STATE ───────────────────────
window.addEventListener("load",function(){
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const params = new URLSearchParams(window.location.search);
  const code = params.get("room");

  if(code){
    document.body.classList.add("show-bg");
    // Joining via shared room link
    history.replaceState({screen:"roomlobby"}, "", "/lights-out-and-toe-away/play-with-a-friend");
    document.title = "Play with a Friend — Lights Out & Toe Away";
    showS("roomlobby", false);
    document.getElementById("join-code-input").value=code;
    setTimeout(joinRoom,400);
  } else if(path==="/lights-out-and-toe-away/play-with-a-friend"){
    document.body.classList.add("show-bg");
    GAME_MODE="room"; P1_LABEL="You"; P2_LABEL="Friend";
    history.replaceState({screen:"roomlobby"}, "", path);
    document.title = "Play with a Friend — Lights Out & Toe Away";
    showS("roomlobby", false);
  } else if(path==="/lights-out-and-toe-away/same-screen"){
    document.body.classList.add("show-bg");
    history.replaceState({screen:"game-same"}, "", path);
    document.title = "Same Screen — Lights Out & Toe Away";
    startSameScreen();
  } else if(path==="/lights-out-and-toe-away/play-online"){
    document.body.classList.add("show-bg");
    history.replaceState({screen:"matchmaking"}, "", path);
    document.title = "Play Online — Lights Out & Toe Away";
    startVsBot();
  } else if(path==="/lights-out-and-toe-away/how-to-play"){
    document.body.classList.add("show-bg");
    history.replaceState({screen:"howto"}, "", path);
    document.title = "How to Play — Lights Out & Toe Away";
    showS("howto", false);
  } else if(path==="/lights-out-and-toe-away/custom-game"){
    document.body.classList.add("show-bg");
    history.replaceState({screen:"custompicker"}, "", path);
    document.title = "Custom Game — Lights Out & Toe Away";
    startCustomPicker();
  } else {
    // Home
    history.replaceState({screen:"home"}, "", "/lights-out-and-toe-away/");
    document.title = "Lights Out & Toe Away";
    showS("home", false);
  }
});

// Bot move flash style + no-hover rule
const _bs=document.createElement("style");
_bs.textContent=`
.bot-move{animation:bpulse .5s ease-out;}
@keyframes bpulse{0%{background:rgba(0,230,118,.3);box-shadow:0 0 14px rgba(0,230,118,.5);}100%{background:transparent;box-shadow:none;}}
.gw.no-hover .cell:not(.taken):hover{outline:none !important;box-shadow:none !important;background:transparent !important;cursor:default !important;}
.gw.no-hover .cell:not(.taken){pointer-events:none;}
header .logo{cursor:pointer;}
header .logo:hover{opacity:0.85;}
`;
document.head.appendChild(_bs);

let _heartbeatInterval = null;
let _lastPing = 0;

function startHeartbeat(){
  clearInterval(_heartbeatInterval);
  _lastPing = Date.now();
  _heartbeatInterval = setInterval(()=>{
    if(!_conn || !_conn.open || GAME_MODE!=="room") { clearInterval(_heartbeatInterval); return; }
    // Host sends ping every 3s; guest responds with pong
    if(roomRole==="host") broadcastMove({type:"ping"});
    // If guest hasn't received a ping in 8s, consider host gone
    if(roomRole==="guest" && Date.now()-_lastPing > 8000){
      clearInterval(_heartbeatInterval);
      showDisconnect("Your friend has disconnected.");
    }
  }, 3000);
}

function stopHeartbeat(){
  clearInterval(_heartbeatInterval); _heartbeatInterval=null;
}
window.addEventListener("beforeunload", ()=>{
  if(GAME_MODE==="room" && _conn && _conn.open){
    // Use sendBeacon-style sync send — broadcastMove may not fire before unload
    try { _conn.send({type:"bye"}); } catch(e){}
  }
});

// ── CUSTOM GAME PICKER ────────────────────────────────────────────────────
let _cpick = {
  rows: [null, null, null],
  cols: [null, null, null],
  tab: 'team',
  activeType: null,
  activeIdx: null,
  turn: 0,           // 0..5, increments each pick; player = turn%2==0 ? P1 : P2
  timerInterval: null,
  timerLeft: 60,
  nextStarter: null  // firstPlayer for next game round (null = randomize)
};

function startCustomPicker(){
  GAME_MODE = "same";
  P1_LABEL = "Player 1"; P2_LABEL = "Player 2";
  GS.scores={X:0,O:0}; GS.round=1; // reset series on fresh start
  _cpick = {rows:[null,null,null], cols:[null,null,null], tab:'team', activeType:null, activeIdx:null, turn:0, consecutiveSkips:0, timerInterval:null, timerLeft:60, _isCustom:true, nextStarter:null};
  showS('custompicker');
  cpickRenderVisualGrid();
  cpickUpdateHeader();
  cpickStartTurnTimer();
}

function cpickCurrentPlayer(){
  return _cpick.turn % 2 === 0 ? 1 : 2;
}

function cpickPicksDone(){
  return _cpick.rows.filter(Boolean).length + _cpick.cols.filter(Boolean).length;
}

function cpickUpdateHeader(){
  var isP1 = cpickCurrentPlayer() === 1;
  var done = cpickPicksDone();
  var tiEl = document.getElementById('cpick-ti');
  var lblEl = document.getElementById('cpick-timer-lbl');
  var roundEl = document.getElementById('cpick-round-lbl');
  if(tiEl){ tiEl.textContent = isP1 ? 'Player 1 — X' : 'Player 2 — O'; tiEl.className = isP1 ? 'ti ti-x' : 'ti ti-o'; }
  if(lblEl) lblEl.textContent = isP1 ? 'P1 TURN' : 'P2 TURN';
  if(roundEl) roundEl.textContent = 'Pick ' + (done+1) + '/6';
}

function cpickStartTurnTimer(){
  cpickStopTimer();
  _cpick.timerLeft = 60;
  cpickUpdateTimerDisplay(60);
  _cpick.timerInterval = setInterval(function(){
    _cpick.timerLeft--;
    cpickUpdateTimerDisplay(_cpick.timerLeft);
    if(_cpick.timerLeft <= 0){
      cpickStopTimer();
      cpickSkipTurn();
    }
  }, 1000);
}

function cpickStopTimer(){
  if(_cpick.timerInterval){ clearInterval(_cpick.timerInterval); _cpick.timerInterval = null; }
}

function cpickUpdateTimerDisplay(t){
  var numEl = document.getElementById('cpick-timer-num');
  var ringEl = document.getElementById('cpick-ring-fg');
  if(numEl) numEl.textContent = t;
  if(ringEl){
    ringEl.style.strokeDashoffset = 138.2 * (1 - t/60);
    ringEl.style.stroke = t > 20 ? 'var(--green)' : t > 10 ? 'var(--gold)' : 'var(--red)';
  }
}

function cpickSkipTurn(){
  // Time expired — pass turn to next player without placing anything
  document.getElementById('cpick-panel').classList.remove('open');
  _cpick.activeType = null;
  _cpick.activeIdx = null;
  _cpick.turn++;
  _cpick.consecutiveSkips = (_cpick.consecutiveSkips || 0) + 1;

  var done = cpickPicksDone();

  // If all 6 slots filled, start game
  if(done >= 6){
    _cpick.consecutiveSkips = 0;
    setTimeout(function(){ cpickStartGame(); }, 350);
    return;
  }

  // Safety: if both players have skipped 6 times total without picking anything,
  // auto-fill remaining empty slots with random valid categories and start
  if(_cpick.consecutiveSkips >= 6){
    _cpick.consecutiveSkips = 0;
    cpickAutoFillAndStart();
    return;
  }

  cpickRenderVisualGrid();
  cpickUpdateHeader();
  cpickStartTurnTimer();
}

function cpickAutoFillAndStart(){
  // Fill any remaining empty slots with random valid categories
  var types = ['row','col'];
  for(var t=0;t<types.length;t++){
    var type = types[t];
    var arr = type==='row' ? _cpick.rows : _cpick.cols;
    for(var i=0;i<3;i++){
      if(arr[i] !== null) continue;
      var usedIds = new Set([..._cpick.rows,..._cpick.cols].filter(Boolean).map(function(c){ return c.id; }));
      var oppositeArr = (type==='row' ? _cpick.cols : _cpick.rows).filter(Boolean);
      var valid = CATS.filter(function(cat){
        if(usedIds.has(cat.id)) return false;
        if(oppositeArr.length === 0) return true;
        for(var j=0;j<oppositeArr.length;j++){
          var opp = oppositeArr[j];
          var n = DB.filter(function(d){ try{ return cat.check(d)&&opp.check(d); }catch(e){ return false; } }).length;
          if(n < 2) return false;
        }
        return true;
      });
      if(valid.length > 0){
        arr[i] = valid[Math.floor(Math.random()*valid.length)];
      }
    }
  }
  cpickRenderVisualGrid();
  if(_cpick.rows.every(Boolean) && _cpick.cols.every(Boolean)){
    setTimeout(function(){ cpickStartGame(); }, 350);
  } else {
    // Still can't fill — just start with what we have (cpickStartGame will validate)
    setTimeout(function(){ cpickStartGame(); }, 350);
  }
}

function cpickOpenPanel(type, idx){
  // Any empty slot is clickable on the current player's turn
  var arr = type==='row' ? _cpick.rows : _cpick.cols;
  if(arr[idx] !== null) return; // already filled — clicking opens to re-pick (handled as filled)

  cpickStopTimer();
  _cpick.activeType = type;
  _cpick.activeIdx = idx;
  _cpick.tab = 'team';
  document.querySelectorAll('.cpick-tab').forEach(function(t){
    t.classList.toggle('active', t.textContent === 'Teams');
  });
  cpickRenderGrid();
  document.getElementById('cpick-panel').classList.add('open');
  document.getElementById('cpick-panel-title').textContent = 'PICK A ' + (type==='row' ? 'ROW' : 'COLUMN') + ' CATEGORY';
}

function cpickClosePanel(){
  document.getElementById('cpick-panel').classList.remove('open');
  _cpick.activeType = null;
  _cpick.activeIdx = null;
  if(cpickPicksDone() < 6 && !_cpick.timerInterval){
    cpickStartTurnTimer();
  }
}

function cpickPanelBgClick(e){
  if(e.target === document.getElementById('cpick-panel')) cpickClosePanel();
}

function cpickSetTab(tab){
  _cpick.tab = tab;
  var map = {team:'Teams',nat:'Nations',trophy:'Trophies',circuit:'Circuits',tp:'Managers',tm:'Teammates',wild:'Wildcards'};
  document.querySelectorAll('.cpick-tab').forEach(function(t){
    t.classList.toggle('active', t.textContent === (map[tab]||''));
  });
  cpickRenderGrid();
}

function cpickImgHtml(cat){
  if(!cat.img) return '<div style="font-size:28px;">' + (cat.icon||'?') + '</div>';
  var cls = cat.carImg ? 'car' : cat.flagImg ? 'flag' : 'portrait';
  return '<img class="cpick-card-img ' + cls + '" src="' + cat.img + '" alt=""/>';
}


// ── BIPARTITE MATCHING — verifies distinct driver assignment is possible ──
function cpickCanAssign(filledRows, filledCols){
  var cells = [];
  for(var r=0;r<filledRows.length;r++){
    for(var c=0;c<filledCols.length;c++){
      var rc=filledRows[r], cc=filledCols[c];
      var drivers=[];
      for(var d=0;d<DB.length;d++){
        try{ if(rc.check(DB[d])&&cc.check(DB[d])) drivers.push(d); }catch(e){}
      }
      if(drivers.length<2) return false;
      cells.push(drivers);
    }
  }
  var numCells=cells.length;
  var matchDriver={};
  function augment(cell,seen){
    for(var k=0;k<cells[cell].length;k++){
      var drv=cells[cell][k];
      if(seen[drv]) continue;
      seen[drv]=true;
      if(matchDriver[drv]===undefined||augment(matchDriver[drv],seen)){
        matchDriver[drv]=cell; return true;
      }
    }
    return false;
  }
  var matched=0;
  for(var i=0;i<numCells;i++){ if(augment(i,{})) matched++; }
  return matched===numCells;
}

function cpickRenderGrid(){
  var grid = document.getElementById('cpick-grid');
  if(!grid) return;
  var oppositeArr = (_cpick.activeType==='row' ? _cpick.cols : _cpick.rows).filter(Boolean);
  var allUsedIds = new Set([..._cpick.rows,..._cpick.cols].filter(Boolean).map(function(c){ return c.id; }));

  var cards = CATS.filter(function(cat){ return cat.g===_cpick.tab; }).map(function(cat){
    var usedAnywhere = allUsedIds.has(cat.id);
    var incompatible = false;

    if(!usedAnywhere && oppositeArr.length>0){
      // Quick check: each cell must have >=2 drivers
      for(var i=0;i<oppositeArr.length;i++){
        var opp=oppositeArr[i];
        var n=DB.filter(function(d){ try{ return cat.check(d)&&opp.check(d); }catch(e){ return false; } }).length;
        if(n<2){ incompatible=true; break; }
      }
      // Full matching check: verify complete distinct assignment exists
      if(!incompatible){
        var testRows=_cpick.activeType==='row'
          ? (function(){ var r=_cpick.rows.slice(); r[_cpick.activeIdx]=cat; return r.filter(Boolean); })()
          : _cpick.rows.filter(Boolean);
        var testCols=_cpick.activeType==='col'
          ? (function(){ var c=_cpick.cols.slice(); c[_cpick.activeIdx]=cat; return c.filter(Boolean); })()
          : _cpick.cols.filter(Boolean);
        if(testRows.length>0&&testCols.length>0){
          if(!cpickCanAssign(testRows,testCols)) incompatible=true;
        }
      }
    }

    var isDisabled=usedAnywhere||incompatible;
    var safeId=cat.id.replace(/'/g,"\'");
    return '<div class="cpick-card'+(isDisabled?' disabled':'')+'"'
      +(isDisabled?'':' onclick="cpickSelect(\''+safeId+'\')"')+'>'  
      +cpickImgHtml(cat)
      +'<div class="cpick-card-label">'+cat.label.replace(/\n/g,' ')+'</div>'
      +'</div>';
  }).join('');
  grid.innerHTML = cards||'<div style="color:var(--t2);font-family:Teko,sans-serif;font-size:18px;padding:20px;text-align:center;">No categories in this tab</div>';
}

function cpickSelect(catId){
  if(_cpick.activeType === null) return;
  var cat = CATS.find(function(c){ return c.id===catId; });
  if(!cat) return;
  var arr = _cpick.activeType==='row' ? _cpick.rows : _cpick.cols;
  arr[_cpick.activeIdx] = cat;
  _cpick.consecutiveSkips = 0; // reset skip counter on successful pick

  document.getElementById('cpick-panel').classList.remove('open');
  _cpick.activeType = null;
  _cpick.activeIdx = null;

  _cpick.turn++;
  cpickRenderVisualGrid();

  if(cpickPicksDone() >= 6){
    cpickStopTimer();
    setTimeout(function(){ cpickStartGame(); }, 350);
  } else {
    cpickUpdateHeader();
    cpickStartTurnTimer();
  }
}

function cpickRemove(type, idx, e){
  e && e.stopPropagation();
  var arr = type==='row' ? _cpick.rows : _cpick.cols;
  if(!arr[idx]) return;
  arr[idx] = null;
  // Decrement turn so the same player who placed it gets to re-pick
  if(_cpick.turn > 0) _cpick.turn--;
  cpickRenderVisualGrid();
  cpickUpdateHeader();
  cpickStartTurnTimer();
}

const GROUP_BADGE = {team:'TEAM',nat:'NATION',trophy:'TROPHY',circuit:'CIRCUIT',tp:'BOSS',wild:'WILDCARD',tm:'TEAMMATE'};
const BADGE_CLASS = {team:'b-team',nat:'b-nat',trophy:'b-troph',circuit:'b-circ',tp:'b-tp',wild:'b-wild',tm:'b-tm'};

function cpickRenderVisualGrid(){
  for(var i=0;i<3;i++){
    var col = document.getElementById('cpick-col-'+i);
    var row = document.getElementById('cpick-row-'+i);
    if(col) cpickRenderSlotEl(col, _cpick.cols[i], 'col', i);
    if(row) cpickRenderSlotEl(row, _cpick.rows[i], 'row', i);
  }
}

function cpickRenderSlotEl(el, cat, type, idx){
  var baseClass = type==='col' ? 'cl cpick-col-cell' : 'cl row-cl cpick-row-cell';
  if(!cat){
    // All empty slots are clickable — player picks whichever they want
    el.className = baseClass + ' empty cpick-active-slot';
    el.innerHTML = '<div class="cpick-slot-add"><span class="cpick-plus">+</span><div class="cpick-add-label">ADD</div></div>';
    el.onclick = function(){ cpickOpenPanel(type, idx); };
  } else {
    el.className = baseClass + ' filled';
    var txt = cat.label.replace(/\n/g,'<br>');
    var badge = BADGE_CLASS[cat.g]||'';
    var badgeTxt = GROUP_BADGE[cat.g]||cat.g.toUpperCase();
    var imgHtml = '';
    if(cat.img && cat.carImg)       imgHtml = '<img class="cl-car" src="' + cat.img + '" alt=""/>';
    else if(cat.img && cat.flagImg) imgHtml = '<img class="cl-flag" src="' + cat.img + '" alt=""/>';
    else if(cat.img)                imgHtml = '<img class="cl-pt" src="' + cat.img + '" alt=""/>';
    else                            imgHtml = '<div class="cl-ic">' + (cat.icon||'?') + '</div>';
    el.innerHTML = imgHtml + '<div class="cl-tx">' + txt + '</div><span class="badge ' + badge + '">' + badgeTxt + '</span>';
    el.onclick = null; // filled slots are not re-openable
  }
}

function cpickStartGame(){
  cpickStopTimer();
  var rows = _cpick.rows;
  var cols = _cpick.cols;
  if(!rows.every(Boolean)||!cols.every(Boolean)) return;

  // Final safety: only block if a cell has ZERO valid drivers
  for(var ri=0;ri<rows.length;ri++){
    for(var ci=0;ci<cols.length;ci++){
      var r = rows[ri]; var c = cols[ci];
      var n = DB.filter(function(d){ try{return r.check(d)&&c.check(d);}catch(e){return false;} }).length;
      if(n < 2){
        // This cell has fewer than 2 drivers - roll back the more recently added of the two
        rows[ri] = null;
        if(_cpick.turn >= 1) _cpick.turn -= 1; else _cpick.turn = 0;
        cpickRenderVisualGrid();
        cpickUpdateHeader();
        cpickStartTurnTimer();
        return;
      }
    }
  }

  GAME_MODE = "same";
  P1_LABEL = "Player 1"; P2_LABEL = "Player 2";
  GS.board=Array(9).fill(null);
  GS.rows=rows; GS.cols=cols;
  GS.cur=(_cpick.nextStarter||randomStart()); GS.roundStarter=GS.cur; GS.used=new Set(); GS.over=false;
  _cpick.nextStarter=null; // consumed
  // Keep scores & round across custom game rounds; reset only on fresh start
  if(!_cpick._isCustom){
    GS.scores={X:0,O:0}; GS.round=1;
  }
  GS.drawOffer=null; drawPending=false;
  showS('game-same', true);
  renderGrid(); renderScore(); renderUsed();
  resetTimer();
}
