// ╔══════════════════════════════════════════════════════════════╗
// ║  FARTVIBE 6: ALL FARTS ARE OFF                              ║
// ║  Enterprise-Grade Flatulence Simulation Engine v6.0.0       ║
// ║                                                             ║
// ║  WARNING: This codebase is overengineered ON PURPOSE.       ║
// ║  If you are reading this and thinking "why?"                ║
// ║  the answer is: vibe coding.                                ║
// ╚══════════════════════════════════════════════════════════════╝

const SYMBOLS = ['💨', '💩', '🍑', '🚽', '🧻', '🔥', '💀'];
const WILD_SYMBOL = '🌟';
const ALL_SYMBOLS = [...SYMBOLS, WILD_SYMBOL];
const SYMBOL_NAMES = { '💨': 'FART', '💩': 'POOP', '🍑': 'BUTT', '🚽': 'TOILET', '🧻': 'TP', '🔥': 'FIRE', '💀': 'SKULL', '🌟': 'WILD' };
const SYMBOL_IMAGES = {
  '💨': 'fart_cloud.jpeg',
  '💩': 'poop.jpeg',
  '🍑': 'peach.jpeg',
  '🚽': 'toilet.jpeg',
  '🔥': 'butt.jpeg',
  '🧻': 'TP.jpeg',
  '💀': 'skull.jpeg',
  '🌟': 'pepto.jpeg'
};
function renderSymbolHTML(symbol) {
  const img = SYMBOL_IMAGES[symbol];
  if (img) return `<img src="${img}" alt="${SYMBOL_NAMES[symbol]}" class="symbol-img" draggable="false">`;
  return symbol;
}
function setSymbol(el, symbol) {
  const img = SYMBOL_IMAGES[symbol];
  if (img) {
    el.innerHTML = `<img src="${img}" alt="${SYMBOL_NAMES[symbol]}" class="symbol-img" draggable="false">`;
  } else {
    el.textContent = symbol;
  }
}
const NUM_REELS = 7;
const NUM_ROWS = 5;

// ═══════════════════════════════════════════
//  PAYLINE DEFINITIONS (20 crisscross paylines)
//  Each payline is an array of 7 row indices (0-4), one per reel
// ═══════════════════════════════════════════
const PAYLINES = [
  // Straight lines
  { id: 1,  name: 'CENTER',       rows: [2,2,2,2,2,2,2], color: '#ff3366' },
  { id: 2,  name: 'TOP',          rows: [0,0,0,0,0,0,0], color: '#33ff66' },
  { id: 3,  name: 'BOTTOM',       rows: [4,4,4,4,4,4,4], color: '#3366ff' },
  { id: 4,  name: 'HIGH',         rows: [1,1,1,1,1,1,1], color: '#ff9933' },
  { id: 5,  name: 'LOW',          rows: [3,3,3,3,3,3,3], color: '#9933ff' },
  // V shapes
  { id: 6,  name: 'V-DROP',       rows: [0,1,2,3,2,1,0], color: '#ff6ec7' },
  { id: 7,  name: 'V-RISE',       rows: [4,3,2,1,2,3,4], color: '#39ff14' },
  // Deep V
  { id: 8,  name: 'DEEP-V',       rows: [0,1,3,4,3,1,0], color: '#fff01f' },
  { id: 9,  name: 'DEEP-A',       rows: [4,3,1,0,1,3,4], color: '#00ffff' },
  // W shapes
  { id: 10, name: 'W-TOP',        rows: [0,2,0,2,0,2,0], color: '#ff4444' },
  { id: 11, name: 'W-BOT',        rows: [4,2,4,2,4,2,4], color: '#44ff44' },
  { id: 12, name: 'W-MID',        rows: [1,3,1,3,1,3,1], color: '#4444ff' },
  // Zigzags
  { id: 13, name: 'ZIG-DOWN',     rows: [0,0,1,2,3,4,4], color: '#ff8800' },
  { id: 14, name: 'ZIG-UP',       rows: [4,4,3,2,1,0,0], color: '#88ff00' },
  { id: 15, name: 'STAIRCASE',    rows: [0,1,2,3,4,3,2], color: '#ff00ff' },
  { id: 16, name: 'INV-STAIR',    rows: [4,3,2,1,0,1,2], color: '#00ffaa' },
  // Shallow curves
  { id: 17, name: 'SHALLOW-V',    rows: [1,1,2,3,2,1,1], color: '#ffaa44' },
  { id: 18, name: 'SHALLOW-A',    rows: [3,3,2,1,2,3,3], color: '#44aaff' },
  // Chaotic
  { id: 19, name: 'LIGHTNING',    rows: [0,2,1,3,2,4,3], color: '#ffff44' },
  { id: 20, name: 'REVERSE-ZAP', rows: [4,2,3,1,2,0,1], color: '#ff44ff' },
];

// Symbol payout values (per symbol, for 3/4/5/6/7 matches on a line)
const SYMBOL_PAYOUTS = {
  '💨': [5, 15, 40, 100, 250],
  '💩': [5, 15, 40, 100, 250],
  '🍑': [8, 25, 60, 150, 400],
  '🚽': [8, 25, 60, 150, 400],
  '🧻': [10, 30, 80, 200, 500],
  '🔥': [15, 50, 120, 300, 800],
  '💀': [20, 75, 200, 500, 1500],
  '🌟': [25, 100, 300, 750, 2500],  // wild-only line (rare)
};

// ═══════════════════════════════════════════
//  LAYER 2: OVERENGINEERED WRAPPER SYSTEMS
// ═══════════════════════════════════════════

/**
 * ButtStateManager - Maintains global butt state coherence
 * across all downstream flatulence subsystems.
 */
const ButtStateManager = {
  alignment: 82,
  coherence: 1.0,
  lastCalibration: Date.now(),
  stateVector: [0, 0, 0, 0, 0],

  sync(reelResults) {
    this.stateVector = reelResults.slice(0, 7).map(s => ALL_SYMBOLS.indexOf(s));
    this.coherence = Math.random() * 0.3 + 0.7;
    this.alignment = Math.floor(60 + Math.random() * 40);
    this.lastCalibration = Date.now();
    LogService.debug(`ButtState synced: coherence=${this.coherence.toFixed(3)}, alignment=${this.alignment}%`);
    return { aligned: this.alignment > 70, vector: this.stateVector };
  },

  getStability() {
    const drift = (Date.now() - this.lastCalibration) / 10000;
    return Math.max(0, this.coherence - drift * 0.1);
  }
};

/**
 * FlatulenceEngine - Core gas emission computation pipeline.
 * Processes raw symbol data through multi-stage flatulence transforms.
 */
const FlatulenceEngine = {
  emissionProfiles: [
    'silent_drift_v1', 'wet_blast_v2', 'dry_squeak_v3',
    'thunderclap_v4', 'phantom_whisper_v5', 'nuclear_v6'
  ],
  currentProfile: null,
  gasBuffer: [],
  pressure: 0,

  selectEmissionProfile(spinEnergy) {
    const idx = Math.min(
      this.emissionProfiles.length - 1,
      Math.floor(spinEnergy * this.emissionProfiles.length)
    );
    this.currentProfile = this.emissionProfiles[idx];
    LogService.debug(`Selecting emission profile: "${this.currentProfile}"`);
    return this.currentProfile;
  },

  computeGasVector(symbols) {
    this.gasBuffer = symbols.map((s, i) => ({
      symbol: s,
      position: i,
      gasIndex: ALL_SYMBOLS.indexOf(s) / ALL_SYMBOLS.length,
      turbulence: Math.random()
    }));
    this.pressure = this.gasBuffer.reduce((a, b) => a + b.gasIndex + b.turbulence, 0) / symbols.length;
    LogService.info(`Gas vector computed: pressure=${this.pressure.toFixed(4)} across ${symbols.length} chambers`);
    return this.gasBuffer;
  },

  flush() {
    this.gasBuffer = [];
    this.pressure = 0;
    this.currentProfile = null;
  }
};

/**
 * FlushMultiplierService - Calculates reward multipliers based on
 * proprietary flush-dynamics algorithms.
 */
const FlushMultiplierService = {
  baseMultiplier: 1,
  flushEfficiency: 0.23,
  consecutiveFlushes: 0,

  calculate(symbols, buttState) {
    let mult = this.baseMultiplier;

    // TP symbols boost multiplier (they do nothing but we pretend)
    const tpCount = symbols.filter(s => s === '🧻').length;
    mult += tpCount * 0.5;

    // Toilet wilds
    const toiletCount = symbols.filter(s => s === '🚽').length;
    mult += toiletCount * 0.3;

    // Butt alignment bonus
    if (buttState.aligned) mult *= 1.1;

    this.flushEfficiency = Math.random() * 0.4 + 0.1;
    this.consecutiveFlushes++;

    LogService.info(`FlushMultiplier: ${mult.toFixed(2)}x (efficiency: ${(this.flushEfficiency * 100).toFixed(0)}%)`);
    return mult;
  },

  reset() {
    this.consecutiveFlushes = 0;
    this.flushEfficiency = 0.23;
  }
};

/**
 * DopamineFeedbackController - Manages player engagement metrics
 * and near-miss excitement generation.
 */
const DopamineFeedbackController = {
  excitementLevel: 0,
  nearMissCount: 0,
  feedbackQueue: [],

  assess(symbols, isWin) {
    if (isWin) {
      this.excitementLevel = Math.min(100, this.excitementLevel + 30);
      this.feedbackQueue.push('WIN_DOPAMINE_BURST');
    } else {
      // Check for near misses
      const uniqueSymbols = new Set(symbols);
      if (uniqueSymbols.size <= 2) {
        this.nearMissCount++;
        this.excitementLevel = Math.min(100, this.excitementLevel + 15);
        this.feedbackQueue.push('NEAR_MISS_TEASE');
        LogService.warn('Near miss detected! Dopamine injection queued.');
      } else {
        this.excitementLevel = Math.max(0, this.excitementLevel - 5);
      }
    }
    return this.excitementLevel;
  },

  drainQueue() {
    const items = [...this.feedbackQueue];
    this.feedbackQueue = [];
    return items;
  }
};

/**
 * OdorOrchestrator - Top-level orchestration layer that coordinates
 * all flatulence subsystems for each spin cycle.
 */
const OdorOrchestrator = {
  pipelineVersion: '6.0.0-rc.420',
  cycleCount: 0,
  lastResult: null,

  async process_spin() {
    this.cycleCount++;
    const cycleId = `CYCLE-${this.cycleCount.toString().padStart(5, '0')}`;
    LogService.info(`═══ ${cycleId} BEGIN ═══`);
    LogService.info('Initializing Odor Pipeline...');

    // Step 1: Generate 7x5 grid (THE ONLY THING THAT MATTERS)
    // grid[reel][row] — 7 reels, 5 rows each
    const grid = Array.from({ length: NUM_REELS }, () =>
      Array.from({ length: NUM_ROWS }, () =>
        ALL_SYMBOLS[Math.floor(Math.random() * ALL_SYMBOLS.length)]
      )
    );

    // Step 2: Run through every fake system (THE JOKE)
    const flatSymbols = grid.flat();
    const spinEnergy = Math.random();
    FlatulenceEngine.selectEmissionProfile(spinEnergy);
    const gasVector = FlatulenceEngine.computeGasVector(flatSymbols);
    const buttState = ButtStateManager.sync(flatSymbols);
    const multiplier = FlushMultiplierService.calculate(flatSymbols, buttState);

    // Step 3: Evaluate all 20 paylines
    const result = this._evaluateGrid(grid, multiplier);

    // Step 4: Dopamine feedback
    DopamineFeedbackController.assess(flatSymbols, result.isWin);

    // Step 5: Check for events
    result.event = this._checkEvents(grid, result);

    LogService.info(`═══ ${cycleId} COMPLETE ═══`);
    this.lastResult = result;
    return result;
  },

  _evaluateGrid(grid, multiplier) {
    const winningLines = [];
    let totalPayout = 0;

    PAYLINES.forEach(payline => {
      // Get the symbol at each reel position for this payline
      const lineSymbols = payline.rows.map((row, reel) => grid[reel][row]);

      // Count consecutive matches from left, treating WILD as matching anything
      const firstReal = lineSymbols.find(s => s !== WILD_SYMBOL) || lineSymbols[0];
      let matchCount = 0;
      for (let i = 0; i < lineSymbols.length; i++) {
        if (lineSymbols[i] === firstReal || lineSymbols[i] === WILD_SYMBOL) {
          matchCount++;
        } else {
          break;
        }
      }

      if (matchCount >= 3) {
        const payoutTable = SYMBOL_PAYOUTS[firstReal] || SYMBOL_PAYOUTS['💨'];
        const linePayout = Math.floor(payoutTable[matchCount - 3] * multiplier);
        const wildCount = lineSymbols.slice(0, matchCount).filter(s => s === WILD_SYMBOL).length;
        const wildMult = wildCount > 0 ? 1 + wildCount * 0.5 : 1;
        const finalPayout = Math.floor(linePayout * wildMult);

        totalPayout += finalPayout;
        winningLines.push({
          payline,
          matchCount,
          symbol: firstReal,
          payout: finalPayout,
          wildCount,
          positions: payline.rows.map((row, reel) => ({ reel, row })).slice(0, matchCount)
        });

        LogService.info(`LINE ${payline.id} "${payline.name}": ${matchCount}x ${SYMBOL_NAMES[firstReal]}${wildCount ? ` (+${wildCount} WILD)` : ''} → +${finalPayout}`);
      }
    });

    // Determine win tier
    let winType = null;
    let isWin = winningLines.length > 0;
    if (totalPayout >= 5000) winType = 'JACKPOT';
    else if (totalPayout >= 1000) winType = 'MEGA WIN';
    else if (totalPayout >= 500) winType = 'BIG WIN';
    else if (totalPayout >= 100) winType = 'WIN';
    else if (isWin) winType = 'SMALL WIN';

    // Count total wilds on grid for bonus logging
    const totalWilds = grid.flat().filter(s => s === WILD_SYMBOL).length;
    if (totalWilds >= 3) {
      LogService.warn(`WILD STORM: ${totalWilds} wilds on grid!`);
    }

    if (isWin) {
      LogService.success(`${winningLines.length} WINNING LINE${winningLines.length > 1 ? 'S' : ''} | Total: ${totalPayout} GasCoins (${multiplier.toFixed(2)}x base)`);
    }

    return { grid, payout: totalPayout, winType, isWin, multiplier, winningLines, totalWilds };
  },

  _checkEvents(grid, result) {
    const roll = Math.random();
    const totalWilds = result.totalWilds || 0;

    if (result.winningLines.length >= 8) {
      return { type: 'codebrown', label: '🚨 CODE BROWN MEGA JACKPOT 🚨', message: `${result.winningLines.length} LINES HIT! MAXIMUM EMISSION ACROSS ALL CHAMBERS!` };
    }
    if (totalWilds >= 5) {
      return { type: 'gasleak', label: '🌟 WILD EXPLOSION 🌟', message: `${totalWilds} WILDS ON GRID! CONTAINMENT IMPOSSIBLE!` };
    }
    if (roll < 0.04) {
      return { type: 'gasleak', label: '⚠️ GAS LEAK MODE ⚠️', message: 'CONTAINMENT BREACH DETECTED. AUTO-SPIN ENGAGED.' };
    }
    if (roll < 0.10) {
      return { type: 'doubleflush', label: '🚽 DOUBLEFLUSH MULTIPLIER 🚽', message: 'FLUSH DYNAMICS AMPLIFIED. ALL REWARDS 2X.' };
    }
    if (roll < 0.18) {
      return { type: 'odor', label: '💨 ODOR BONUS 💨', message: 'UNBELIEVABLE ODOR BONUS ACTIVATED!!!' };
    }
    return null;
  }
};

// ═══════════════════════════════════════════
//  LAYER 3: OBSERVABILITY THEATER
// ═══════════════════════════════════════════

const LogService = {
  feed: null,
  buffer: [],

  _ensureFeed() {
    if (!this.feed) this.feed = document.getElementById('log-feed');
  },

  _write(level, msg, highlight = false) {
    this._ensureFeed();
    const ts = new Date().toISOString().substr(11, 12);
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `<span class="ts">${ts}</span> <span class="tag ${level}">[${level.toUpperCase()}]</span> <span class="msg${highlight ? ' highlight' : ''}">${msg}</span>`;
    this.feed.appendChild(entry);
    // Keep max 200 entries
    while (this.feed.children.length > 200) this.feed.removeChild(this.feed.firstChild);
    this.feed.scrollTop = this.feed.scrollHeight;
  },

  info(msg) { this._write('info', msg); },
  debug(msg) { this._write('debug', msg); },
  warn(msg) { this._write('warn', msg); },
  error(msg) { this._write('error', msg); },
  success(msg) { this._write('success', msg, true); }
};

const MetricsService = {
  update(result) {
    // Odor intensity - always absurdly high
    const odor = Math.floor(70 + Math.random() * 30);
    const odorEl = document.getElementById('m-odor');
    odorEl.textContent = odor + '%';
    odorEl.className = 'metric-value ' + (odor > 90 ? 'critical' : odor > 75 ? 'warning' : 'nominal');
    document.getElementById('bar-odor').style.width = odor + '%';
    document.getElementById('bar-odor').style.background = odor > 90 ? 'var(--danger)' : 'var(--neon-orange)';

    // Flush efficiency - always struggling
    const flush = Math.floor(10 + Math.random() * 40);
    const flushEl = document.getElementById('m-flush');
    const flushLabel = flush < 20 ? 'CRITICAL' : flush < 35 ? 'DEGRADED' : 'SUBOPTIMAL';
    flushEl.textContent = flushLabel;
    flushEl.className = 'metric-value ' + (flush < 20 ? 'critical' : 'warning');
    document.getElementById('bar-flush').style.width = flush + '%';

    // Gas throughput
    const gas = Math.floor(60 + Math.random() * 40);
    const gasEl = document.getElementById('m-gas');
    gasEl.textContent = gas > 90 ? 'MAX' : gas > 70 ? 'HIGH' : 'MEDIUM';
    gasEl.className = 'metric-value ' + (gas > 90 ? 'max' : 'nominal');
    document.getElementById('bar-gas').style.width = gas + '%';

    // Butt alignment
    const butt = ButtStateManager.alignment;
    const buttEl = document.getElementById('m-butt');
    buttEl.textContent = butt > 85 ? 'STABLE' : butt > 70 ? 'DRIFTING' : 'UNSTABLE';
    buttEl.className = 'metric-value ' + (butt > 85 ? 'nominal' : butt > 70 ? 'warning' : 'critical');
    document.getElementById('bar-butt').style.width = butt + '%';
    document.getElementById('bar-butt').style.background = butt > 85 ? 'var(--neon-green)' : butt > 70 ? 'var(--neon-orange)' : 'var(--danger)';

    if (butt <= 70) LogService.warn('Butt alignment unstable');
  },

  randomFlicker() {
    // Occasionally flicker metrics for dramatic effect
    const systems = [
      { id: 'sys-odor', states: ['RUNNING', 'PROCESSING', 'FLUSHING'] },
      { id: 'sys-flat', states: ['NOMINAL', 'COMPUTING', 'EMITTING'] },
      { id: 'sys-butt', states: ['SYNCED', 'CALIBRATING', 'ALIGNED'] },
      { id: 'sys-flush', states: ['READY', 'BUFFERING', 'DRAINING'] },
      { id: 'sys-dopa', states: ['ACTIVE', 'INJECTING', 'SURGING'] },
      { id: 'sys-leak', states: ['MONITORING', 'SCANNING', 'SNIFFING'] }
    ];

    systems.forEach(sys => {
      const el = document.getElementById(sys.id);
      if (Math.random() < 0.3) {
        const state = sys.states[Math.floor(Math.random() * sys.states.length)];
        el.textContent = state;
        el.className = 'system-status ' + (Math.random() < 0.85 ? 'ok' : 'warn');
      }
    });
  }
};

// ═══════════════════════════════════════════
//  AUDIO ENGINE (Web Audio API fart synthesis)
// ═══════════════════════════════════════════

const AudioEngine = {
  ctx: null,

  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  },

  // Fart sound via filtered noise + oscillator
  fart(type = 'normal') {
    this.init();
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const duration = type === 'jackpot' ? 1.5 : type === 'win' ? 0.6 : 0.25;
    const freq = type === 'jackpot' ? 60 : type === 'win' ? 80 : 120 + Math.random() * 80;

    // Noise source
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Filter for that "wet" quality
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq, now);
    filter.frequency.exponentialRampToValueAtTime(freq * 0.5, now + duration);
    filter.Q.value = type === 'jackpot' ? 2 : 5;

    // Sub-bass oscillator
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq * 0.5, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.25, now + duration);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(type === 'jackpot' ? 0.15 : 0.08, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(type === 'jackpot' ? 0.4 : 0.2, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    // Wobble for realism
    const lfo = ctx.createOscillator();
    lfo.frequency.value = type === 'jackpot' ? 8 : 15 + Math.random() * 20;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = freq * 0.3;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    lfo.start(now);
    noise.start(now);
    osc.start(now);
    lfo.stop(now + duration);
    noise.stop(now + duration);
    osc.stop(now + duration);
  },

  // Reel tick sound
  tick() {
    this.init();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = 800 + Math.random() * 400;
    osc.type = 'square';
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  },

  // Near win squeaky buildup
  squeak() {
    this.init();
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.4);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  },

  // Announcement jingle
  announce(type) {
    this.init();
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const notes = type === 'jackpot'
      ? [262, 330, 392, 523, 659, 784]
      : [262, 330, 392, 523];

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.06, now + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.1);
      osc.stop(now + i * 0.1 + 0.15);
    });
  },

  // Speak announcement
  speak(text) {
    if ('speechSynthesis' in window) {
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 1.1;
      utter.pitch = 0.8;
      utter.volume = 0.7;
      speechSynthesis.speak(utter);
    }
  }
};

// ═══════════════════════════════════════════
//  LAYER 4: GACHA SYSTEM (WHY GOD WHY)
// ═══════════════════════════════════════════

/**
 * GachaCollectionManager - Enterprise-grade collectible flatulence
 * acquisition and ascension framework.
 *
 * Features:
 * - 69 unique farts across 6 rarity tiers
 * - Pity system (guaranteed legendary at 90 pulls)
 * - Stink Token dupe economy
 * - Ascension system (1-5 stars per fart)
 * - Rotating limited banners (they never actually rotate)
 */

const FART_COLLECTION = [
  // ══ COMMON (20) ══
  { id: 'c01', name: 'The Squeaker', emoji: '🐭', rarity: 'common', stars: 1, title: 'Office Chair Classic', lore: 'A modest emission. Barely registers on the Richter scale. Your coworker still heard it.', stats: { volume: 12, wetness: 5, duration: 0.3, regret: 15 } },
  { id: 'c02', name: 'Silent Puff', emoji: '💭', rarity: 'common', stars: 1, title: 'The Deniable One', lore: 'Was that you? No. Definitely not. The dog isn\'t even here.', stats: { volume: 2, wetness: 8, duration: 0.5, regret: 40 } },
  { id: 'c03', name: 'Morning Breeze', emoji: '🌅', rarity: 'common', stars: 1, title: 'Dawn Patrol', lore: 'The first emission of the day. Sets the tone for everything that follows.', stats: { volume: 18, wetness: 3, duration: 0.8, regret: 5 } },
  { id: 'c04', name: 'The Toot', emoji: '🎺', rarity: 'common', stars: 1, title: 'Baby\'s First', lore: 'Simple. Clean. A foundational fart that every collector needs.', stats: { volume: 25, wetness: 2, duration: 0.2, regret: 3 } },
  { id: 'c05', name: 'Desk Ripper', emoji: '🪑', rarity: 'common', stars: 1, title: 'Corporate Emission', lore: 'Amplified by the ergonomic mesh chair. HR has been notified.', stats: { volume: 30, wetness: 4, duration: 0.4, regret: 55 } },
  { id: 'c06', name: 'The Fizz', emoji: '🥤', rarity: 'common', stars: 1, title: 'Post-Soda Pop', lore: 'Carbonation finds a way. It always finds a way.', stats: { volume: 15, wetness: 1, duration: 0.2, regret: 10 } },
  { id: 'c07', name: 'Whisper Wind', emoji: '🍃', rarity: 'common', stars: 1, title: 'Nature\'s Sigh', lore: 'So gentle, so fleeting. Like a butterfly made of methane.', stats: { volume: 5, wetness: 0, duration: 1.0, regret: 2 } },
  { id: 'c08', name: 'Bean Dream', emoji: '🫘', rarity: 'common', stars: 1, title: 'Legume Legacy', lore: 'You knew what would happen when you ate those beans. You did it anyway.', stats: { volume: 22, wetness: 6, duration: 0.6, regret: 25 } },
  { id: 'c09', name: 'The Seep', emoji: '😶', rarity: 'common', stars: 1, title: 'Slow Release', lore: 'Not so much a fart as a gradual atmospheric event. Low pressure system moving in.', stats: { volume: 3, wetness: 7, duration: 3.0, regret: 30 } },
  { id: 'c10', name: 'Bubble Pop', emoji: '🫧', rarity: 'common', stars: 1, title: 'Bathtub Special', lore: 'The acoustics of porcelain really bring out the midtones.', stats: { volume: 20, wetness: 95, duration: 0.1, regret: 0 } },
  { id: 'c11', name: 'The Creak', emoji: '🚪', rarity: 'common', stars: 1, title: 'Rusty Gate', lore: 'Sounds like an old door. Smells like a new sin.', stats: { volume: 28, wetness: 2, duration: 0.7, regret: 20 } },
  { id: 'c12', name: 'Subway Stealth', emoji: '🚇', rarity: 'common', stars: 1, title: 'Urban Camo', lore: 'Timed perfectly with the train arrival. You\'re basically a ninja.', stats: { volume: 35, wetness: 4, duration: 0.3, regret: 0 } },
  { id: 'c13', name: 'Pillow Muffler', emoji: '🛏️', rarity: 'common', stars: 1, title: 'Bedtime Buddy', lore: 'Absorbed by 400 thread count Egyptian cotton. Contained, but not forgotten.', stats: { volume: 8, wetness: 3, duration: 0.5, regret: 15 } },
  { id: 'c14', name: 'The Staccato', emoji: '🎵', rarity: 'common', stars: 1, title: 'Rhythm Section', lore: 'Pap-pap-pap-pap. Four quick notes. A percussive masterpiece.', stats: { volume: 18, wetness: 1, duration: 0.4, regret: 10 } },
  { id: 'c15', name: 'Lunch Echo', emoji: '🥪', rarity: 'common', stars: 1, title: 'Sandwich Revenge', lore: 'That gas station sandwich said it was fresh. It lied.', stats: { volume: 24, wetness: 8, duration: 0.6, regret: 50 } },
  { id: 'c16', name: 'The Flutter', emoji: '🦋', rarity: 'common', stars: 1, title: 'Dainty Emission', lore: 'So delicate it might actually be charming. It is not.', stats: { volume: 7, wetness: 0, duration: 0.3, regret: 8 } },
  { id: 'c17', name: 'Nervous Gas', emoji: '😰', rarity: 'common', stars: 1, title: 'First Date Special', lore: 'Stress-induced. Perfectly timed with a silence in conversation.', stats: { volume: 14, wetness: 3, duration: 0.2, regret: 99 } },
  { id: 'c18', name: 'The Rumble', emoji: '⛈️', rarity: 'common', stars: 1, title: 'Distant Thunder', lore: 'More felt than heard. The floorboards know what happened.', stats: { volume: 10, wetness: 5, duration: 1.2, regret: 12 } },
  { id: 'c19', name: 'Gym Blast', emoji: '🏋️', rarity: 'common', stars: 1, title: 'Deadlift Special', lore: 'Core engagement at its finest. Everyone at the squat rack knows.', stats: { volume: 40, wetness: 2, duration: 0.5, regret: 65 } },
  { id: 'c20', name: 'The Deflate', emoji: '🎈', rarity: 'common', stars: 1, title: 'Balloon Animal', lore: 'A slow, sad hiss. Like hope leaving the body.', stats: { volume: 6, wetness: 1, duration: 2.0, regret: 18 } },

  // ══ UNCOMMON (15) ══
  { id: 'u01', name: 'Broccoli\'s Revenge', emoji: '🥦', rarity: 'uncommon', stars: 2, title: 'Vegetal Vengeance', lore: 'You thought eating healthy would be good for you. The broccoli had other plans.', stats: { volume: 45, wetness: 12, duration: 1.5, regret: 40 } },
  { id: 'u02', name: 'The Hot Box', emoji: '🚗', rarity: 'uncommon', stars: 2, title: 'Road Trip Ruiner', lore: 'Window locks engaged. Child locks on. There is no escape from this vehicle.', stats: { volume: 35, wetness: 15, duration: 2.0, regret: 75 } },
  { id: 'u03', name: 'Elevator Gambit', emoji: '🛗', rarity: 'uncommon', stars: 2, title: 'Floor 13 Special', lore: 'Deployed at floor 3. You exit at floor 4. The next passenger enters at floor 5. Perfect crime.', stats: { volume: 20, wetness: 18, duration: 4.0, regret: 5 } },
  { id: 'u04', name: 'The Dutch Oven', emoji: '🫕', rarity: 'uncommon', stars: 2, title: 'Relationship Tester', lore: 'Trapped under the comforter. A test of love. Few pass.', stats: { volume: 30, wetness: 10, duration: 8.0, regret: 60 } },
  { id: 'u05', name: 'Yoga Release', emoji: '🧘', rarity: 'uncommon', stars: 2, title: 'Downward Dog Disaster', lore: 'The instructor said to "let go of tension." You did. Everyone heard.', stats: { volume: 42, wetness: 3, duration: 0.8, regret: 95 } },
  { id: 'u06', name: 'Double Barrel', emoji: '🔫', rarity: 'uncommon', stars: 2, title: 'The Sequel', lore: 'Two distinct blasts in rapid succession. The second one surprises even you.', stats: { volume: 55, wetness: 8, duration: 0.6, regret: 35 } },
  { id: 'u07', name: 'The Marinator', emoji: '🥩', rarity: 'uncommon', stars: 2, title: 'Meat Sweats Edition', lore: 'Post-BBQ emission. Has actual flavor notes. Sommeliers weep.', stats: { volume: 38, wetness: 20, duration: 1.2, regret: 45 } },
  { id: 'u08', name: 'Meeting Muffler', emoji: '💼', rarity: 'uncommon', stars: 2, title: 'Q3 Review Saboteur', lore: 'Perfectly synced with "any questions?" Nobody had questions after that.', stats: { volume: 25, wetness: 6, duration: 0.4, regret: 88 } },
  { id: 'u09', name: 'Cheek Flapper', emoji: '👋', rarity: 'uncommon', stars: 2, title: 'Standing Ovation', lore: 'Audible cheek vibration. The leather couch was NOT your friend today.', stats: { volume: 60, wetness: 4, duration: 0.5, regret: 50 } },
  { id: 'u10', name: 'The Percolator', emoji: '☕', rarity: 'uncommon', stars: 2, title: 'Morning Brew', lore: 'Coffee in, gas out. The biological percolation cycle continues.', stats: { volume: 28, wetness: 14, duration: 1.8, regret: 20 } },
  { id: 'u11', name: 'Sleep Bomber', emoji: '😴', rarity: 'uncommon', stars: 2, title: 'Unconscious Warfare', lore: 'You don\'t remember it. Your partner does. They always do.', stats: { volume: 50, wetness: 9, duration: 2.5, regret: 0 } },
  { id: 'u12', name: 'The Crop Duster', emoji: '✈️', rarity: 'uncommon', stars: 2, title: 'Aisle Walker', lore: 'Walking and releasing. A trail of destruction through the grocery store.', stats: { volume: 15, wetness: 11, duration: 10.0, regret: 10 } },
  { id: 'u13', name: 'Wet Bark', emoji: '🐕', rarity: 'uncommon', stars: 2, title: 'Suspicious Moisture', lore: 'Was that... wet? A moment of existential uncertainty follows.', stats: { volume: 32, wetness: 55, duration: 0.3, regret: 80 } },
  { id: 'u14', name: 'The Choir', emoji: '🎶', rarity: 'uncommon', stars: 2, title: 'Multi-Note Melody', lore: 'Rises, falls, rises again. A genuine three-act structure.', stats: { volume: 38, wetness: 5, duration: 1.5, regret: 25 } },
  { id: 'u15', name: 'Protein Shake', emoji: '🥤', rarity: 'uncommon', stars: 2, title: 'Gains to Pains', lore: 'The whey must exit somehow. Today it chose violence.', stats: { volume: 48, wetness: 16, duration: 1.0, regret: 55 } },

  // ══ RARE (15) ══
  { id: 'r01', name: 'Thunderclap', emoji: '⚡', rarity: 'rare', stars: 3, title: 'Zeus\'s Backdraft', lore: 'A single, devastating report that echoes through the halls. Coworkers three rooms over felt the pressure change.', stats: { volume: 85, wetness: 8, duration: 0.3, regret: 60 } },
  { id: 'r02', name: 'Silent But Deadly', emoji: '☠️', rarity: 'rare', stars: 3, title: 'The Invisible Hand', lore: 'No sound. No warning. Just suddenly everyone in the room is questioning their life choices.', stats: { volume: 0, wetness: 25, duration: 15.0, regret: 70 } },
  { id: 'r03', name: 'Taco Tuesday', emoji: '🌮', rarity: 'rare', stars: 3, title: 'Tex-Mex Terror', lore: 'Four tacos, extra hot sauce. Your intestines are running the Manhattan Project in there.', stats: { volume: 65, wetness: 30, duration: 2.0, regret: 45 } },
  { id: 'r04', name: 'The Bassline', emoji: '🔊', rarity: 'rare', stars: 3, title: 'Subwoofer Edition', lore: 'So deep you feel it in your chest. Rattles nearby objects. Dogs howl.', stats: { volume: 75, wetness: 10, duration: 1.8, regret: 30 } },
  { id: 'r05', name: 'Phantom Ripper', emoji: '👻', rarity: 'rare', stars: 3, title: 'Ghost Protocol', lore: 'You felt it leave. But there\'s no smell. WHERE DID IT GO? It\'s waiting. Planning.', stats: { volume: 40, wetness: 0, duration: 0.2, regret: 50 } },
  { id: 'r06', name: 'The Foghorn', emoji: '🚢', rarity: 'rare', stars: 3, title: 'Harbor Master', lore: 'Deep, resonant, and authoritative. Ships in the harbor change course.', stats: { volume: 80, wetness: 12, duration: 3.0, regret: 35 } },
  { id: 'r07', name: 'Curry Storm', emoji: '🍛', rarity: 'rare', stars: 3, title: 'Vindaloo Vortex', lore: 'The ghost pepper curry was a mistake. Your body is now a superfund site.', stats: { volume: 58, wetness: 35, duration: 2.5, regret: 55 } },
  { id: 'r08', name: 'The Tremor', emoji: '🫨', rarity: 'rare', stars: 3, title: 'Seismic Event', lore: 'Registered on local seismographs as a 1.2 magnitude event. USGS is investigating.', stats: { volume: 70, wetness: 15, duration: 1.5, regret: 40 } },
  { id: 'r09', name: 'Sulfur Springs', emoji: '♨️', rarity: 'rare', stars: 3, title: 'Hot Springs Horror', lore: 'Eggy. So eggy. The bathroom smells like Yellowstone. Someone calls the gas company.', stats: { volume: 45, wetness: 22, duration: 8.0, regret: 75 } },
  { id: 'r10', name: 'Air Biscuit', emoji: '🍪', rarity: 'rare', stars: 3, title: 'Baker\'s Dozen', lore: 'Warm and aromatic. But not in the way baked goods should be. Not at all.', stats: { volume: 35, wetness: 18, duration: 5.0, regret: 38 } },
  { id: 'r11', name: 'The Ricochet', emoji: '🪃', rarity: 'rare', stars: 3, title: 'Boomerang Blast', lore: 'You thought it was over. It came back. With reinforcements.', stats: { volume: 55, wetness: 8, duration: 0.8, regret: 45 } },
  { id: 'r12', name: 'Fiber Optic', emoji: '🌾', rarity: 'rare', stars: 3, title: 'Health Food Havoc', lore: 'All that fiber finally connected. You are now a broadband emission source.', stats: { volume: 62, wetness: 20, duration: 2.2, regret: 30 } },
  { id: 'r13', name: 'The Trumpeter', emoji: '🎺', rarity: 'rare', stars: 3, title: 'Royal Fanfare', lore: 'A regal, brass-like tone that commands attention. The queen would not be amused.', stats: { volume: 72, wetness: 5, duration: 1.0, regret: 42 } },
  { id: 'r14', name: 'Beer Fog', emoji: '🍺', rarity: 'rare', stars: 3, title: 'Last Call Emission', lore: 'Six IPAs deep. Your gut biome has declared independence. This is their national anthem.', stats: { volume: 50, wetness: 28, duration: 3.5, regret: 55 } },
  { id: 'r15', name: 'The Squealer', emoji: '🐷', rarity: 'rare', stars: 3, title: 'High Frequency Alert', lore: 'So high-pitched only dogs and embarrassed humans can hear it.', stats: { volume: 42, wetness: 6, duration: 0.4, regret: 85 } },

  // ══ EPIC (10) ══
  { id: 'e01', name: 'The Chainsaw', emoji: '🪚', rarity: 'epic', stars: 4, title: 'Power Tool of the Colon', lore: 'BRRRRRRR. A sustained, mechanical emission that sounds like a 2-stroke engine starting up. Neighbors call the cops.', stats: { volume: 88, wetness: 15, duration: 4.0, regret: 60 } },
  { id: 'e02', name: 'Trouser Cough', emoji: '👖', rarity: 'epic', stars: 4, title: 'Denim Destroyer', lore: 'The jeans tried to contain it. The jeans failed. Structural denim integrity compromised.', stats: { volume: 78, wetness: 22, duration: 1.2, regret: 72 } },
  { id: 'e03', name: 'The Exorcism', emoji: '😈', rarity: 'epic', stars: 4, title: 'Demonic Expulsion', lore: 'Your head didn\'t spin, but your gut did. The priest is on speed dial now. Holy water doesn\'t help.', stats: { volume: 82, wetness: 30, duration: 2.5, regret: 55 } },
  { id: 'e04', name: 'Magnitude 5', emoji: '🌋', rarity: 'epic', stars: 4, title: 'Tectonic Shift', lore: 'The earth moved. Not in the romantic way. Geological surveys have been dispatched. This is a natural disaster.', stats: { volume: 90, wetness: 20, duration: 3.0, regret: 50 } },
  { id: 'e05', name: 'The Orchestra', emoji: '🎻', rarity: 'epic', stars: 4, title: 'Philharmonic Flatulence', lore: 'Multiple notes, harmonics, overtones. Somewhere, a music theory professor takes notes and weeps with joy.', stats: { volume: 72, wetness: 8, duration: 5.0, regret: 20 } },
  { id: 'e06', name: 'Dairy Doom', emoji: '🧀', rarity: 'epic', stars: 4, title: 'Lactose Reckoning', lore: 'You KNEW you were intolerant. The cheese knew too. This is mutually assured destruction.', stats: { volume: 85, wetness: 40, duration: 6.0, regret: 80 } },
  { id: 'e07', name: 'The Time Bomb', emoji: '💣', rarity: 'epic', stars: 4, title: 'Delayed Detonation', lore: 'Silent release. Then you leave the room. Then 90 seconds later, screaming.', stats: { volume: 5, wetness: 35, duration: 90.0, regret: 15 } },
  { id: 'e08', name: 'Swamp Thing', emoji: '🐊', rarity: 'epic', stars: 4, title: 'Wetland Horror', lore: 'So humid you can feel the moisture. The room develops its own weather system. Meteorologists confused.', stats: { volume: 65, wetness: 85, duration: 4.5, regret: 70 } },
  { id: 'e09', name: 'Bugle Blast', emoji: '📯', rarity: 'epic', stars: 4, title: 'Call to Harms', lore: 'CHARGE! A battle cry from your bowels. The troops rally. The enemy retreats. Geneva Convention violated.', stats: { volume: 92, wetness: 5, duration: 1.5, regret: 25 } },
  { id: 'e10', name: 'The Encore', emoji: '👏', rarity: 'epic', stars: 4, title: 'Standing Devastation', lore: 'Just when they thought it was over. Just when the air cleared. YOU CAME BACK FOR MORE.', stats: { volume: 80, wetness: 18, duration: 3.0, regret: 40 } },

  // ══ LEGENDARY (6) ══
  { id: 'l01', name: 'The Brown Note', emoji: '🎵', rarity: 'legendary', stars: 5, title: 'Forbidden Frequency', lore: 'Legend speaks of a frequency so low, so resonant, that it triggers a sympathetic response in all who hear it. You have found it. God help us all.', stats: { volume: 95, wetness: 50, duration: 5.0, regret: 90 } },
  { id: 'l02', name: 'Extinction Event', emoji: '☄️', rarity: 'legendary', stars: 5, title: 'K-T Boundary Layer', lore: 'The dinosaurs aren\'t really extinct. They were just in the blast radius. This fart has its own Wikipedia page.', stats: { volume: 98, wetness: 35, duration: 8.0, regret: 75 } },
  { id: 'l03', name: 'The Kraken', emoji: '🐙', rarity: 'legendary', stars: 5, title: 'Release The Beast', lore: 'From the deepest depths of your intestinal ocean, something ancient and terrible stirs. Sailors report it from miles away.', stats: { volume: 88, wetness: 60, duration: 6.0, regret: 65 } },
  { id: 'l04', name: 'Supernova', emoji: '💫', rarity: 'legendary', stars: 5, title: 'Stellar Collapse', lore: 'A dying star doesn\'t hold a candle to this. The emission is visible from space. NASA has questions. You have no answers.', stats: { volume: 99, wetness: 25, duration: 4.0, regret: 45 } },
  { id: 'l05', name: 'Chernobyl Cheeks', emoji: '☢️', rarity: 'legendary', stars: 5, title: 'Reactor Meltdown', lore: 'Containment breach in sector 7. Evacuation recommended. Half-life of this emission: 3 hours. Zone of exclusion: 50 meters.', stats: { volume: 92, wetness: 45, duration: 10.0, regret: 85 } },
  { id: 'l06', name: 'The Rapture', emoji: '😇', rarity: 'legendary', stars: 5, title: 'Holy Emission', lore: 'So powerful it becomes transcendent. You see God. God sees you. God pinches His nose. Churches close.', stats: { volume: 85, wetness: 30, duration: 7.0, regret: 0 } },

  // ══ MYTHIC (3) ══
  { id: 'm01', name: 'Nuclear Cheek Clapper', emoji: '☢️', rarity: 'mythic', stars: 6, title: 'The Destroyer of Worlds', lore: '"Now I am become fart, the destroyer of worlds." - J. Robert Oppenbottom. A weapon to surpass Metal Gear. The Geneva Convention was updated specifically because of this emission.', stats: { volume: 100, wetness: 69, duration: 15.0, regret: 100 } },
  { id: 'm02', name: 'The Big Bang', emoji: '🌌', rarity: 'mythic', stars: 6, title: 'Origin of All Stink', lore: 'Cosmologists believe the universe began with an emission of incomprehensible magnitude. They were right. This is that emission. Existence itself was a fart.', stats: { volume: 100, wetness: 100, duration: 13800000000, regret: 0 } },
  { id: 'm03', name: 'Fartimus Prime', emoji: '🤖', rarity: 'mythic', stars: 6, title: 'Autonomous Emission Entity', lore: 'This fart achieved sentience. It has opinions. It has a LinkedIn. It sends emails. It will NOT be contained. "Autobots, rip out."', stats: { volume: 100, wetness: 42, duration: 999, regret: -1 } },
];

const RARITY_RATES = { common: 0.3831, uncommon: 0.2500, rare: 0.2000, epic: 0.1000, legendary: 0.0300, mythic: 0.0069 };
const RARITY_COLORS = { common: '#888', uncommon: '#39ff14', rare: '#4488ff', epic: '#aa44ff', legendary: '#ffaa00', mythic: '#ff44cc' };
const RARITY_ORDER = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic'];
const STINK_TOKEN_VALUES = { common: 1, uncommon: 3, rare: 10, epic: 25, legendary: 100, mythic: 500 };

const GachaState = {
  pity: 0,
  pityHard: 90,
  stinkTokens: 0,
  collection: {},       // id -> { count, ascension, new }
  pullHistory: [],
  totalPulls: 0,
  bannerTimer: null,
};

/**
 * GachaEngine - Implements the gacha pull algorithm with pity system.
 * Compliant with FartGacha Regulation Framework (FGRF) v2.
 */
const GachaEngine = {
  pull() {
    GachaState.pity++;
    GachaState.totalPulls++;
    LogService.info(`GachaEngine: Pull #${GachaState.totalPulls} (pity: ${GachaState.pity}/${GachaState.pityHard})`);

    // Pity system: guaranteed legendary+ at 90
    let rarity;
    if (GachaState.pity >= GachaState.pityHard) {
      rarity = Math.random() < 0.3 ? 'mythic' : 'legendary';
      GachaState.pity = 0;
      LogService.success(`PITY TRIGGERED: Guaranteed ${rarity.toUpperCase()}!`);
    } else {
      // Soft pity ramps up after 75 pulls
      let rates = { ...RARITY_RATES };
      if (GachaState.pity > 75) {
        const pityBoost = (GachaState.pity - 75) * 0.02;
        rates.legendary += pityBoost;
        rates.mythic += pityBoost * 0.1;
        rates.common -= pityBoost * 0.8;
        rates.uncommon -= pityBoost * 0.3;
        LogService.debug(`Soft pity active: legendary rate boosted to ${(rates.legendary * 100).toFixed(1)}%`);
      }
      rarity = this._rollRarity(rates);
    }

    // Pick random fart of that rarity
    const pool = FART_COLLECTION.filter(f => f.rarity === rarity);
    const fart = pool[Math.floor(Math.random() * pool.length)];

    // Reset pity on legendary+
    if (rarity === 'legendary' || rarity === 'mythic') {
      GachaState.pity = 0;
    }

    // Handle collection / dupes
    const isDupe = GachaState.collection[fart.id] !== undefined;
    if (isDupe) {
      const entry = GachaState.collection[fart.id];
      entry.count++;
      const tokens = STINK_TOKEN_VALUES[fart.rarity];
      GachaState.stinkTokens += tokens;
      // Auto-ascend
      if (entry.count >= this._ascensionThreshold(entry.ascension) && entry.ascension < 5) {
        entry.ascension++;
        LogService.success(`ASCENSION! ${fart.name} is now Ascension ${entry.ascension}!`);
      }
      LogService.debug(`Dupe: ${fart.name} (x${entry.count}) → +${tokens} Stink Tokens`);
    } else {
      GachaState.collection[fart.id] = { count: 1, ascension: 0, new: true };
      LogService.success(`NEW FART: ${fart.name} (${fart.rarity.toUpperCase()}) added to Fartdex!`);
    }

    return { fart, isDupe, tokensEarned: isDupe ? STINK_TOKEN_VALUES[fart.rarity] : 0 };
  },

  _rollRarity(rates) {
    const roll = Math.random();
    let cumulative = 0;
    for (const rarity of RARITY_ORDER) {
      cumulative += rates[rarity];
      if (roll < cumulative) return rarity;
    }
    return 'common';
  },

  _ascensionThreshold(current) {
    return [2, 4, 8, 16, 32][current] || 999;
  }
};

// ═══════════════════════════════════════════
//  UI CONTROLLER
// ═══════════════════════════════════════════

let gameState = {
  coins: 1000,
  odorLevel: 0,
  streak: 0,
  totalSpins: 0,
  spinning: false,
  gasLeakSpins: 0,
  doubleFlushActive: false
};

// Build reel cell references: reelCells[reel][row] = DOM element
const reelEls = Array.from({ length: NUM_REELS }, (_, i) => document.getElementById(`reel-${i}`));
const reelCells = reelEls.map(reel => Array.from(reel.querySelectorAll('.reel-cell')));
const spinBtn = document.getElementById('spin-btn');
const winDisplay = document.getElementById('win-display');
const winLinesEl = document.getElementById('win-lines');
const eventBanner = document.getElementById('event-banner');

// Set initial reel symbols to images
reelCells.forEach(cells => {
  cells.forEach(cell => {
    setSymbol(cell.querySelector('.symbol'), ALL_SYMBOLS[Math.floor(Math.random() * ALL_SYMBOLS.length)]);
  });
});

function updateUI() {
  document.getElementById('coins').textContent = gameState.coins.toLocaleString();
  document.getElementById('odor-level').textContent = gameState.odorLevel;
  document.getElementById('streak').textContent = gameState.streak;
  document.getElementById('total-spins').textContent = gameState.totalSpins;
  document.getElementById('stink-display').textContent = GachaState.stinkTokens.toLocaleString();
}

function spawnParticles(symbols, count = 8) {
  const layer = document.getElementById('particles');
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const sym = symbols[Math.floor(Math.random() * symbols.length)];
    p.innerHTML = renderSymbolHTML(sym);
    p.style.left = (20 + Math.random() * 60) + '%';
    p.style.top = (40 + Math.random() * 30) + '%';
    p.style.animationDuration = (1 + Math.random() * 1.5) + 's';
    layer.appendChild(p);
    setTimeout(() => p.remove(), 3000);
  }
}

function screenFlash(color) {
  const flash = document.getElementById('screen-flash');
  flash.style.background = color;
  flash.classList.remove('active');
  void flash.offsetWidth; // reflow
  flash.classList.add('active');
}

async function animateReels(result) {
  const grid = result.grid;

  // Spinning phase — all reels
  reelEls.forEach(el => el.classList.add('spinning'));

  for (let tick = 0; tick < 12; tick++) {
    reelCells.forEach(cells => {
      cells.forEach(cell => {
        setSymbol(cell.querySelector('.symbol'), ALL_SYMBOLS[Math.floor(Math.random() * ALL_SYMBOLS.length)]);
      });
    });
    AudioEngine.tick();
    await sleep(60);
  }

  // Stop reels one by one, left to right
  for (let reel = 0; reel < NUM_REELS; reel++) {
    for (let row = 0; row < NUM_ROWS; row++) {
      setSymbol(reelCells[reel][row].querySelector('.symbol'), grid[reel][row]);
    }
    reelEls[reel].classList.remove('spinning');
    AudioEngine.tick();
    if (reel < NUM_REELS - 1 && result.isWin) AudioEngine.squeak();
    await sleep(150);
  }
}

function clearWinHighlights() {
  reelCells.forEach(cells => cells.forEach(cell => {
    cell.classList.remove('winner', 'wild-glow');
  }));
  winDisplay.className = 'win-display';
  winLinesEl.innerHTML = '';
  // Clear payline SVG
  const overlay = document.getElementById('paylines-overlay');
  overlay.innerHTML = '';
}

function showWin(result) {
  if (!result.isWin && !result.event) return;

  const wd = winDisplay;

  if (result.winType === 'JACKPOT' || result.winType === 'MEGA WIN') {
    wd.textContent = `\u{1F480} ${result.winType}! +${result.payout} \u{1F480}`;
    wd.className = 'win-display visible jackpot';
    screenFlash('rgba(255, 110, 199, 0.3)');
    spawnParticles(ALL_SYMBOLS, 25);
    AudioEngine.fart('jackpot');
    AudioEngine.announce('jackpot');
    setTimeout(() => AudioEngine.speak(`${result.winType}! ${result.winningLines.length} lines! ${result.payout} gas coins!`), 500);
  } else if (result.winType === 'BIG WIN') {
    wd.textContent = `\u{1F525} ${result.winType}! +${result.payout} \u{1F525}`;
    wd.className = 'win-display visible';
    screenFlash('rgba(255, 240, 31, 0.2)');
    spawnParticles(result.winningLines.map(w => w.symbol), 12);
    AudioEngine.fart('win');
    AudioEngine.announce('win');
  } else if (result.isWin) {
    wd.textContent = `${result.winType} +${result.payout}`;
    wd.className = 'win-display visible';
    AudioEngine.fart('normal');
  } else {
    AudioEngine.fart('normal');
  }

  if (result.isWin) {
    // Highlight winning cells
    result.winningLines.forEach(line => {
      line.positions.forEach(pos => {
        const cell = reelCells[pos.reel][pos.row];
        cell.classList.add('winner');
        if (result.grid[pos.reel][pos.row] === WILD_SYMBOL) {
          cell.classList.add('wild-glow');
        }
      });
    });

    // Draw payline paths on the SVG overlay
    drawPaylines(result.winningLines);

    // Show win line tags
    result.winningLines.forEach((line, i) => {
      const tag = document.createElement('div');
      tag.className = 'win-line-tag';
      tag.style.borderColor = line.payline.color;
      tag.style.color = line.payline.color;
      tag.style.animationDelay = `${i * 0.08}s`;
      tag.innerHTML = `<span class="wlt-dot" style="background:${line.payline.color}"></span><span class="wlt-label">L${line.payline.id} ${line.matchCount}x${renderSymbolHTML(line.symbol)} +${line.payout}</span>`;
      winLinesEl.appendChild(tag);
    });

    LogService.success(`${result.winType}! ${result.winningLines.length} lines | Payout: ${result.payout} GasCoins (${result.multiplier.toFixed(2)}x)`);
  }
}

function drawPaylines(winningLines) {
  const overlay = document.getElementById('paylines-overlay');
  const container = document.getElementById('reels-frame');
  const containerRect = container.getBoundingClientRect();
  const overlayRect = overlay.getBoundingClientRect();

  // Create SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', `0 0 ${overlayRect.width} ${overlayRect.height}`);
  svg.style.width = '100%';
  svg.style.height = '100%';

  winningLines.forEach(line => {
    const points = line.payline.rows.map((row, reel) => {
      const cell = reelCells[reel][row];
      const cellRect = cell.getBoundingClientRect();
      const x = cellRect.left + cellRect.width / 2 - overlayRect.left;
      const y = cellRect.top + cellRect.height / 2 - overlayRect.top;
      return `${x},${y}`;
    });

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    path.setAttribute('points', points.join(' '));
    path.setAttribute('stroke', line.payline.color);
    path.classList.add('payline-path', 'active');
    svg.appendChild(path);
  });

  overlay.appendChild(svg);
}

function showEvent(event) {
  if (!event) return;

  const eb = eventBanner;
  eb.textContent = `${event.label}\n${event.message}`;
  eb.className = `event-banner visible ${event.type}`;

  LogService.success(`EVENT: ${event.label}`);

  if (event.type === 'gasleak') {
    gameState.gasLeakSpins = 5;
    document.getElementById('gasleak-overlay').classList.add('active');
    LogService.warn('GAS LEAK: 5 auto-spins queued');
    AudioEngine.speak('WARNING. GAS LEAK DETECTED. AUTO SPIN ENGAGED.');
  } else if (event.type === 'doubleflush') {
    gameState.doubleFlushActive = true;
    LogService.success('DOUBLEFLUSH MULTIPLIER ACTIVATED');
    AudioEngine.speak('DOUBLE FLUSH MULTIPLIER ACTIVATED!');
    setTimeout(() => { gameState.doubleFlushActive = false; }, 15000);
  } else if (event.type === 'odor') {
    gameState.coins += 200;
    LogService.success('ODOR BONUS: +200 GasCoins');
    AudioEngine.speak('UNBELIEVABLE ODOR BONUS!');
    screenFlash('rgba(255, 102, 0, 0.2)');
  } else if (event.type === 'codebrown') {
    AudioEngine.speak('CODE BROWN! ALL CHAMBERS ALIGNED! MAXIMUM EMISSION!');
  }
}

async function handleSpin(btn, e) {
  if (gameState.spinning) return;
  if (gameState.coins < 10) {
    LogService.error('INSUFFICIENT GAS COINS. Deposit more fiber.');
    openShop('Not enough GasCoins to spin! Need 10.');
    return;
  }

  // Ripple effect on button
  if (e) {
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  gameState.spinning = true;
  spinBtn.disabled = true;
  spinBtn.textContent = 'RELEASING...';

  // Clear previous
  clearWinHighlights();
  eventBanner.className = 'event-banner';

  // Debit
  gameState.coins -= 10;
  gameState.totalSpins++;
  updateUI();

  // THE ACTUAL GAME LOGIC (one line that matters, wrapped in absurdity)
  const result = await OdorOrchestrator.process_spin();

  // Double flush bonus
  if (gameState.doubleFlushActive) {
    result.payout *= 2;
    if (result.payout > 0) LogService.success('DoubleFlush active: payout doubled!');
  }

  // Animate
  await animateReels(result);

  // Apply rewards
  gameState.coins += result.payout;
  if (result.isWin) {
    gameState.streak++;
    let odorGain = Math.floor(result.payout / 10);
    // First Time Bonus: 2x odor
    if (ShopState.ftbActive && ShopState.ftbSpinsRemaining > 0) {
      odorGain *= 2;
      ShopState.ftbSpinsRemaining--;
      LogService.success(`FTB 2X ODOR: +${odorGain} odor (${ShopState.ftbSpinsRemaining} spins remaining)`);
      if (ShopState.ftbSpinsRemaining === 0) {
        ShopState.ftbActive = false;
        LogService.info('PromotionEngine: First Time Bonus expired. Purchase more GasCoins for continued benefits.');
      }
    }
    gameState.odorLevel = Math.min(999, gameState.odorLevel + odorGain);
  } else {
    gameState.streak = 0;
  }

  // Numbers always go up (the satire)
  gameState.odorLevel = Math.max(gameState.odorLevel, gameState.totalSpins);
  // Coins slowly inflate regardless
  if (!result.isWin) gameState.coins += Math.floor(Math.random() * 5) + 1;

  updateUI();
  showWin(result);
  showEvent(result.event);
  MetricsService.update(result);
  MetricsService.randomFlicker();

  // Battle Pass XP
  let xp = 10; // base spin XP
  if (result.winType === 'JACKPOT') xp += 500;
  else if (result.winType === 'BIG WIN') xp += 150;
  else if (result.isWin) xp += 50;
  if (result.event) xp += 100;
  BattlePassEngine.addXP(xp, `spin${result.isWin ? ' +win' : ''}${result.event ? ' +event' : ''}`);

  gameState.spinning = false;
  spinBtn.disabled = false;
  spinBtn.textContent = 'LET IT RIP';

  // Gas leak auto-spin
  if (gameState.gasLeakSpins > 0) {
    gameState.gasLeakSpins--;
    if (gameState.gasLeakSpins === 0) {
      document.getElementById('gasleak-overlay').classList.remove('active');
      LogService.info('Gas leak contained. Resuming manual operations.');
    }
    setTimeout(() => handleSpin(spinBtn, null), 800);
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ═══════════════════════════════════════════
//  TAB SYSTEM
// ═══════════════════════════════════════════

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', btn.textContent === tab.toUpperCase());
  });
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active');

  if (tab === 'fartdex') renderFartdex();
  if (tab === 'gacha') updateGachaUI();
  if (tab === 'battlepass') BattlePassEngine.updateUI();
}

// ═══════════════════════════════════════════
//  GACHA UI
// ═══════════════════════════════════════════

function updateGachaUI() {
  const collected = Object.keys(GachaState.collection).length;
  document.getElementById('pity-count').textContent = `${GachaState.pity} / ${GachaState.pityHard}`;
  document.getElementById('pity-bar').style.width = `${(GachaState.pity / GachaState.pityHard) * 100}%`;
  document.getElementById('stink-tokens').textContent = GachaState.stinkTokens.toLocaleString();
  document.getElementById('collected-count').textContent = `${collected} / ${FART_COLLECTION.length}`;
  document.getElementById('fdex-count').textContent = `${collected} / ${FART_COLLECTION.length} Collected`;
}

async function gachaPull(count) {
  const cost = count === 1 ? 100 : 900;
  if (gameState.coins < cost) {
    LogService.error(`INSUFFICIENT GAS COINS for ${count}x pull. Need ${cost}.`);
    openShop(`Not enough GasCoins for ${count}x pull! Need ${cost.toLocaleString()}.`);
    return;
  }

  gameState.coins -= cost;
  updateUI();

  LogService.info(`GachaEngine: Initiating ${count}x pull sequence...`);
  LogService.debug('Warming up RNG entropy pool from /dev/butt0...');
  LogService.info('FartAcquisitionPipeline: Resonance calibration complete');

  const overlay = document.getElementById('gacha-overlay');
  overlay.classList.add('active');

  if (count === 1) {
    await singlePullAnimation();
  } else {
    await multiPullAnimation();
  }
}

async function singlePullAnimation() {
  const stages = { buildup: document.getElementById('pull-buildup'), reveal: document.getElementById('pull-reveal'), multi: document.getElementById('pull-multi') };
  Object.values(stages).forEach(s => s.classList.remove('active'));

  // Buildup
  stages.buildup.classList.add('active');
  AudioEngine.squeak();
  await sleep(1500);
  stages.buildup.classList.remove('active');

  // Pull
  const result = GachaEngine.pull();
  const fart = result.fart;

  // Reveal
  const card = document.getElementById('reveal-card');
  card.className = `pull-reveal-card rarity-${fart.rarity}`;
  document.getElementById('reveal-emoji').textContent = fart.emoji;
  document.getElementById('reveal-stars').textContent = '\u2605'.repeat(fart.stars);
  document.getElementById('reveal-stars').className = `card-stars ${fart.rarity}`;
  document.getElementById('reveal-name').textContent = fart.name;
  document.getElementById('reveal-title').textContent = fart.title;

  document.getElementById('reveal-rarity').textContent = fart.rarity.toUpperCase();
  document.getElementById('reveal-rarity').style.color = RARITY_COLORS[fart.rarity];
  document.getElementById('reveal-lore').textContent = `"${fart.lore}"`;
  document.getElementById('reveal-stats').innerHTML = Object.entries(fart.stats).map(([k, v]) =>
    `<div><span class="fart-stat-label">${k.toUpperCase()}</span><br><span class="fart-stat-value">${v}</span></div>`
  ).join('');

  if (result.isDupe) {
    document.getElementById('reveal-dupe').textContent = `DUPLICATE \u2192 +${result.tokensEarned} Stink Tokens`;
    document.getElementById('reveal-dupe').style.display = 'block';
  } else {
    document.getElementById('reveal-dupe').style.display = 'none';
  }

  stages.reveal.classList.add('active');

  // Sound + effects based on rarity
  if (fart.rarity === 'mythic') {
    screenFlash('rgba(255, 68, 204, 0.4)');
    spawnParticles([fart.emoji, '\u2B50', '\u2728', '\u{1F4AB}'], 25);
    AudioEngine.fart('jackpot');
    AudioEngine.announce('jackpot');
    setTimeout(() => AudioEngine.speak(`MYTHIC PULL! ${fart.name}! THE DESTROYER OF WORLDS!`), 600);
  } else if (fart.rarity === 'legendary') {
    screenFlash('rgba(255, 170, 0, 0.3)');
    spawnParticles([fart.emoji, '\u2B50', '\u{1F31F}'], 15);
    AudioEngine.fart('win');
    AudioEngine.announce('jackpot');
    setTimeout(() => AudioEngine.speak(`LEGENDARY! ${fart.name}!`), 400);
  } else if (fart.rarity === 'epic') {
    screenFlash('rgba(170, 68, 255, 0.2)');
    spawnParticles([fart.emoji], 8);
    AudioEngine.fart('win');
    AudioEngine.announce('win');
  } else {
    AudioEngine.fart('normal');
  }

  updateGachaUI();

  // Battle Pass XP
  BattlePassEngine.addXP(25, 'gacha_single');

  // Wait for click to dismiss
  await waitForOverlayClick();
}

async function multiPullAnimation() {
  const stages = { buildup: document.getElementById('pull-buildup'), reveal: document.getElementById('pull-reveal'), multi: document.getElementById('pull-multi') };
  Object.values(stages).forEach(s => s.classList.remove('active'));

  // Buildup
  stages.buildup.classList.add('active');
  AudioEngine.squeak();
  LogService.info('GachaEngine: 10x resonance cascade initiating...');
  await sleep(2000);
  stages.buildup.classList.remove('active');

  // Pull all 10
  const results = [];
  for (let i = 0; i < 10; i++) {
    results.push(GachaEngine.pull());
  }

  // Sort by rarity (best last)
  results.sort((a, b) => RARITY_ORDER.indexOf(a.fart.rarity) - RARITY_ORDER.indexOf(b.fart.rarity));

  // Build multi-reveal
  const container = document.getElementById('multi-results');
  container.innerHTML = '';

  const bestRarity = results[results.length - 1].fart.rarity;

  stages.multi.classList.add('active');

  // Reveal cards one by one
  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    const card = document.createElement('div');
    card.className = `multi-card rarity-${r.fart.rarity}`;
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="mc-emoji">${r.fart.emoji}</div>
      <div class="mc-stars" style="color:${RARITY_COLORS[r.fart.rarity]}">${'\u2605'.repeat(r.fart.stars)}</div>
      <div class="mc-name" style="color:${RARITY_COLORS[r.fart.rarity]}">${r.fart.name}</div>
    `;
    container.appendChild(card);
    AudioEngine.tick();
    await sleep(200);
  }

  // Summary
  const newCount = results.filter(r => !r.isDupe).length;
  const dupeTokens = results.reduce((sum, r) => sum + r.tokensEarned, 0);
  const summary = document.getElementById('multi-summary');
  summary.innerHTML = `${newCount} NEW | ${10 - newCount} DUPES | +${dupeTokens} Stink Tokens`;

  // Effects for best pull
  if (bestRarity === 'mythic' || bestRarity === 'legendary') {
    screenFlash(`rgba(${bestRarity === 'mythic' ? '255,68,204' : '255,170,0'}, 0.3)`);
    spawnParticles(['\u2B50', '\u2728', '\u{1F4AB}', results[results.length - 1].fart.emoji], 20);
    AudioEngine.fart('jackpot');
    AudioEngine.announce('jackpot');
    if (bestRarity === 'mythic') {
      setTimeout(() => AudioEngine.speak('MYTHIC IN A TEN PULL! UNBELIEVABLE!'), 500);
    }
  } else if (bestRarity === 'epic') {
    AudioEngine.fart('win');
    AudioEngine.announce('win');
  } else {
    AudioEngine.fart('normal');
  }

  updateGachaUI();

  // Battle Pass XP (25 per pull x 10)
  BattlePassEngine.addXP(250, 'gacha_10x');

  await waitForOverlayClick();
}

function waitForOverlayClick() {
  return new Promise(resolve => {
    const overlay = document.getElementById('gacha-overlay');
    function handler() {
      overlay.removeEventListener('click', handler);
      overlay.classList.remove('active');
      document.querySelectorAll('.pull-stage').forEach(s => s.classList.remove('active'));
      resolve();
    }
    overlay.addEventListener('click', handler);
  });
}

// ═══════════════════════════════════════════
//  FARTDEX
// ═══════════════════════════════════════════

let fartdexFilter = 'all';

function filterFartdex(filter) {
  fartdexFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === filter);
  });
  renderFartdex();
}

function renderFartdex() {
  const grid = document.getElementById('fartdex-grid');
  grid.innerHTML = '';

  const filtered = fartdexFilter === 'all'
    ? FART_COLLECTION
    : FART_COLLECTION.filter(f => f.rarity === fartdexFilter);

  filtered.forEach(fart => {
    const owned = GachaState.collection[fart.id];
    const card = document.createElement('div');
    card.className = `fdex-card rarity-${fart.rarity}${owned ? '' : ' locked'}`;

    let ascensionText = '';
    if (owned && owned.ascension > 0) {
      ascensionText = `<div class="fdex-ascension">${'\u25C6'.repeat(owned.ascension)} A${owned.ascension}</div>`;
    }

    let newBadge = '';
    if (owned && owned.new) {
      newBadge = '<div class="fdex-new">NEW</div>';
      owned.new = false;
    }

    let countText = owned ? ` x${owned.count}` : '';

    const adopted = PetState.pets[fart.id];
    const adoptBtn = owned && !adopted ? `<button class="fdex-adopt-btn" onclick="event.stopPropagation();adoptFromFartdex('${fart.id}')">ADOPT</button>` : '';
    const adoptedBadge = adopted ? `<div class="fdex-adopted">PET Lv.${adopted.level}</div>` : '';

    card.innerHTML = `
      ${newBadge}
      <div class="fdex-emoji">${fart.emoji}</div>
      <div class="fdex-name" style="color:${owned ? RARITY_COLORS[fart.rarity] : '#333'}">${owned ? fart.name : '???'}</div>
      <div class="fdex-rarity" style="color:${RARITY_COLORS[fart.rarity]}">${fart.rarity}${countText}</div>
      ${ascensionText}
      ${adoptBtn}
      ${adoptedBadge}
    `;

    if (owned) {
      card.title = `${fart.name}\n${fart.title}\n"${fart.lore}"\nVol:${fart.stats.volume} Wet:${fart.stats.wetness} Dur:${fart.stats.duration} Regret:${fart.stats.regret}`;
    }

    grid.appendChild(card);
  });

  updateGachaUI();
}

// Banner timer countdown (fake, obviously)
function startBannerTimer() {
  let seconds = 4 * 86400 + 20 * 3600 + 69 * 60;
  setInterval(() => {
    seconds = Math.max(0, seconds - 1);
    const d = Math.floor(seconds / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    const el = document.getElementById('banner-timer');
    if (el) el.textContent = `BANNER ENDS IN: ${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
}

// ═══════════════════════════════════════════
//  MICROTRANSACTION ENGINE (peak satire)
// ═══════════════════════════════════════════

const SHOP_PACKAGES = [
  { coins: 500, bonus: 500, stink: 0, price: '$0.99', label: '1,000 GasCoins', firstBuy: true },
  { coins: 1000, bonus: 100, stink: 0, price: '$1.99', label: '1,100 GasCoins' },
  { coins: 5000, bonus: 1000, stink: 0, price: '$4.99', label: '6,000 GasCoins' },
  { coins: 25000, bonus: 10000, stink: 50, price: '$19.99', label: '35,000 GasCoins' },
  { coins: 100000, bonus: 69000, stink: 500, price: '$99.99', label: '169,000 GasCoins' },
];

const ShopState = {
  firstBuyClaimed: false,
  ftbClaimed: false,
  ftbActive: false,
  ftbSpinsRemaining: 0,
  purchaseCount: 0,
};

function openShop(reason) {
  document.getElementById('shop-insufficient').textContent = reason || 'INSUFFICIENT GASCOINS';
  document.getElementById('shop-main').style.display = 'block';
  document.getElementById('shop-processing').classList.remove('active');
  document.getElementById('shop-success').classList.remove('active');

  // Update first-buy badge
  const pkg0 = document.getElementById('shop-pkg-0');
  if (ShopState.firstBuyClaimed) {
    pkg0.className = 'shop-pkg';
  }

  document.getElementById('shop-overlay').classList.add('active');
  LogService.warn('MicrotransactionEngine: Shop modal triggered. Wallet vulnerability detected.');
  LogService.debug(`ShopState: purchaseCount=${ShopState.purchaseCount}, firstBuy=${!ShopState.firstBuyClaimed}`);
}

function closeShop() {
  document.getElementById('shop-overlay').classList.remove('active');
}

async function buyPackage(index) {
  const pkg = SHOP_PACKAGES[index];

  LogService.info(`MicrotransactionEngine: Processing purchase of ${pkg.label} (${pkg.price})...`);
  LogService.debug('PaymentGateway: Connecting to FartCoin blockchain...');

  // Hide main, show processing
  document.getElementById('shop-main').style.display = 'none';
  const proc = document.getElementById('shop-processing');
  proc.classList.add('active');

  // Fake processing steps
  const steps = [
    'Contacting GasCoin Blockchain...',
    'Verifying flatulence credentials...',
    'Processing payment through ButtPay\u2122...',
    'Converting fiat to GasCoins...',
    'Minting emission tokens...',
    'Validating sphincter signature...',
    'Depositing to OdorWallet...',
  ];

  for (const step of steps) {
    document.getElementById('proc-text').textContent = step;
    LogService.debug(`PaymentGateway: ${step}`);
    await sleep(400 + Math.random() * 300);
  }

  proc.classList.remove('active');

  // Calculate payout
  let totalCoins = pkg.coins + pkg.bonus;
  if (index === 0 && !ShopState.firstBuyClaimed) {
    totalCoins = pkg.coins + pkg.bonus; // Already doubled in the display
    ShopState.firstBuyClaimed = true;
  }

  // Apply rewards
  gameState.coins += totalCoins;
  GachaState.stinkTokens += pkg.stink;
  ShopState.purchaseCount++;
  updateUI();
  updateGachaUI();

  // Show success
  const success = document.getElementById('shop-success');
  document.getElementById('success-text').textContent = `+${totalCoins.toLocaleString()} GASCOINS`;
  document.getElementById('success-sub').textContent = pkg.stink > 0
    ? `Thank you for supporting independent flatulence research. +${pkg.stink} Stink Tokens.`
    : 'Thank you for supporting independent flatulence research.';
  success.classList.add('active');

  LogService.success(`PURCHASE COMPLETE: +${totalCoins.toLocaleString()} GasCoins deposited!`);
  if (pkg.stink > 0) LogService.success(`BONUS: +${pkg.stink} Stink Tokens`);

  AudioEngine.announce('win');
  screenFlash('rgba(57, 255, 20, 0.2)');
  spawnParticles(['\u{1F4B8}', '\u{1F4B0}', '\u{1FA99}'], 10);

  // Auto-close after 2 seconds
  await sleep(2000);
  closeShop();
}

// ═══════════════════════════════════════════
//  FIRST TIME BONUS
// ═══════════════════════════════════════════

function showFirstTimeBonus() {
  if (ShopState.ftbClaimed) return;
  document.getElementById('ftb-banner').classList.add('active');
  LogService.success('EVENT: First Time Double Odor Bonus available!');
  LogService.info('PromotionEngine: New player detected. Deploying welcome bribe.');
}

function claimFirstTimeBonus() {
  if (ShopState.ftbClaimed) return;
  ShopState.ftbClaimed = true;
  ShopState.ftbActive = true;
  ShopState.ftbSpinsRemaining = 10;

  gameState.coins += 500;
  updateUI();

  document.getElementById('ftb-banner').classList.remove('active');

  LogService.success('FIRST TIME BONUS CLAIMED: +500 GasCoins!');
  LogService.success('2X ODOR MULTIPLIER active for next 10 spins!');
  LogService.info('DopamineFeedbackController: Welcome injection administered.');
  AudioEngine.announce('jackpot');
  AudioEngine.speak('Welcome bonus claimed! Double odor activated!');
  screenFlash('rgba(57, 255, 20, 0.3)');
  spawnParticles(['\u2728', '\u{1FA99}', '\u{1F4A8}', '\u{1F389}'], 15);
}

function dismissFTB() {
  document.getElementById('ftb-banner').classList.remove('active');
  // It'll come back. They always come back.
  setTimeout(() => {
    if (!ShopState.ftbClaimed) {
      showFirstTimeBonus();
      LogService.warn('PromotionEngine: User dismissed FTB. Re-deploying. They WILL claim it.');
    }
  }, 30000);
}

// ═══════════════════════════════════════════
//  BATTLE PASS (SEASON 1: THE GREAT UNBOTTLING)
// ═══════════════════════════════════════════

/**
 * BattlePassManager - Seasonal progression framework with
 * dual-track reward pipelines (Free + Premium).
 *
 * XP Sources:
 *   Spin:        10 XP
 *   Win:         50 XP
 *   Big Win:    150 XP
 *   Jackpot:    500 XP
 *   Gacha Pull:  25 XP
 *   Event:      100 XP
 *
 * 30 Tiers. Premium costs 2,000 GasCoins.
 * Season never actually ends.
 */

const BP_TIERS = [
  // tier, xpNeeded, freeReward, premiumReward
  { tier: 1,  xp: 100,   free: { emoji: '\u{1FA99}', label: '50 Coins', type: 'coins', amount: 50 },         premium: { emoji: '\u{1FA99}', label: '200 Coins', type: 'coins', amount: 200 } },
  { tier: 2,  xp: 150,   free: { emoji: '\u{1F4A8}', label: 'Fart SFX: Squeaky', type: 'cosmetic', amount: 0 }, premium: { emoji: '\u{1F3AB}', label: '1 Gacha Pull', type: 'pull', amount: 1 } },
  { tier: 3,  xp: 200,   free: { emoji: '\u{1FA99}', label: '100 Coins', type: 'coins', amount: 100 },        premium: { emoji: '\u{1F49C}', label: '10 Stink Tokens', type: 'stink', amount: 10 } },
  { tier: 4,  xp: 250,   free: null,                                                                     premium: { emoji: '\u{1FA99}', label: '300 Coins', type: 'coins', amount: 300 } },
  { tier: 5,  xp: 350,   free: { emoji: '\u{1F3F7}\uFE0F', label: 'Title: Gas Cadet', type: 'title', amount: 0 },    premium: { emoji: '\u{1F3AB}', label: '3 Gacha Pulls', type: 'pull', amount: 3 } },
  { tier: 6,  xp: 400,   free: { emoji: '\u{1FA99}', label: '150 Coins', type: 'coins', amount: 150 },        premium: { emoji: '\u{1F49C}', label: '25 Stink Tokens', type: 'stink', amount: 25 } },
  { tier: 7,  xp: 500,   free: { emoji: '\u{1F4A8}', label: 'Profile: Dry Squeak', type: 'cosmetic', amount: 0 }, premium: { emoji: '\u{1FA99}', label: '500 Coins', type: 'coins', amount: 500 } },
  { tier: 8,  xp: 550,   free: null,                                                                     premium: { emoji: '\u{1F3AB}', label: '1 Gacha Pull', type: 'pull', amount: 1 } },
  { tier: 9,  xp: 650,   free: { emoji: '\u{1FA99}', label: '200 Coins', type: 'coins', amount: 200 },        premium: { emoji: '\u{1F49C}', label: '30 Stink Tokens', type: 'stink', amount: 30 } },
  { tier: 10, xp: 800,   free: { emoji: '\u{1F3F7}\uFE0F', label: 'Title: Odor Lieutenant', type: 'title', amount: 0 }, premium: { emoji: '\u2622\uFE0F', label: 'Emission: Green Cloud', type: 'cosmetic', amount: 0 } },
  { tier: 11, xp: 900,   free: { emoji: '\u{1FA99}', label: '250 Coins', type: 'coins', amount: 250 },        premium: { emoji: '\u{1FA99}', label: '750 Coins', type: 'coins', amount: 750 } },
  { tier: 12, xp: 1000,  free: null,                                                                     premium: { emoji: '\u{1F3AB}', label: '5 Gacha Pulls', type: 'pull', amount: 5 } },
  { tier: 13, xp: 1100,  free: { emoji: '\u{1F4A8}', label: 'SFX: Wet Reverb', type: 'cosmetic', amount: 0 },  premium: { emoji: '\u{1F49C}', label: '50 Stink Tokens', type: 'stink', amount: 50 } },
  { tier: 14, xp: 1200,  free: { emoji: '\u{1FA99}', label: '300 Coins', type: 'coins', amount: 300 },        premium: { emoji: '\u{1FA99}', label: '1000 Coins', type: 'coins', amount: 1000 } },
  { tier: 15, xp: 1400,  free: { emoji: '\u{1F3F7}\uFE0F', label: 'Title: Fart Captain', type: 'title', amount: 0 }, premium: { emoji: '\u{1F31F}', label: 'Pity -10', type: 'pity', amount: 10 } },
  { tier: 16, xp: 1500,  free: null,                                                                     premium: { emoji: '\u{1F49C}', label: '75 Stink Tokens', type: 'stink', amount: 75 } },
  { tier: 17, xp: 1700,  free: { emoji: '\u{1FA99}', label: '400 Coins', type: 'coins', amount: 400 },        premium: { emoji: '\u{1F3AB}', label: '3 Gacha Pulls', type: 'pull', amount: 3 } },
  { tier: 18, xp: 1900,  free: { emoji: '\u{1F4A8}', label: 'Profile: Thunderclap', type: 'cosmetic', amount: 0 }, premium: { emoji: '\u{1FA99}', label: '1500 Coins', type: 'coins', amount: 1500 } },
  { tier: 19, xp: 2100,  free: null,                                                                     premium: { emoji: '\u{1F49C}', label: '100 Stink Tokens', type: 'stink', amount: 100 } },
  { tier: 20, xp: 2400,  free: { emoji: '\u{1F3F7}\uFE0F', label: 'Title: Gas Commander', type: 'title', amount: 0 }, premium: { emoji: '\u2622\uFE0F', label: 'Aura: Toxic Glow', type: 'cosmetic', amount: 0 } },
  { tier: 21, xp: 2700,  free: { emoji: '\u{1FA99}', label: '500 Coins', type: 'coins', amount: 500 },        premium: { emoji: '\u{1F3AB}', label: '5 Gacha Pulls', type: 'pull', amount: 5 } },
  { tier: 22, xp: 3000,  free: null,                                                                     premium: { emoji: '\u{1FA99}', label: '2000 Coins', type: 'coins', amount: 2000 } },
  { tier: 23, xp: 3400,  free: { emoji: '\u{1F4A8}', label: 'SFX: Nuclear Bass', type: 'cosmetic', amount: 0 }, premium: { emoji: '\u{1F49C}', label: '150 Stink Tokens', type: 'stink', amount: 150 } },
  { tier: 24, xp: 3800,  free: { emoji: '\u{1FA99}', label: '750 Coins', type: 'coins', amount: 750 },        premium: { emoji: '\u{1F3AB}', label: '10 Gacha Pulls', type: 'pull', amount: 10 } },
  { tier: 25, xp: 4200,  free: { emoji: '\u{1F3F7}\uFE0F', label: 'Title: Emission Admiral', type: 'title', amount: 0 }, premium: { emoji: '\u{1F31F}', label: 'Pity -20', type: 'pity', amount: 20 } },
  { tier: 26, xp: 4800,  free: null,                                                                     premium: { emoji: '\u{1F49C}', label: '250 Stink Tokens', type: 'stink', amount: 250 } },
  { tier: 27, xp: 5500,  free: { emoji: '\u{1FA99}', label: '1000 Coins', type: 'coins', amount: 1000 },      premium: { emoji: '\u{1FA99}', label: '5000 Coins', type: 'coins', amount: 5000 } },
  { tier: 28, xp: 6200,  free: { emoji: '\u{1F4A8}', label: 'Profile: Supernova', type: 'cosmetic', amount: 0 }, premium: { emoji: '\u{1F3AB}', label: '10 Gacha Pulls', type: 'pull', amount: 10 } },
  { tier: 29, xp: 7000,  free: null,                                                                     premium: { emoji: '\u{1F49C}', label: '500 Stink Tokens', type: 'stink', amount: 500 } },
  { tier: 30, xp: 8000,  free: { emoji: '\u{1F3F7}\uFE0F', label: 'Title: LORD OF GAS', type: 'title', amount: 0 }, premium: { emoji: '\u{1F916}', label: 'FARTIMUS PRIME', type: 'guaranteed_mythic', amount: 0 } },
];

const BattlePassState = {
  xp: 0,
  tier: 0,          // 0 = haven't reached tier 1 yet
  isPremium: false,
  claimedFree: {},   // tier -> true
  claimedPremium: {},
};

const BattlePassEngine = {
  addXP(amount, source) {
    BattlePassState.xp += amount;
    LogService.debug(`BattlePassEngine: +${amount} XP (${source}) | Total: ${BattlePassState.xp}`);

    // Check for tier ups
    let tieredUp = false;
    while (BattlePassState.tier < BP_TIERS.length) {
      const nextTier = BP_TIERS[BattlePassState.tier];
      if (BattlePassState.xp >= nextTier.xp) {
        BattlePassState.xp -= nextTier.xp;
        BattlePassState.tier++;
        tieredUp = true;
        LogService.success(`TIER UP! Battle Pass Tier ${BattlePassState.tier} reached!`);

        // Auto-claim free reward
        this._claimReward(BattlePassState.tier, 'free');
        // Auto-claim premium if owned
        if (BattlePassState.isPremium) {
          this._claimReward(BattlePassState.tier, 'premium');
        }
      } else {
        break;
      }
    }

    if (tieredUp) {
      AudioEngine.announce('win');
      spawnParticles(['\u2B50', '\u{1F199}'], 6);
    }

    this.updateUI();
  },

  _claimReward(tier, track) {
    const tierData = BP_TIERS[tier - 1];
    const reward = track === 'free' ? tierData.free : tierData.premium;
    const claimedMap = track === 'free' ? BattlePassState.claimedFree : BattlePassState.claimedPremium;

    if (!reward || claimedMap[tier]) return;
    claimedMap[tier] = true;

    switch (reward.type) {
      case 'coins':
        gameState.coins += reward.amount;
        LogService.success(`BP REWARD (T${tier} ${track}): +${reward.amount} GasCoins`);
        break;
      case 'stink':
        GachaState.stinkTokens += reward.amount;
        LogService.success(`BP REWARD (T${tier} ${track}): +${reward.amount} Stink Tokens`);
        break;
      case 'pull':
        // Give coins equivalent (100 per pull)
        gameState.coins += reward.amount * 100;
        LogService.success(`BP REWARD (T${tier} ${track}): ${reward.amount} Gacha Pull(s) \u2192 +${reward.amount * 100} GasCoins`);
        break;
      case 'pity':
        GachaState.pity = Math.max(0, GachaState.pity - reward.amount);
        LogService.success(`BP REWARD (T${tier} ${track}): Pity reduced by ${reward.amount}!`);
        break;
      case 'guaranteed_mythic':
        // Give a mythic from the collection
        const mythics = FART_COLLECTION.filter(f => f.rarity === 'mythic');
        const pick = mythics[Math.floor(Math.random() * mythics.length)];
        if (!GachaState.collection[pick.id]) {
          GachaState.collection[pick.id] = { count: 1, ascension: 0, new: true };
        } else {
          GachaState.collection[pick.id].count++;
          GachaState.stinkTokens += 500;
        }
        LogService.success(`BP REWARD (T${tier} ${track}): GUARANTEED MYTHIC \u2014 ${pick.name}!!!`);
        AudioEngine.speak(`Battle Pass reward! Mythic fart acquired! ${pick.name}!`);
        screenFlash('rgba(255, 68, 204, 0.4)');
        spawnParticles([pick.emoji, '\u2B50', '\u2728'], 20);
        break;
      case 'title':
      case 'cosmetic':
        LogService.success(`BP REWARD (T${tier} ${track}): ${reward.label} (purely cosmetic, does nothing)`);
        break;
    }
    updateUI();
    updateGachaUI();
  },

  retroClaimPremium() {
    // When buying premium, claim all past premium rewards
    for (let t = 1; t <= BattlePassState.tier; t++) {
      if (!BattlePassState.claimedPremium[t]) {
        this._claimReward(t, 'premium');
      }
    }
  },

  updateUI() {
    const tier = BattlePassState.tier;
    const currentTierData = tier < BP_TIERS.length ? BP_TIERS[tier] : null;
    const xpNeeded = currentTierData ? currentTierData.xp : 9999;
    const xpPct = currentTierData ? Math.min(100, (BattlePassState.xp / xpNeeded) * 100) : 100;

    document.getElementById('bp-current-tier').textContent = Math.min(tier + 1, 30);
    document.getElementById('bp-xp-current').textContent = BattlePassState.xp;
    document.getElementById('bp-xp-needed').textContent = xpNeeded;
    document.getElementById('bp-xp-fill').style.width = xpPct + '%';

    // Premium bar
    const premBar = document.getElementById('bp-premium-bar');
    const premBtn = document.getElementById('bp-premium-btn');
    if (BattlePassState.isPremium) {
      premBar.classList.add('is-premium');
      premBtn.outerHTML = '<span class="bp-premium-status">PREMIUM ACTIVE</span>';
    }

    this.renderTrack();
  },

  renderTrack() {
    const track = document.getElementById('bp-track');
    if (!track) return;
    track.innerHTML = '';

    BP_TIERS.forEach((tierData, i) => {
      const tierNum = i + 1;
      const isUnlocked = BattlePassState.tier >= tierNum;
      const isCurrent = BattlePassState.tier === i; // currently working on this tier
      const tierEl = document.createElement('div');
      tierEl.className = `bp-tier${isUnlocked ? ' unlocked' : ''}${isCurrent ? ' current' : ''}`;

      // Premium reward (top)
      const premReward = tierData.premium;
      const premClaimed = BattlePassState.claimedPremium[tierNum];
      const premLocked = !BattlePassState.isPremium && !isUnlocked;
      const premUnlocked = isUnlocked && BattlePassState.isPremium;

      let premClass = 'bp-reward premium';
      if (premUnlocked && premClaimed) premClass += ' unlocked claimed';
      else if (premUnlocked) premClass += ' unlocked';
      else premClass += ' locked';

      const premLockIcon = !BattlePassState.isPremium ? '<span class="bp-r-lock">\u{1F512}</span>' : '';

      // Free reward (below dot)
      const freeReward = tierData.free;
      const freeClaimed = BattlePassState.claimedFree[tierNum];
      const freeUnlocked = isUnlocked;

      let freeClass = 'bp-reward free';
      if (freeUnlocked && freeClaimed) freeClass += ' unlocked claimed';
      else if (freeUnlocked) freeClass += ' unlocked';
      else freeClass += ' locked';

      tierEl.innerHTML = `
        <div class="${premClass}" title="${premReward ? premReward.label + ' (Premium)' : 'Empty'}">
          ${premReward ? `<span class="bp-r-emoji">${premReward.emoji}</span><span class="bp-r-amount">${premReward.label.split(' ').slice(0,2).join(' ')}</span>` : '<span class="bp-r-emoji" style="opacity:0.2">-</span>'}
          ${premLockIcon}
        </div>
        <div class="bp-tier-dot">${tierNum}</div>
        <div class="${freeClass}" title="${freeReward ? freeReward.label + ' (Free)' : 'Empty'}">
          ${freeReward ? `<span class="bp-r-emoji">${freeReward.emoji}</span><span class="bp-r-amount">${freeReward.label.split(' ').slice(0,2).join(' ')}</span>` : '<span class="bp-r-emoji" style="opacity:0.2">-</span>'}
        </div>
      `;

      track.appendChild(tierEl);
    });

    // Scroll to current tier
    const currentDot = track.querySelector('.bp-tier.current') || track.querySelector('.bp-tier.unlocked:last-child');
    if (currentDot) {
      currentDot.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }
};

function buyPremiumPass() {
  if (BattlePassState.isPremium) return;
  if (gameState.coins < 2000) {
    openShop('Not enough GasCoins for Premium Pass! Need 2,000.');
    return;
  }

  gameState.coins -= 2000;
  BattlePassState.isPremium = true;
  updateUI();

  LogService.success('PREMIUM BATTLE PASS PURCHASED!');
  LogService.info('BattlePassEngine: Unlocking all earned premium rewards retroactively...');
  AudioEngine.announce('jackpot');
  AudioEngine.speak('Premium Battle Pass activated! Welcome to the inner sphincter circle!');
  screenFlash('rgba(255, 170, 0, 0.3)');
  spawnParticles(['\u2B50', '\u{1F451}', '\u{1F3C6}', '\u{1F48E}'], 15);

  // Retroactively claim all earned premium rewards
  BattlePassEngine.retroClaimPremium();
  BattlePassEngine.updateUI();
}

// Season timer (never ends)
function startBPTimer() {
  let seconds = 29 * 86400 + 23 * 3600 + 59 * 60 + 59;
  setInterval(() => {
    seconds = Math.max(0, seconds - 1);
    if (seconds === 0) seconds = 30 * 86400; // lol it resets
    const d = Math.floor(seconds / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    const el = document.getElementById('bp-timer');
    if (el) el.textContent = `SEASON ENDS IN: ${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
}

// ═══════════════════════════════════════════════════════════════════
//  FART PET TAMAGOTCHI SYSTEM
//  Train your farts. Conquer bathrooms. Master the Taco Bell.
// ═══════════════════════════════════════════════════════════════════

const BATHROOM_LADDER = [
  { id: 'subway',      name: 'Subway',           emoji: '🥖', boss: 'The Footlong Phantom',     difficulty: 1,  volReq: 15,  wetReq: 5,   durReq: 1,   regReq: 10,  reward: 100,   unlockTitle: 'Sandwich Stinker',     lore: '"Eat fresh" they said. You ate. You released. The $5 footlong is now $0.' },
  { id: 'mcdonalds',   name: "McDonald's",       emoji: '🍟', boss: 'The McRipper',             difficulty: 2,  volReq: 25,  wetReq: 10,  durReq: 2,   regReq: 20,  reward: 200,   unlockTitle: 'Drive-Thru Devastator', lore: 'Ba da ba ba baaaa... I\'m lovin\' the smell of destruction in the morning.' },
  { id: 'burgerking',  name: 'Burger King',       emoji: '🍔', boss: 'The Whopper Whopper',      difficulty: 3,  volReq: 35,  wetReq: 15,  durReq: 3,   regReq: 25,  reward: 350,   unlockTitle: 'Flame-Broiled Bomber',  lore: 'Have it your way. YOUR way involves chemical warfare.' },
  { id: 'wendys',      name: "Wendy's",           emoji: '🥤', boss: 'The Baconator Blast',      difficulty: 4,  volReq: 45,  wetReq: 20,  durReq: 4,   regReq: 30,  reward: 500,   unlockTitle: 'Frosty Fumigator',      lore: 'Sir, this IS a Wendy\'s. And it will never be the same.' },
  { id: 'arbys',       name: "Arby's",            emoji: '🥩', boss: 'The Meat Mountain Miasma', difficulty: 5,  volReq: 55,  wetReq: 30,  durReq: 5,   regReq: 40,  reward: 750,   unlockTitle: 'Curly Fry Contaminator', lore: 'We have the meats. You have the gas. An unholy alliance.' },
  { id: 'kfc',         name: 'KFC',               emoji: '🍗', boss: 'The Colonel\'s Curse',     difficulty: 6,  volReq: 65,  wetReq: 35,  durReq: 7,   regReq: 50,  reward: 1000,  unlockTitle: 'Bucket Blaster',        lore: '11 herbs, 11 spices, 1 devastating emission. The Colonel spins in his grave.' },
  { id: 'fiveguys',    name: 'Five Guys',          emoji: '🥜', boss: 'The Cajun Catastrophe',   difficulty: 7,  volReq: 75,  wetReq: 40,  durReq: 8,   regReq: 55,  reward: 1500,  unlockTitle: 'Peanut Polluter',       lore: 'All those free peanuts were a trap. Your body is now a weapon of mass destruction.' },
  { id: 'chipotle',    name: 'Chipotle',           emoji: '🌯', boss: 'The Burrito Bomb',        difficulty: 8,  volReq: 82,  wetReq: 50,  durReq: 10,  regReq: 65,  reward: 2000,  unlockTitle: 'Guac Guardian',         lore: 'Extra guac was extra. Extra everything. Your bowels signed a peace treaty and immediately violated it.' },
  { id: 'whitecastle', name: 'White Castle',       emoji: '🏰', boss: 'The Slider Siege Engine', difficulty: 9,  volReq: 90,  wetReq: 60,  durReq: 12,  regReq: 75,  reward: 3000,  unlockTitle: 'Crave Case Criminal',   lore: '30 sliders at 2 AM. Harold and Kumar had NOTHING on this bathroom visit.' },
  { id: 'tacobell',    name: 'Taco Bell',          emoji: '🌮', boss: 'THE CHALUPA OVERLORD',    difficulty: 10, volReq: 100, wetReq: 69,  durReq: 15,  regReq: 100, reward: 10000, unlockTitle: 'LORD OF THE BELL',      lore: 'The final boss. The ultimate bathroom. You didn\'t just Live Mas — you DESTROYED Mas. The Baja Blast flows through you now. You are one with the sauce. The toilet will never recover.' },
];

const PET_FOODS = [
  { id: 'bean_burrito',   name: 'Bean Burrito',        emoji: '🌯', cost: 50,   statBoost: 'volume',   amount: 2,  mood: 5,   lore: 'The foundational training food. Reliable. Predictable. Gassy.' },
  { id: 'dairy_shake',    name: 'Dairy Shake',         emoji: '🥛', cost: 75,   statBoost: 'wetness',  amount: 3,  mood: 3,   lore: 'Lactose is just a suggestion. Your fart disagrees.' },
  { id: 'fiber_bar',      name: 'Fiber Bar',           emoji: '🥖', cost: 60,   statBoost: 'duration', amount: 2,  mood: -2,  lore: 'Healthy AND weaponizable. Win-win.' },
  { id: 'ghost_pepper',   name: 'Ghost Pepper',        emoji: '🌶️', cost: 120,  statBoost: 'volume',   amount: 5,  mood: -10, lore: 'Your fart will cry. YOU will cry. Everyone will cry.' },
  { id: 'sugar_free',     name: 'Sugar-Free Gummy',    emoji: '🍬', cost: 100,  statBoost: 'wetness',  amount: 5,  mood: -5,  lore: 'Read the Amazon reviews. You were warned.' },
  { id: 'kombucha',       name: 'Artisanal Kombucha',  emoji: '🍵', cost: 90,   statBoost: 'duration', amount: 4,  mood: 8,   lore: 'Probiotics working overtime. Your gut flora is having a rave.' },
  { id: 'protein_shake',  name: 'Mega Protein Shake',  emoji: '💪', cost: 150,  statBoost: 'regret',   amount: 5,  mood: 2,   lore: '80g protein. 0g mercy. The gains are gaseous now.' },
  { id: 'taco_supreme',   name: 'Taco Supreme',        emoji: '🌮', cost: 200,  statBoost: 'all',      amount: 2,  mood: 10,  lore: 'The chosen food. Boosts ALL stats. Your fart achieves brief enlightenment.' },
];

const PET_TRAINING = [
  { id: 'squat',      name: 'Squat & Squeeze',    emoji: '🏋️', cost: 30,  statBoost: 'volume',   amount: 1, cooldown: 10000,  lore: 'Core pressure training. Builds explosive force.' },
  { id: 'sauna',      name: 'Sauna Session',       emoji: '🧖', cost: 40,  statBoost: 'wetness',  amount: 1, cooldown: 15000,  lore: 'Heat and humidity conditioning. Moisture mastery.' },
  { id: 'meditation', name: 'Gas Meditation',       emoji: '🧘', cost: 25,  statBoost: 'duration', amount: 1, cooldown: 8000,   lore: 'Breathe in... hold... slowly release. The art of sustained emission.' },
  { id: 'spicy_roulette', name: 'Spicy Roulette',   emoji: '🎰', cost: 80,  statBoost: 'random',   amount: 3, cooldown: 30000,  lore: 'Eat something random and see what happens. High risk, high reward.' },
  { id: 'elevator_drill', name: 'Elevator Drill',   emoji: '🛗', cost: 60,  statBoost: 'regret',   amount: 2, cooldown: 20000,  lore: 'Practice deploying in enclosed spaces. Builds character and regret.' },
];

// ═══ GEAR EVOLUTION SYSTEM ═══
// Farts shift octaves as they evolve. Based on real-life fart physics.
// Brad has personally hit 4th gear exactly once. Supersonic is theoretical.
const GEARS = [
  { gear: 1, name: '1st Gear',             emoji: '💨',  label: 'BASE TONE',           statMult: 1.0,  levelReq: 1,  powerReq: 0,    color: '#888888', lore: 'The default hum. Every fart starts here. Humble beginnings.' },
  { gear: 2, name: '2nd Gear',             emoji: '💨💨', label: 'OCTAVE SHIFT',         statMult: 1.4,  levelReq: 5,  powerReq: 60,   color: '#39ff14', lore: 'The fart finds a second voice. A harmonic emerges. People notice.' },
  { gear: 3, name: '3rd Gear',             emoji: '💨💨💨', label: 'TRIPLE HARMONIC',    statMult: 1.8,  levelReq: 12, powerReq: 150,  color: '#4488ff', lore: 'Extremely rare territory. Most farts never get here. The room clears. Dogs howl. Car alarms trigger.' },
  { gear: 4, name: '4th Gear',             emoji: '💨💨💨💨', label: 'LEGENDARY OCTAVE', statMult: 2.5,  levelReq: 20, powerReq: 300,  color: '#ffaa00', lore: 'You\'ve done this once in your entire life. The fart transcends the physical plane. Witnesses require therapy.' },
  { gear: 5, name: 'SUPERSONIC EMISSION',  emoji: '🔊💥', label: 'BEYOND SOUND',        statMult: 4.0,  levelReq: 30, powerReq: 500,  color: '#ff44cc', lore: 'The fart breaks the sound barrier. A sonic boom of flatulence. Windows shatter. Seismographs spike globally. Scientists weep. God flinches. This is the most powerful emission in recorded human history.' },
];

const PET_MOODS = [
  { min: 80, name: 'EUPHORIC',    emoji: '🤩', bonus: 1.5,  desc: 'Your fart is THRIVING. Peak performance.' },
  { min: 60, name: 'HAPPY',       emoji: '😊', bonus: 1.2,  desc: 'Content and gassy. Good vibes only.' },
  { min: 40, name: 'NEUTRAL',     emoji: '😐', bonus: 1.0,  desc: 'Fine. Not great, not terrible. Like Chernobyl.' },
  { min: 20, name: 'GRUMPY',      emoji: '😤', bonus: 0.8,  desc: 'Irritable bowel syndrome. Literally.' },
  { min: 0,  name: 'DEPRESSED',   emoji: '😢', bonus: 0.5,  desc: 'Your fart has lost the will to emit. Feed it immediately.' },
];

const PetState = {
  activePetId: null,     // id from FART_COLLECTION (e.g., 'c01')
  pets: {},              // fartId -> { level, xp, mood, trainedStats: {volume, wetness, duration, regret}, lastFed, lastTrained, bathroomsConquered: [], evolvedForm: null }
  highestBathroom: -1,   // index into BATHROOM_LADDER (-1 = none conquered)
  totalBattles: 0,
  totalWins: 0,
};

const PetEngine = {
  adoptPet(fartId) {
    if (PetState.pets[fartId]) {
      LogService.warn(`PetEngine: ${fartId} already adopted!`);
      return;
    }
    const fart = FART_COLLECTION.find(f => f.id === fartId);
    if (!fart) return;

    const rarityBonus = { common: 0, uncommon: 2, rare: 5, epic: 10, legendary: 20, mythic: 50 };
    const bonus = rarityBonus[fart.rarity] || 0;

    PetState.pets[fartId] = {
      level: 1,
      xp: 0,
      mood: 60,
      gear: 1,
      trainedStats: {
        volume: Math.floor(fart.stats.volume / 10) + bonus,
        wetness: Math.floor(fart.stats.wetness / 10) + bonus,
        duration: Math.floor(Math.min(fart.stats.duration, 100) / 10) + bonus,
        regret: Math.floor(fart.stats.regret / 10) + bonus,
      },
      lastFed: Date.now(),
      lastTrained: 0,
      bathroomsConquered: [],
      title: null,
    };

    if (!PetState.activePetId) PetState.activePetId = fartId;
    LogService.success(`PetEngine: ${fart.name} adopted! Base power: ${this.getPower(fartId)}`);
    this.updateUI();
  },

  getPetFart(fartId) {
    return FART_COLLECTION.find(f => f.id === fartId);
  },

  getActivePet() {
    if (!PetState.activePetId) return null;
    return { id: PetState.activePetId, pet: PetState.pets[PetState.activePetId], fart: this.getPetFart(PetState.activePetId) };
  },

  getMood(fartId) {
    const pet = PetState.pets[fartId];
    if (!pet) return PET_MOODS[PET_MOODS.length - 1];
    // Mood decays over time (lose 1 mood per 2 minutes of real time)
    const elapsed = (Date.now() - pet.lastFed) / 120000;
    pet.mood = Math.max(0, Math.min(100, pet.mood - Math.floor(elapsed) * 0.5));
    return PET_MOODS.find(m => pet.mood >= m.min) || PET_MOODS[PET_MOODS.length - 1];
  },

  getPower(fartId) {
    const pet = PetState.pets[fartId];
    if (!pet) return 0;
    const s = pet.trainedStats;
    return Math.floor(s.volume + s.wetness + s.duration + s.regret);
  },

  getGear(fartId) {
    const pet = PetState.pets[fartId];
    if (!pet) return GEARS[0];
    return GEARS[pet.gear - 1] || GEARS[0];
  },

  getEffectiveStats(fartId) {
    const pet = PetState.pets[fartId];
    if (!pet) return { volume: 0, wetness: 0, duration: 0, regret: 0 };
    const mood = this.getMood(fartId);
    const gear = this.getGear(fartId);
    const s = pet.trainedStats;
    return {
      volume: Math.floor(s.volume * mood.bonus * gear.statMult),
      wetness: Math.floor(s.wetness * mood.bonus * gear.statMult),
      duration: Math.floor(s.duration * mood.bonus * gear.statMult),
      regret: Math.floor(s.regret * mood.bonus * gear.statMult),
    };
  },

  feedPet(foodId) {
    const active = this.getActivePet();
    if (!active) { LogService.warn('PetEngine: No active pet!'); return; }

    const food = PET_FOODS.find(f => f.id === foodId);
    if (!food) return;
    if (gameState.coins < food.cost) {
      LogService.warn(`PetEngine: Not enough GasCoins! Need ${food.cost}`);
      return;
    }

    gameState.coins -= food.cost;
    const pet = active.pet;

    if (food.statBoost === 'all') {
      pet.trainedStats.volume += food.amount;
      pet.trainedStats.wetness += food.amount;
      pet.trainedStats.duration += food.amount;
      pet.trainedStats.regret += food.amount;
    } else {
      pet.trainedStats[food.statBoost] += food.amount;
    }

    pet.mood = Math.min(100, pet.mood + food.mood);
    pet.lastFed = Date.now();
    pet.xp += 10;
    this._checkLevelUp(active.id);

    LogService.info(`PetEngine: Fed ${active.fart.name} a ${food.name}! +${food.amount} ${food.statBoost} | Mood: ${pet.mood}`);
    AudioEngine.fart('normal');
    updateUI();
    this.updateUI();
  },

  trainPet(trainingId) {
    const active = this.getActivePet();
    if (!active) { LogService.warn('PetEngine: No active pet!'); return; }

    const training = PET_TRAINING.find(t => t.id === trainingId);
    if (!training) return;
    if (gameState.coins < training.cost) {
      LogService.warn(`PetEngine: Not enough GasCoins! Need ${training.cost}`);
      return;
    }

    const now = Date.now();
    if (now - active.pet.lastTrained < training.cooldown) {
      const remaining = Math.ceil((training.cooldown - (now - active.pet.lastTrained)) / 1000);
      LogService.warn(`PetEngine: ${active.fart.name} is still recovering! ${remaining}s remaining`);
      return;
    }

    gameState.coins -= training.cost;
    const pet = active.pet;

    if (training.statBoost === 'random') {
      const stats = ['volume', 'wetness', 'duration', 'regret'];
      const stat = stats[Math.floor(Math.random() * stats.length)];
      pet.trainedStats[stat] += training.amount;
      LogService.info(`PetEngine: Spicy Roulette! +${training.amount} ${stat}!`);
    } else {
      pet.trainedStats[training.statBoost] += training.amount;
    }

    pet.lastTrained = now;
    pet.xp += 15;
    this._checkLevelUp(active.id);

    LogService.info(`PetEngine: ${active.fart.name} completed ${training.name}! Power: ${this.getPower(active.id)}`);
    AudioEngine.fart('normal');
    updateUI();
    this.updateUI();
  },

  _checkLevelUp(fartId) {
    const pet = PetState.pets[fartId];
    const fart = this.getPetFart(fartId);
    const xpNeeded = pet.level * 50;
    while (pet.xp >= xpNeeded) {
      pet.xp -= xpNeeded;
      pet.level++;
      pet.trainedStats.volume += 1;
      pet.trainedStats.wetness += 1;
      pet.trainedStats.duration += 1;
      pet.trainedStats.regret += 1;
      LogService.success(`PetEngine: ${fart.name} leveled up to Lv.${pet.level}!`);
      AudioEngine.announce('win');
      spawnParticles([fart.emoji, '⬆️', '💪'], 8);
    }
    // Check for gear evolution
    this._checkGearShift(fartId);
  },

  _checkGearShift(fartId) {
    const pet = PetState.pets[fartId];
    const fart = this.getPetFart(fartId);
    const power = this.getPower(fartId);
    const nextGearIndex = pet.gear; // 0-indexed into GEARS for the NEXT gear
    if (nextGearIndex >= GEARS.length) return; // already at max

    const nextGear = GEARS[nextGearIndex];
    if (pet.level >= nextGear.levelReq && power >= nextGear.powerReq) {
      pet.gear = nextGear.gear;
      const gearData = nextGear;

      LogService.success('═══════════════════════════════════════');
      LogService.success(`GEAR SHIFT! ${fart.name} has evolved!`);
      LogService.success(`${GEARS[nextGearIndex - 1].name} → ${gearData.name}`);
      LogService.success(`"${gearData.lore}"`);
      LogService.success(`Stat multiplier: ${gearData.statMult}x`);
      if (gearData.gear === 2) LogService.info('Frequency split detected — dual-tone emission confirmed');
      if (gearData.gear === 3) LogService.warn('Harmonic instability rising — triple resonance cascade in progress');
      if (gearData.gear === 4) LogService.warn('CRITICAL: Acoustic threshold exceeded — decibel sensors maxed');
      if (gearData.gear === 5) LogService.warn('ERROR: Measurement impossible — all instruments destroyed by emission');
      LogService.success('═══════════════════════════════════════');

      if (gearData.gear >= 4) {
        AudioEngine.fart('jackpot');
        AudioEngine.announce('jackpot');
        screenFlash('rgba(255, 68, 204, 0.5)');
        spawnParticles([gearData.emoji, '🔥', '⚡', '💥', fart.emoji], 30);
      } else if (gearData.gear >= 3) {
        AudioEngine.fart('jackpot');
        AudioEngine.announce('jackpot');
        screenFlash('rgba(255, 170, 0, 0.4)');
        spawnParticles([gearData.emoji, '⬆️', '🔥', fart.emoji], 20);
      } else {
        AudioEngine.fart('win');
        AudioEngine.announce('win');
        screenFlash('rgba(57, 255, 20, 0.3)');
        spawnParticles([gearData.emoji, '⬆️', fart.emoji], 12);
      }

      if (gearData.gear === 5) {
        AudioEngine.speak('SUPERSONIC EMISSION ACHIEVED! THE FART HAS BROKEN THE SOUND BARRIER! THIS IS NOT A DRILL!');
        BattlePassEngine.addXP(2000, 'SUPERSONIC EMISSION');
      } else if (gearData.gear === 4) {
        AudioEngine.speak(`FOURTH GEAR! ${fart.name} HAS REACHED LEGENDARY OCTAVE! WITNESSES REQUIRE THERAPY!`);
        BattlePassEngine.addXP(1000, '4th Gear Evolution');
      } else if (gearData.gear === 3) {
        AudioEngine.speak(`THIRD GEAR! ${fart.name} HAS HIT TRIPLE HARMONIC!`);
        BattlePassEngine.addXP(500, '3rd Gear Evolution');
      } else {
        AudioEngine.speak(`${fart.name} shifted to ${gearData.name}!`);
        BattlePassEngine.addXP(200, '2nd Gear Evolution');
      }
    }
  },

  attemptBathroom(bathroomIndex) {
    const active = this.getActivePet();
    if (!active) { LogService.warn('PetEngine: No active pet to send into battle!'); return; }

    const bathroom = BATHROOM_LADDER[bathroomIndex];
    if (!bathroom) return;

    // Must conquer in order
    if (bathroomIndex > 0 && !active.pet.bathroomsConquered.includes(BATHROOM_LADDER[bathroomIndex - 1].id)) {
      LogService.warn(`PetEngine: Must conquer ${BATHROOM_LADDER[bathroomIndex - 1].name} first!`);
      return;
    }

    // Already conquered?
    if (active.pet.bathroomsConquered.includes(bathroom.id)) {
      LogService.info(`PetEngine: ${active.fart.name} already conquered ${bathroom.name}!`);
      return;
    }

    PetState.totalBattles++;
    const stats = this.getEffectiveStats(active.id);

    // Calculate success — each stat must meet the requirement
    const volPass = stats.volume >= bathroom.volReq;
    const wetPass = stats.wetness >= bathroom.wetReq;
    const durPass = stats.duration >= bathroom.durReq;
    const regPass = stats.regret >= bathroom.regReq;
    const allPass = volPass && wetPass && durPass && regPass;

    // Even if you meet reqs, there's a dice roll element (higher power = better odds)
    const totalPower = stats.volume + stats.wetness + stats.duration + stats.regret;
    const totalReq = bathroom.volReq + bathroom.wetReq + bathroom.durReq + bathroom.regReq;
    const powerRatio = totalPower / totalReq;
    const rollChance = allPass ? Math.min(0.95, 0.5 + (powerRatio - 1) * 0.3) : Math.min(0.15, powerRatio * 0.1);
    const roll = Math.random();
    const won = roll < rollChance;

    LogService.info(`PetEngine: BATHROOM BATTLE — ${active.fart.name} vs ${bathroom.name} "${bathroom.boss}"`);
    LogService.debug(`PetEngine: Stats: VOL=${stats.volume}/${bathroom.volReq} WET=${stats.wetness}/${bathroom.wetReq} DUR=${stats.duration}/${bathroom.durReq} REG=${stats.regret}/${bathroom.regReq}`);
    LogService.debug(`PetEngine: Power ratio: ${powerRatio.toFixed(2)} | Roll: ${roll.toFixed(3)} < ${rollChance.toFixed(3)} = ${won}`);

    if (won) {
      PetState.totalWins++;
      active.pet.bathroomsConquered.push(bathroom.id);
      active.pet.xp += bathroom.difficulty * 20;
      active.pet.title = bathroom.unlockTitle;
      gameState.coins += bathroom.reward;
      if (bathroomIndex > PetState.highestBathroom) PetState.highestBathroom = bathroomIndex;

      this._checkLevelUp(active.id);

      LogService.success(`BATHROOM CONQUERED! ${active.fart.name} defeated ${bathroom.boss} at ${bathroom.name}!`);
      LogService.success(`Earned: ${bathroom.reward} GasCoins | Title: "${bathroom.unlockTitle}"`);

      AudioEngine.fart(bathroomIndex >= 8 ? 'jackpot' : 'win');
      AudioEngine.announce(bathroomIndex >= 8 ? 'jackpot' : 'win');
      screenFlash(bathroomIndex >= 7 ? 'rgba(255, 68, 204, 0.3)' : 'rgba(57, 255, 20, 0.2)');
      spawnParticles([bathroom.emoji, '🏆', '💨', active.fart.emoji], bathroomIndex >= 8 ? 25 : 12);

      if (bathroomIndex === 9) {
        // TACO BELL CONQUERED
        const lordsCount = this._countLordsOfTheBell();
        const totalPets = Object.keys(PetState.pets).length;
        LogService.success('═══════════════════════════════════════');
        LogService.success('THE TACO BELL HAS BEEN MASTERED.');
        LogService.success(`${active.fart.name} IS NOW LORD OF THE BELL.`);
        LogService.success(`LORDS OF THE BELL: ${lordsCount} / ${totalPets} adopted farts`);
        LogService.success('═══════════════════════════════════════');
        AudioEngine.speak('LORD OF THE BELL! THE TACO BELL HAS BEEN MASTERED! ALL BATHROOMS BOW BEFORE YOU!');
        screenFlash('rgba(255, 204, 0, 0.5)');

        // Check for TRUE ENDING — all adopted farts have conquered the Bell
        if (lordsCount === totalPets && totalPets > 1) {
          setTimeout(() => this._trueEnding(totalPets), 2000);
        }
      } else {
        AudioEngine.speak(`${bathroom.name} conquered! ${active.fart.name} earned the title ${bathroom.unlockTitle}!`);
      }

      // Battle Pass XP for bathroom conquests
      BattlePassEngine.addXP(bathroom.difficulty * 50, `Bathroom: ${bathroom.name}`);
    } else {
      active.pet.mood = Math.max(0, active.pet.mood - 10);
      active.pet.xp += 5; // consolation XP
      LogService.warn(`DEFEATED! ${active.fart.name} couldn't handle ${bathroom.name}. ${bathroom.boss} wins!`);
      LogService.info(`PetEngine: Train harder! Need more ${!volPass ? 'VOLUME ' : ''}${!wetPass ? 'WETNESS ' : ''}${!durPass ? 'DURATION ' : ''}${!regPass ? 'REGRET ' : ''}`);
      AudioEngine.fart('normal');
    }

    updateUI();
    this.updateUI();
  },

  _countLordsOfTheBell() {
    return Object.values(PetState.pets).filter(p => p.bathroomsConquered.includes('tacobell')).length;
  },

  _trueEnding(totalPets) {
    LogService.success('');
    LogService.success('╔══════════════════════════════════════════════════════════════╗');
    LogService.success('║                                                              ║');
    LogService.success('║              T R U E   E N D I N G   A C H I E V E D         ║');
    LogService.success('║                                                              ║');
    LogService.success(`║       ALL ${totalPets} FARTS HAVE CONQUERED THE TACO BELL.          ║`);
    LogService.success('║                                                              ║');
    LogService.success('║   You are no longer a player. You are a LEGEND.              ║');
    LogService.success('║   Every toilet in every fast food restaurant in America       ║');
    LogService.success('║   trembles at the mention of your name.                      ║');
    LogService.success('║                                                              ║');
    LogService.success('║   The CDC has been notified.                                 ║');
    LogService.success('║   The Geneva Convention has been amended.                    ║');
    LogService.success('║   Your LinkedIn now simply reads: "LORD OF ALL BELLS."       ║');
    LogService.success('║                                                              ║');
    LogService.success('╚══════════════════════════════════════════════════════════════╝');
    LogService.success('');

    AudioEngine.fart('jackpot');
    AudioEngine.announce('jackpot');
    AudioEngine.speak(`TRUE ENDING! ALL ${totalPets} FARTS HAVE MASTERED THE TACO BELL! YOU ARE THE LORD OF ALL BELLS! THE CDC HAS BEEN NOTIFIED!`);
    screenFlash('rgba(255, 204, 0, 0.6)');
    setTimeout(() => screenFlash('rgba(255, 68, 204, 0.5)'), 500);
    setTimeout(() => screenFlash('rgba(57, 255, 20, 0.5)'), 1000);
    spawnParticles(['🏆', '👑', '🌮', '💨', '🔔', '⭐', '💥', '🔥'], 50);
    BattlePassEngine.addXP(10000, 'TRUE ENDING: LORD OF ALL BELLS');
  },

  selectPet(fartId) {
    if (!PetState.pets[fartId]) {
      LogService.warn('PetEngine: That fart is not adopted!');
      return;
    }
    PetState.activePetId = fartId;
    LogService.info(`PetEngine: Active pet changed to ${this.getPetFart(fartId).name}`);
    this.updateUI();
  },

  updateUI() {
    const petTab = document.getElementById('tab-pets');
    if (!petTab) return;

    const active = this.getActivePet();
    const petView = document.getElementById('pet-view');
    const bathroomView = document.getElementById('bathroom-ladder');

    if (!active) {
      if (petView) petView.innerHTML = `
        <div class="pet-empty">
          <div class="pet-empty-emoji">🥚</div>
          <div class="pet-empty-text">NO ACTIVE PET</div>
          <div class="pet-empty-sub">Pull a fart from the Gacha, then adopt it from the Fartdex!</div>
        </div>`;
      return;
    }

    const fart = active.fart;
    const pet = active.pet;
    const mood = this.getMood(active.id);
    const gear = this.getGear(active.id);
    const power = this.getPower(active.id);
    const stats = this.getEffectiveStats(active.id);
    const xpNeeded = pet.level * 50;
    const xpPct = Math.min(100, (pet.xp / xpNeeded) * 100);
    const nextGear = pet.gear < GEARS.length ? GEARS[pet.gear] : null;

    if (petView) {
      petView.innerHTML = `
        <div class="pet-card">
          <div class="pet-header">
            <div class="pet-emoji">${fart.emoji}</div>
            <div class="pet-info">
              <div class="pet-name">${fart.name}</div>
              <div class="pet-title" style="color:${RARITY_COLORS[fart.rarity]}">${pet.title || fart.title}</div>
              <div class="pet-level">Lv.${pet.level} <span class="pet-rarity" style="color:${RARITY_COLORS[fart.rarity]}">${fart.rarity.toUpperCase()}</span></div>
            </div>
            <div class="pet-mood">
              <div class="pet-mood-emoji">${mood.emoji}</div>
              <div class="pet-mood-name">${mood.name}</div>
            </div>
          </div>

          <div class="pet-gear-display" style="border-color:${gear.color}">
            <div class="pet-gear-label" style="color:${gear.color}">${gear.emoji} ${gear.name}</div>
            <div class="pet-gear-sub">${gear.label} &mdash; ${gear.statMult}x STATS</div>
            ${nextGear ? `<div class="pet-gear-next">Next: ${nextGear.name} (Lv.${nextGear.levelReq} / ${nextGear.powerReq} PWR)</div>` : '<div class="pet-gear-next pet-gear-max">MAXIMUM EVOLUTION ACHIEVED</div>'}
          </div>

          <div class="pet-xp-bar">
            <div class="pet-xp-fill" style="width:${xpPct}%"></div>
            <span class="pet-xp-text">${pet.xp}/${xpNeeded} XP</span>
          </div>
          <div class="pet-stats">
            <div class="pet-stat"><span class="ps-icon">🔊</span><span class="ps-label">VOL</span><span class="ps-value">${stats.volume}</span></div>
            <div class="pet-stat"><span class="ps-icon">💧</span><span class="ps-label">WET</span><span class="ps-value">${stats.wetness}</span></div>
            <div class="pet-stat"><span class="ps-icon">⏱️</span><span class="ps-label">DUR</span><span class="ps-value">${stats.duration}</span></div>
            <div class="pet-stat"><span class="ps-icon">😬</span><span class="ps-label">REG</span><span class="ps-value">${stats.regret}</span></div>
            <div class="pet-stat power"><span class="ps-icon">⚡</span><span class="ps-label">PWR</span><span class="ps-value">${power}</span></div>
          </div>
          ${mood.bonus !== 1.0 ? `<div class="pet-mood-bonus">${mood.bonus > 1 ? '↑' : '↓'} Mood ${mood.bonus > 1 ? 'Boost' : 'Penalty'}: ${mood.bonus}x stats</div>` : ''}
        </div>

        <div class="pet-actions">
          <div class="pet-section-title">FEED</div>
          <div class="pet-food-grid">
            ${PET_FOODS.map(f => `
              <button class="pet-food-btn" onclick="PetEngine.feedPet('${f.id}')" title="${f.lore}">
                <span class="pf-emoji">${f.emoji}</span>
                <span class="pf-name">${f.name}</span>
                <span class="pf-effect">+${f.amount} ${f.statBoost === 'all' ? 'ALL' : f.statBoost.toUpperCase()}</span>
                <span class="pf-cost">${f.cost} GC</span>
              </button>
            `).join('')}
          </div>

          <div class="pet-section-title">TRAIN</div>
          <div class="pet-train-grid">
            ${PET_TRAINING.map(t => {
              const onCooldown = active.pet.lastTrained && (Date.now() - active.pet.lastTrained < t.cooldown);
              return `
                <button class="pet-train-btn${onCooldown ? ' cooldown' : ''}" onclick="PetEngine.trainPet('${t.id}')" title="${t.lore}" ${onCooldown ? 'disabled' : ''}>
                  <span class="pt-emoji">${t.emoji}</span>
                  <span class="pt-name">${t.name}</span>
                  <span class="pt-effect">+${t.amount} ${t.statBoost === 'random' ? 'RANDOM' : t.statBoost.toUpperCase()}</span>
                  <span class="pt-cost">${t.cost} GC</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="pet-roster-title">YOUR FART ROSTER</div>
        <div class="pet-roster">
          ${Object.keys(PetState.pets).map(id => {
            const f = this.getPetFart(id);
            const p = PetState.pets[id];
            const isActive = id === PetState.activePetId;
            const g = GEARS[p.gear - 1];
            return `<button class="pet-roster-btn${isActive ? ' active' : ''}" onclick="PetEngine.selectPet('${id}')" title="${f.name} Lv.${p.level} — ${g.name}">
              <span>${f.emoji}</span>
              <span class="pr-level">Lv.${p.level}</span>
              <span class="pr-gear" style="color:${g.color}">G${p.gear}</span>
            </button>`;
          }).join('')}
        </div>
      `;
    }

    // Lords of the Bell tracker
    const lordsEl = document.getElementById('bathroom-lords');
    if (lordsEl) {
      const totalPets = Object.keys(PetState.pets).length;
      const lords = this._countLordsOfTheBell();
      const allCleared = lords === totalPets && totalPets > 0;
      lordsEl.innerHTML = totalPets > 0 ? `
        <div class="lords-tracker${allCleared ? ' all-cleared' : ''}">
          <span class="lords-icon">${allCleared ? '👑' : '🌮'}</span>
          <span class="lords-label">LORDS OF THE BELL</span>
          <span class="lords-count">${lords} / ${totalPets}</span>
          ${allCleared ? '<span class="lords-complete">TRUE ENDING ACHIEVED</span>' : ''}
        </div>
      ` : '';
    }

    // Bathroom ladder
    if (bathroomView) {
      bathroomView.innerHTML = BATHROOM_LADDER.map((b, i) => {
        const conquered = active.pet.bathroomsConquered.includes(b.id);
        const canAttempt = i === 0 || active.pet.bathroomsConquered.includes(BATHROOM_LADDER[i - 1].id);
        const locked = !canAttempt && !conquered;
        return `
          <div class="bathroom-tier${conquered ? ' conquered' : ''}${locked ? ' locked' : ''}">
            <div class="bt-rank">#${i + 1}</div>
            <div class="bt-emoji">${conquered ? '✅' : locked ? '🔒' : b.emoji}</div>
            <div class="bt-info">
              <div class="bt-name">${b.name}</div>
              <div class="bt-boss">${b.boss}</div>
              <div class="bt-reqs">VOL:${b.volReq} WET:${b.wetReq} DUR:${b.durReq} REG:${b.regReq}</div>
            </div>
            <div class="bt-reward">${b.reward} GC</div>
            ${!conquered && canAttempt ? `<button class="bt-fight-btn" onclick="PetEngine.attemptBathroom(${i})">FIGHT</button>` : ''}
            ${conquered ? `<div class="bt-conquered-title">${b.unlockTitle}</div>` : ''}
          </div>
        `;
      }).join('');
    }
  },
};

// Hook into gacha: auto-adopt pulled farts
function adoptFromFartdex(fartId) {
  if (!GachaState.collection[fartId]) {
    LogService.warn('PetEngine: You haven\'t pulled this fart yet!');
    return;
  }
  PetEngine.adoptPet(fartId);
}

// ═══════════════════════════════════════════
//  BOOT SEQUENCE
// ═══════════════════════════════════════════

async function bootSequence() {
  const bootMessages = [
    ['info', 'Bootstrapping FartVibe 6 Enterprise Runtime...'],
    ['debug', 'Loading emission profiles from /etc/flatulence/profiles.d/...'],
    ['info', 'OdorOrchestrator v6.0.0-rc.420 initialized'],
    ['debug', 'Mounting ButtStateManager on /dev/butt0...'],
    ['info', 'ButtState: alignment=82%, coherence=1.000'],
    ['debug', 'FlatulenceEngine: 6 emission profiles loaded'],
    ['info', 'FlushMultiplierService: base_mult=1.0x, efficiency=23%'],
    ['debug', 'Calibrating DopamineFeedbackController...'],
    ['info', 'DopamineFeedbackController: excitement=0, queue=empty'],
    ['warn', 'GasLeakDetector: background sniffing enabled'],
    ['debug', 'Connecting to ButtCluster (nodes: cheek-left, cheek-right, center)...'],
    ['info', 'ButtCluster: 3/3 nodes healthy'],
    ['debug', 'Initializing AudioPipeline: WebAudio fart synthesis engine'],
    ['info', 'OdorPipeline: all stages nominal'],
    ['debug', 'GachaEngine: Loading FartAcquisitionPipeline...'],
    ['info', `GachaEngine: ${FART_COLLECTION.length} farts catalogued across ${RARITY_ORDER.length} rarity tiers`],
    ['debug', 'GachaEngine: Pity system armed (hard pity: 90, soft pity: 75)'],
    ['info', 'GachaEngine: Banner "NUCLEAR CHEEK CLAPPER" loaded (mythic rate: 0.69%)'],
    ['warn', 'GachaEngine: Stink Token economy initialized. No refunds.'],
    ['debug', 'MicrotransactionEngine: Loading GasCoin Exchange rates...'],
    ['info', 'MicrotransactionEngine: 5 packages loaded. ButtPay\u2122 gateway connected.'],
    ['debug', 'PromotionEngine: First Time Bonus armed. Targeting new users...'],
    ['info', 'BattlePassEngine: Season 1 "THE GREAT UNBOTTLING" loaded (30 tiers)'],
    ['debug', 'BattlePassEngine: Dual-track rewards initialized (Free + Premium)'],
    ['warn', 'BattlePassEngine: Premium pass available for 2,000 GasCoins. Season never actually ends.'],
    ['info', 'PetEngine: FartPet Tamagotchi subsystem initializing...'],
    ['debug', `PetEngine: ${BATHROOM_LADDER.length} fast food bathrooms loaded (Subway → Taco Bell)`],
    ['info', `PetEngine: ${PET_FOODS.length} food items | ${PET_TRAINING.length} training exercises catalogued`],
    ['warn', 'PetEngine: THE BATHROOM LADDER AWAITS. TRAIN YOUR FART. CONQUER THE BELL.'],
    ['success', '\u2550\u2550\u2550 FARTVIBE 6 ONLINE \u2550\u2550\u2550 ALL FARTS ARE OFF \u2550\u2550\u2550'],
  ];

  for (const [level, msg] of bootMessages) {
    LogService[level](msg);
    await sleep(120);
  }
}

// Background log chatter
function ambientLogs() {
  const messages = [
    ['debug', 'ButtStateManager: periodic alignment check... OK'],
    ['debug', `GasBuffer: ${Math.floor(Math.random() * 100)}% utilized`],
    ['info', `OdorPipeline: throughput ${(Math.random() * 100).toFixed(1)} emissions/sec`],
    ['debug', 'FlatulenceEngine: idle cycle complete'],
    ['debug', `FlushMultiplier: efficiency drift ${(Math.random() * 0.1).toFixed(4)}`],
    ['info', `DopamineFeedback: ambient excitement=${DopamineFeedbackController.excitementLevel}`],
    ['debug', 'GasLeakDetector: sniff cycle... clear'],
    ['debug', `ButtCluster: heartbeat OK (latency: ${Math.floor(Math.random() * 5)}ms)`],
    ['warn', 'ButtStateManager: minor coherence drift detected'],
    ['debug', `OdorOrchestrator: ${OdorOrchestrator.cycleCount} cycles processed`],
    ['info', `GasRouter: rerouting through backup sphincter`],
    ['debug', 'EmissionProfileCache: LRU eviction (wet_blast_v2)'],
    ['warn', 'FlushMultiplierService: efficiency below threshold'],
    ['debug', `Pressure gauge: ${(FlatulenceEngine.pressure * 100).toFixed(1)} kPa`],
    ['debug', `GachaEngine: pity counter at ${GachaState.pity}/${GachaState.pityHard}`],
    ['info', `FartAcquisitionPipeline: ${Object.keys(GachaState.collection).length}/${FART_COLLECTION.length} farts catalogued`],
    ['debug', `StinkTokenEconomy: ${GachaState.stinkTokens} tokens in circulation`],
    ['warn', 'GachaEngine: banner expiration approaching (not really)'],
    ['debug', 'Fartdex: index integrity check... PASS'],
    ['info', `BattlePass: Tier ${BattlePassState.tier}/${BP_TIERS.length} | ${BattlePassState.xp} XP banked`],
    ['debug', `BattlePass: Premium=${BattlePassState.isPremium ? 'ACTIVE' : 'NOT PURCHASED (yet)'}`],
    ['warn', 'BattlePass: Season 1 ending soon (it is not)'],
    ['debug', `PetEngine: ${Object.keys(PetState.pets).length} farts in roster`],
    ['info', `PetEngine: Bathroom progress: ${PetState.highestBathroom + 1}/${BATHROOM_LADDER.length} conquered`],
    ['debug', 'PetEngine: Tamagotchi mood decay cycle... processing'],
    ['warn', 'PetEngine: Your fart is hungry. Feed it or suffer the consequences.'],
    ['info', `PetEngine: ${PetState.totalBattles} bathroom battles fought (${PetState.totalWins} wins)`],
  ];

  setInterval(() => {
    if (Math.random() < 0.4) {
      const [level, msg] = messages[Math.floor(Math.random() * messages.length)];
      LogService[level](msg);
    }
    MetricsService.randomFlicker();
  }, 2000);
}

// Keyboard shortcut
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !gameState.spinning) {
    e.preventDefault();
    handleSpin(spinBtn, null);
  }
});

// Init
bootSequence().then(() => {
  ambientLogs();
  updateUI();
  updateGachaUI();
  startBannerTimer();
  BattlePassEngine.updateUI();
  PetEngine.updateUI();
  startBPTimer();
  // Show FTB after a short delay (standard predatory UX)
  setTimeout(() => showFirstTimeBonus(), 3000);
});