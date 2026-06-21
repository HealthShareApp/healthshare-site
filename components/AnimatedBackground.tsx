"use client";

import { useEffect, useRef } from "react";

// Isolated background animation — remove by deleting this file and the one
// import line in layout.tsx. Touches nothing else.
export default function AnimatedBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let rafId = 0;
    let resizeTimer: ReturnType<typeof setTimeout>;
    let ctx: CanvasRenderingContext2D | null = null;
    let W = 0;
    let H = 0;
    // Teal RGB — read from CSS variable so it stays in sync with the token.
    // Defaults match --teal: #00B5A3 as a safe fallback before the DOM is ready.
    let tr = 0, tg = 181, tb = 163;

    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Teal colour from CSS variable ───────────────────────────────────────
    function readTeal() {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--teal")
        .trim()
        .replace(/\s/g, "");
      if (/^#[0-9a-f]{6}$/i.test(raw)) {
        tr = parseInt(raw.slice(1, 3), 16);
        tg = parseInt(raw.slice(3, 5), 16);
        tb = parseInt(raw.slice(5, 7), 16);
      }
    }

    // ── ECG waveform ─────────────────────────────────────────────────────────
    // Returns normalised amplitude in the range [-0.30 … 1.0] for a phase
    // value in [0, 1). One full beat per cycle.
    function ecgY(phase: number): number {
      if (phase < 0.22) return 0;                                        // baseline
      if (phase < 0.32) {                                                // P wave
        return 0.14 * Math.sin(((phase - 0.22) / 0.10) * Math.PI);
      }
      if (phase < 0.38) return 0;                                        // PR segment
      if (phase < 0.40) {                                                // Q dip
        return -0.12 * Math.sin(((phase - 0.38) / 0.02) * Math.PI);
      }
      if (phase < 0.42) {                                                // R rise
        return Math.sin(((phase - 0.40) / 0.02) * Math.PI * 0.5);
      }
      if (phase < 0.445) {                                               // R–S fall
        const p = (phase - 0.42) / 0.025;
        return 1.0 - 1.30 * Math.sin(p * Math.PI * 0.5);
      }
      if (phase < 0.48) {                                                // S recovery
        return -0.30 * (1 - (phase - 0.445) / 0.035);
      }
      if (phase < 0.56) return 0.04;                                     // ST segment
      if (phase < 0.72) {                                                // T wave
        return 0.18 * Math.sin(((phase - 0.56) / 0.16) * Math.PI);
      }
      return 0;                                                           // baseline
    }

    // ── Canvas init / resize ─────────────────────────────────────────────────
    function init() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      // Set physical pixel buffer; also resets ctx transform state.
      canvas.width  = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx = canvas.getContext("2d");
      ctx?.scale(dpr, dpr);
      readTeal();
    }

    // ── Single draw pass ─────────────────────────────────────────────────────
    function draw(ts: number) {
      if (!ctx || W === 0) return;

      const dark   = document.documentElement.classList.contains("dark");
      const mobile = W < 640;

      ctx.clearRect(0, 0, W, H);

      // ── Layer A: breathing glow ───────────────────────────────────────────
      // Slow sine, ~7 s period, very low alpha. Only the centre is perceptibly
      // teal; the gradient fades completely before reaching the edges.
      const breathe = (Math.sin((2 * Math.PI * ts) / 7000) + 1) / 2; // 0 → 1

      const aBase = dark ? (mobile ? 0.040 : 0.055) : (mobile ? 0.020 : 0.030);
      const aPeak = dark ? (mobile ? 0.035 : 0.050) : (mobile ? 0.015 : 0.025);
      const gAlpha = aBase + breathe * aPeak;
      const gRadius = Math.min(W, H) * (0.38 + breathe * 0.20);
      const gx = W * 0.5;
      const gy = H * 0.36;

      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gRadius);
      grad.addColorStop(0,   `rgba(${tr},${tg},${tb},${gAlpha.toFixed(4)})`);
      grad.addColorStop(0.5, `rgba(${tr},${tg},${tb},${(gAlpha * 0.22).toFixed(4)})`);
      grad.addColorStop(1,   `rgba(${tr},${tg},${tb},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // ── Layer B: ECG pulse ────────────────────────────────────────────────
      // Scrolls horizontally at a constant slow speed. Desktop only.
      if (mobile) return;

      const cycleW  = Math.min(360, W * 0.28);   // one beat width in px
      const amp     = H * 0.050;                  // full R-spike height in px
      const baseY   = H * 0.70;                   // vertical position in viewport
      const scrollPxPerMs = 0.028;                // ~28 px / s (very slow)
      const offset  = (ts * scrollPxPerMs) % cycleW;

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${tr},${tg},${tb},${dark ? 0.12 : 0.08})`;
      ctx.lineWidth   = 1.25;
      ctx.lineJoin    = "round";
      ctx.lineCap     = "round";

      // Step 1.5 px — fine enough to look anti-aliased, cheap enough at 60 fps.
      let first = true;
      for (let x = -cycleW; x <= W + cycleW; x += 1.5) {
        const phase = (((x + offset) % cycleW) + cycleW) % cycleW / cycleW;
        const y     = baseY - ecgY(phase) * amp;
        if (first) { ctx.moveTo(x, y); first = false; }
        else         ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    }

    // ── rAF loop ─────────────────────────────────────────────────────────────
    function tick(ts: number) {
      draw(ts);
      rafId = requestAnimationFrame(tick);
    }

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(tick);
      }
    }

    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        init();
        if (prefersReducedMotion) draw(0);
      }, 150);
    }

    // ── Boot ─────────────────────────────────────────────────────────────────
    init();
    if (prefersReducedMotion) {
      draw(0); // one static frame; rAF loop never starts
    } else {
      rafId = requestAnimationFrame(tick);
    }

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        // z-index 1: above static sections (which are position:static / z-index:auto),
        // below the nav (z-50 = 50). pointer-events:none means nothing is blocked.
        // z-index:-1 would be invisible because the body viewport background paints
        // over it — this is the correct alternative for a CSS-only overlay.
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
