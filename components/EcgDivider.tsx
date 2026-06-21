"use client";

import { useEffect, useRef } from "react";

export default function EcgDivider() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let rafId = 0;
    let ctx: CanvasRenderingContext2D | null = null;
    let W = 0, H = 0;
    let tr = 0, tg = 181, tb = 163;

    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function readTeal() {
      const hex = getComputedStyle(document.documentElement)
        .getPropertyValue("--teal").trim().replace(/\s/g, "");
      if (/^#[0-9a-f]{6}$/i.test(hex)) {
        tr = parseInt(hex.slice(1, 3), 16);
        tg = parseInt(hex.slice(3, 5), 16);
        tb = parseInt(hex.slice(5, 7), 16);
      }
    }

    function ecgY(phase: number): number {
      if (phase < 0.22) return 0;
      if (phase < 0.32) return 0.14 * Math.sin(((phase - 0.22) / 0.10) * Math.PI);
      if (phase < 0.38) return 0;
      if (phase < 0.40) return -0.12 * Math.sin(((phase - 0.38) / 0.02) * Math.PI);
      if (phase < 0.42) return Math.sin(((phase - 0.40) / 0.02) * Math.PI * 0.5);
      if (phase < 0.445) {
        const p = (phase - 0.42) / 0.025;
        return 1.0 - 1.30 * Math.sin(p * Math.PI * 0.5);
      }
      if (phase < 0.48) return -0.30 * (1 - (phase - 0.445) / 0.035);
      if (phase < 0.56) return 0.04;
      if (phase < 0.72) return 0.18 * Math.sin(((phase - 0.56) / 0.16) * Math.PI);
      return 0;
    }

    function init() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width  = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx = canvas.getContext("2d");
      ctx?.scale(dpr, dpr);
      readTeal();
    }

    function draw(ts: number) {
      if (!ctx || W === 0) return;
      ctx.clearRect(0, 0, W, H);

      const cycleW = W * 0.58;
      const amp    = H * 0.40;
      const baseY  = H * 0.56;
      const offset = (ts * 0.030) % cycleW;

      ctx.beginPath();
      ctx.strokeStyle = `rgba(${tr},${tg},${tb},0.80)`;
      ctx.lineWidth   = 1.75;
      ctx.lineJoin    = "round";
      ctx.lineCap     = "round";

      let first = true;
      for (let x = -cycleW; x <= W + cycleW; x += 1) {
        const phase = (((x + offset) % cycleW) + cycleW) % cycleW / cycleW;
        const y = baseY - ecgY(phase) * amp;
        if (first) { ctx.moveTo(x, y); first = false; }
        else         ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    function tick(ts: number) {
      draw(ts);
      rafId = requestAnimationFrame(tick);
    }

    function onVisibility() {
      if (document.hidden) cancelAnimationFrame(rafId);
      else if (!prefersReducedMotion) rafId = requestAnimationFrame(tick);
    }

    init();
    if (prefersReducedMotion) {
      draw(0);
    } else {
      rafId = requestAnimationFrame(tick);
    }

    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      // Fades in from left and out to right so it reads as a flowing divider.
      style={{
        width: "100%",
        maxWidth: "320px",
        height: "52px",
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    />
  );
}
