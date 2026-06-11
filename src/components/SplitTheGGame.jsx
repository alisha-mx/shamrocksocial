import { useRef, useState, useEffect, useCallback } from 'react';

// Logical (design) size
const W = 420;
const H = 560;
const CX = W / 2;
const S = 2;        // internal supersample (renders at 840x1120 for sharpness)
const PB = 3;       // subtle pixel block (logical px ≈ PB/ S ... kept small/soft)

// Glass geometry (logical coords)
const RIM = 80;
const BASE = 508;
const TARGET_CENTER = 232;   // foam should split the G here (sits under the harp)
const TARGET_HALF = 18;
const FOAMH = 30;
// Foam starts as a full head at the very top of the glass, then pours down
const TRAVEL = { top: RIM + FOAMH, bottom: 452 };

const resultFor = (acc) => {
  if (acc >= 95) return 'Perfect Split!';
  if (acc >= 80) return 'Nearly there!';
  if (acc >= 60) return 'Decent pour!';
  return 'Try again, rookie.';
};

const smoothstep = (a, b, t) => {
  t = Math.max(0, Math.min(1, (t - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

// Smooth tulip half-width (a touch wider so the wordmark fits inside)
const halfW = (y) => {
  const t = (y - RIM) / (BASE - RIM);
  if (t <= 0.6) return 130 - 36 * smoothstep(0, 0.6, t); // 130 -> 94
  return 94 + 14 * smoothstep(0.6, 1, t);                 // 94 -> 108
};

const traceGlass = (ctx) => {
  ctx.beginPath();
  ctx.moveTo(CX - halfW(RIM), RIM);
  for (let y = RIM; y <= BASE; y += 3) ctx.lineTo(CX - halfW(y), y);
  for (let y = BASE; y >= RIM; y -= 3) ctx.lineTo(CX + halfW(y), y);
  ctx.closePath();
};

const SplitTheGGame = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const lineRef = useRef(TRAVEL.top);
  const speedRef = useRef(2);
  const startTimeRef = useRef(0);
  const playingRef = useRef(false);
  const stopGameRef = useRef(null);
  const offRef = useRef(null);
  const smallRef = useRef(null);
  const dropsRef = useRef(null);
  const countdownRef = useRef(null);
  const countingRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [result, setResult] = useState(null);
  const [countdown, setCountdown] = useState(null);

  if (!dropsRef.current) {
    const drops = [];
    for (let i = 0; i < 90; i++) {
      const y = RIM + 40 + Math.random() * (BASE - RIM - 70);
      const hw = halfW(y) - 8;
      const x = CX + (Math.random() * 2 - 1) * hw;
      drops.push({ x, y, r: 1 + Math.random() * 1.8 });
    }
    dropsRef.current = drops;
  }

  // --- Detailed smooth render (logical coords) ---------------------------
  const drawDetailed = useCallback((ctx, surfaceY) => {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#15100a';
    ctx.fillRect(0, 0, W, H);

    const surf = surfaceY;
    const foamTop = surf - FOAMH;

    // ---- Inside the glass (clipped) ----
    ctx.save();
    traceGlass(ctx);
    ctx.clip();

    // Stout body gradient
    const stout = ctx.createLinearGradient(0, RIM, 0, BASE);
    stout.addColorStop(0, '#2a160c');
    stout.addColorStop(0.45, '#150d07');
    stout.addColorStop(0.85, '#1a0d07');
    stout.addColorStop(1, '#2a100a');
    ctx.fillStyle = stout;
    ctx.fillRect(0, RIM - 10, W, BASE - RIM + 20);

    // red-brown glow near lower sides
    const glowL = ctx.createRadialGradient(CX - 70, BASE - 90, 8, CX - 70, BASE - 90, 130);
    glowL.addColorStop(0, 'rgba(120,45,20,0.32)');
    glowL.addColorStop(1, 'rgba(120,45,20,0)');
    ctx.fillStyle = glowL;
    ctx.fillRect(0, 0, W, H);
    const glowR = ctx.createRadialGradient(CX + 70, BASE - 120, 8, CX + 70, BASE - 120, 120);
    glowR.addColorStop(0, 'rgba(110,40,18,0.22)');
    glowR.addColorStop(1, 'rgba(110,40,18,0)');
    ctx.fillStyle = glowR;
    ctx.fillRect(0, 0, W, H);

    // Empty (drained) glass above the foam surface
    if (foamTop > RIM) {
      const empty = ctx.createLinearGradient(0, RIM, 0, foamTop);
      empty.addColorStop(0, '#241c15');
      empty.addColorStop(1, '#191309');
      ctx.fillStyle = empty;
      ctx.fillRect(0, RIM - 10, W, foamTop - RIM + 10);
    }

    // Foam head: creamy band with soft rounded top
    const foamGrad = ctx.createLinearGradient(0, foamTop, 0, surf);
    foamGrad.addColorStop(0, '#fffdf5');
    foamGrad.addColorStop(0.5, '#efe7d4');
    foamGrad.addColorStop(1, '#ddd3bd');
    ctx.fillStyle = foamGrad;
    ctx.fillRect(0, foamTop, W, FOAMH);
    // rounded dome on the foam top
    ctx.beginPath();
    ctx.ellipse(CX, foamTop, halfW(foamTop), 11, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#fffdf5';
    ctx.fill();
    // soft shadow where foam meets stout
    const fsh = ctx.createLinearGradient(0, surf - 8, 0, surf + 6);
    fsh.addColorStop(0, 'rgba(150,120,80,0)');
    fsh.addColorStop(0.6, 'rgba(120,90,55,0.45)');
    fsh.addColorStop(1, 'rgba(60,40,22,0)');
    ctx.fillStyle = fsh;
    ctx.fillRect(0, surf - 8, W, 14);

    // Glass gloss highlights (both sides)
    for (let y = RIM; y <= BASE; y += 1) {
      const hw = halfW(y);
      // left bright streak
      const lg = ctx.createLinearGradient(CX - hw, 0, CX - hw + 26, 0);
      lg.addColorStop(0, 'rgba(255,255,255,0.16)');
      lg.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = lg;
      ctx.fillRect(CX - hw, y, 26, 1);
      // right dim streak
      const rg = ctx.createLinearGradient(CX + hw - 16, 0, CX + hw, 0);
      rg.addColorStop(0, 'rgba(255,255,255,0)');
      rg.addColorStop(1, 'rgba(255,255,255,0.08)');
      ctx.fillStyle = rg;
      ctx.fillRect(CX + hw - 16, y, 16, 1);
    }

    // Condensation dots (subtle, pixel-ish squares)
    for (const d of dropsRef.current) {
      ctx.fillStyle = 'rgba(255,255,255,0.13)';
      ctx.fillRect(d.x, d.y, d.r + 1, d.r + 1);
      ctx.fillStyle = 'rgba(0,0,0,0.16)';
      ctx.fillRect(d.x, d.y + d.r + 1, d.r, d.r);
    }

    ctx.restore();

    // Glass rim + outline (subtle brass)
    traceGlass(ctx);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = 'rgba(199,154,78,0.55)';
    ctx.stroke();
    // rim lip
    ctx.fillStyle = 'rgba(199,154,78,0.7)';
    ctx.fillRect(CX - halfW(RIM) - 2, RIM - 4, (halfW(RIM) + 2) * 2, 4);
    // base / foot
    ctx.fillStyle = 'rgba(150,120,80,0.5)';
    ctx.fillRect(CX - 74, BASE, 148, 8);
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fillRect(CX - 74, BASE, 148, 2);

    // Overfilled foam dome hanging slightly over the rim (only when near-full)
    if (foamTop <= RIM + 10) {
      const rw = halfW(RIM);
      ctx.fillStyle = '#fffdf5';
      ctx.beginPath();
      ctx.ellipse(CX, RIM, rw * 0.98, 16, 0, 0, Math.PI * 2);
      ctx.fill();
      // soft shadow under the dome lip
      ctx.fillStyle = 'rgba(210,200,176,0.5)';
      ctx.beginPath();
      ctx.ellipse(CX, RIM + 4, rw * 0.98, 6, 0, 0, Math.PI);
      ctx.fill();
      // a couple of foam bumps for an authentic head
      ctx.fillStyle = '#fffdf5';
      ctx.beginPath(); ctx.arc(CX - rw * 0.4, RIM - 6, 9, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(CX + rw * 0.25, RIM - 8, 11, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(CX + rw * 0.6, RIM - 4, 7, 0, Math.PI * 2); ctx.fill();
    }

    // Gold clover emblem (decorative, near top)
    drawClover(ctx, CX, 168);

    // Single serif "G" printed on the glass — the foam splits this
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '700 64px Georgia, "Times New Roman", serif';
    ctx.shadowColor = 'rgba(0,0,0,0.55)';
    ctx.shadowBlur = 6;
    ctx.fillStyle = '#fdfaf0';
    ctx.fillText('G', CX, TARGET_CENTER);
    ctx.restore();

  }, []);

  // Decorative gold clover emblem, drawn at origin then scaled
  const drawClover = (ctx, cx, cy, scale = 1.3) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);
    const grad = ctx.createLinearGradient(-16, -18, 16, 20);
    grad.addColorStop(0, '#e7c067');
    grad.addColorStop(1, '#9c7430');
    ctx.fillStyle = grad;
    // three rounded leaves
    ctx.beginPath();
    ctx.arc(0, -9, 8, 0, Math.PI * 2);   // top
    ctx.fill();
    ctx.beginPath();
    ctx.arc(-8, 2, 8, 0, Math.PI * 2);   // left
    ctx.fill();
    ctx.beginPath();
    ctx.arc(8, 2, 8, 0, Math.PI * 2);    // right
    ctx.fill();
    // stem
    ctx.beginPath();
    ctx.moveTo(-2, 4);
    ctx.quadraticCurveTo(-3, 16, -6, 22);
    ctx.quadraticCurveTo(0, 23, 6, 22);
    ctx.quadraticCurveTo(3, 16, 2, 4);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };

  // --- Compose: render hi-res then a subtle pixel pass -------------------
  const drawScene = useCallback((ctx, surfaceY) => {
    if (!offRef.current) {
      const off = document.createElement('canvas');
      off.width = W * S; off.height = H * S;
      offRef.current = off;
      const sm = document.createElement('canvas');
      sm.width = Math.floor((W * S) / PB);
      sm.height = Math.floor((H * S) / PB);
      smallRef.current = sm;
    }
    const octx = offRef.current.getContext('2d');
    octx.save();
    octx.setTransform(S, 0, 0, S, 0, 0); // draw in logical coords at 2x
    octx.imageSmoothingEnabled = true;
    drawDetailed(octx, surfaceY);
    octx.restore();

    // subtle downsample / upscale for gentle pixel texture
    const sm = smallRef.current;
    const sctx = sm.getContext('2d');
    sctx.imageSmoothingEnabled = true;
    sctx.clearRect(0, 0, sm.width, sm.height);
    sctx.drawImage(offRef.current, 0, 0, sm.width, sm.height);

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, W * S, H * S);
    ctx.drawImage(sm, 0, 0, sm.width, sm.height, 0, 0, W * S, H * S);
  }, [drawDetailed]);

  // --- Game loop ---------------------------------------------------------
  const loop = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    let y = lineRef.current + speedRef.current;
    if (y >= TRAVEL.bottom) {
      lineRef.current = TRAVEL.bottom;
      drawScene(ctx, TRAVEL.bottom);
      stopGameRef.current?.();
      return;
    }
    lineRef.current = y;
    drawScene(ctx, y);
    if (playingRef.current) rafRef.current = requestAnimationFrame(loop);
  }, [drawScene]);

  const beginPour = useCallback(() => {
    countingRef.current = false;
    setCountdown(null);
    setPlaying(true);
    playingRef.current = true;
    speedRef.current = 1.8 + Math.random() * 1.6; // slightly faster, more varied
    startTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(loop);
  }, [loop]);

  const startGame = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    clearInterval(countdownRef.current);
    setResult(null);
    setPlaying(false);
    playingRef.current = false;
    // reset foam to the very top of the glass
    lineRef.current = TRAVEL.top;
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) drawScene(ctx, TRAVEL.top);
    // 3 - 2 - 1 countdown
    countingRef.current = true;
    let n = 3;
    setCountdown(n);
    countdownRef.current = setInterval(() => {
      n -= 1;
      if (n <= 0) {
        clearInterval(countdownRef.current);
        beginPour();
      } else {
        setCountdown(n);
      }
    }, 700);
  }, [drawScene, beginPour]);

  const stopGame = useCallback(() => {
    if (!playingRef.current) return;
    playingRef.current = false;
    setPlaying(false);
    clearInterval(countdownRef.current);
    cancelAnimationFrame(rafRef.current);
    const reaction = (performance.now() - startTimeRef.current) / 1000;
    const dist = Math.abs(lineRef.current - TARGET_CENTER);
    const maxDist = (TRAVEL.bottom - TRAVEL.top) / 2.4; // tighter window
    const accuracy = Math.max(0, Math.round((1 - dist / maxDist) * 100));
    setResult({ accuracy, reaction: reaction.toFixed(2), message: resultFor(accuracy) });
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) drawScene(ctx, lineRef.current);
  }, [drawScene]);

  stopGameRef.current = stopGame;

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        if (countingRef.current) return;       // ignore during countdown
        if (playingRef.current) stopGame();
        else startGame();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [startGame, stopGame]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) drawScene(ctx, TRAVEL.top);
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(countdownRef.current);
    };
  }, [drawScene]);

  const handleButton = () => {
    if (countdown !== null) return;
    playing ? stopGame() : startGame();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[420px]">
        <canvas
          ref={canvasRef}
          width={W * S}
          height={H * S}
          className="block w-full h-auto border border-brandBrass/30"
          style={{ background: '#15100a' }}
        />
        {countdown !== null && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              key={countdown}
              className="font-display font-bold text-brandBrass animate-[pulse_0.7s_ease-in-out]"
              style={{ fontSize: '120px', textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}
            >
              {countdown}
            </span>
          </div>
        )}
      </div>

      <button
        onClick={handleButton}
        disabled={countdown !== null}
        className="mt-6 font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-10 py-4 bg-brandBrass text-guinnessBlack hover:bg-brandCream transition-all duration-300 disabled:opacity-60 disabled:cursor-default"
      >
        {countdown !== null ? 'Get Ready' : playing ? 'Split It!' : result ? 'Play Again' : 'Start Pour'}
      </button>

      <div className="mt-6 h-24 flex items-center justify-center">
        {result && (
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold uppercase text-brandCream mb-2">
              {result.message}
            </p>
            <p className="font-body text-sm text-brandCream/70 tracking-wide">
              Accuracy <span className="text-brandBrass font-semibold">{result.accuracy}%</span>
              <span className="mx-3 text-brandCream/30">|</span>
              Reaction <span className="text-brandBrass font-semibold">{result.reaction}s</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplitTheGGame;
