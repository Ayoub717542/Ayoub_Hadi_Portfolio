// Animated background: a faint dot grid with light pulses travelling along the grid lines
// (like data in a circuit) and a soft spotlight that follows the mouse.
// Uses the theme colors, pauses when the tab is hidden, and stays still for
// visitors who prefer reduced motion.

import { useEffect, useRef } from 'react';

const GAP = 28; // distance between dots, in px
const SPOTLIGHT = 200; // mouse spotlight radius, in px
const MAX_PULSES = 8;
const PULSE_SPEED = 90; // px per second
const PULSE_TRAIL = 7; // trail length, in grid cells
const PULSE_EVERY_MS = 650;

interface Pulse {
  x: number;
  y: number;
  dx: number; // direction: -1, 0 or 1
  dy: number;
  travelled: number;
  length: number; // how far it goes before fading out, in px
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');

    let width = 0;
    let height = 0;
    let dotColor = '';
    let accentColor = '';
    let mouse: { x: number; y: number } | null = null;
    let pulses: Pulse[] = [];
    let lastPulseAt = 0;
    let lastFrame = 0;
    let frame = 0;

    function readColors() {
      const css = getComputedStyle(document.documentElement);
      dotColor = css.getPropertyValue('--color-muted').trim();
      accentColor = css.getPropertyValue('--color-accent').trim();
    }

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function spawnPulse() {
      const horizontal = Math.random() < 0.5;
      const dir = Math.random() < 0.5 ? 1 : -1;
      pulses.push({
        x: Math.floor((Math.random() * width) / GAP) * GAP + GAP / 2,
        y: Math.floor((Math.random() * height) / GAP) * GAP + GAP / 2,
        dx: horizontal ? dir : 0,
        dy: horizontal ? 0 : dir,
        travelled: 0,
        length: GAP * (8 + Math.floor(Math.random() * 10)),
      });
    }

    function draw(time: number) {
      const seconds = lastFrame ? Math.min((time - lastFrame) / 1000, 0.05) : 0;
      lastFrame = time;
      ctx.clearRect(0, 0, width, height);

      // 0. Soft accent glow under the mouse
      if (mouse) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, SPOTLIGHT * 1.6);
        glow.addColorStop(0, accentColor);
        glow.addColorStop(1, 'transparent');
        ctx.globalAlpha = 0.07;
        ctx.fillStyle = glow;
        ctx.fillRect(mouse.x - SPOTLIGHT * 1.6, mouse.y - SPOTLIGHT * 1.6, SPOTLIGHT * 3.2, SPOTLIGHT * 3.2);
      }

      // 1. Dot grid, brighter near the mouse
      ctx.fillStyle = dotColor;
      for (let x = GAP / 2; x < width; x += GAP) {
        for (let y = GAP / 2; y < height; y += GAP) {
          let alpha = 0.35;
          let size = 1;
          if (mouse) {
            const distance = Math.hypot(x - mouse.x, y - mouse.y);
            if (distance < SPOTLIGHT) {
              const t = 1 - distance / SPOTLIGHT;
              alpha += t * 0.55;
              size += t * 1.2;
            }
          }
          ctx.globalAlpha = alpha;
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        }
      }

      // 2. Light pulses moving along the grid lines, with a fading trail
      if (!reduceMotion.matches) {
        if (time - lastPulseAt > PULSE_EVERY_MS && pulses.length < MAX_PULSES) {
          spawnPulse();
          lastPulseAt = time;
        }
        ctx.strokeStyle = accentColor;
        ctx.lineCap = 'round';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = 8; // soft glow
        for (const p of pulses) {
          p.travelled += PULSE_SPEED * seconds;
          const headX = p.x + p.dx * p.travelled;
          const headY = p.y + p.dy * p.travelled;
          const trail = Math.min(p.travelled, GAP * PULSE_TRAIL);
          // fade in at the start, fade out at the end
          const life = Math.min(p.travelled / GAP, (p.length - p.travelled) / GAP, 1);
          const gradient = ctx.createLinearGradient(headX - p.dx * trail, headY - p.dy * trail, headX, headY);
          gradient.addColorStop(0, 'transparent');
          gradient.addColorStop(1, accentColor);
          ctx.globalAlpha = Math.max(life, 0) * 0.45;
          ctx.strokeStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(headX - p.dx * trail, headY - p.dy * trail);
          ctx.lineTo(headX, headY);
          ctx.stroke();
          ctx.fillStyle = accentColor;
          ctx.fillRect(headX - 2, headY - 2, 4, 4);
        }
        pulses = pulses.filter((p) => p.travelled < p.length);
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;
    }

    function loop(time: number) {
      draw(time);
      frame = requestAnimationFrame(loop);
    }

    function start() {
      cancelAnimationFrame(frame);
      lastFrame = 0;
      if (reduceMotion.matches) draw(0); // still dot grid only
      else frame = requestAnimationFrame(loop);
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
      if (reduceMotion.matches) draw(0);
    };
    const onMouseLeave = () => (mouse = null);
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(frame) : start());
    const onResize = () => {
      resize();
      if (reduceMotion.matches) draw(0);
    };
    const onThemeChange = () => {
      readColors();
      if (reduceMotion.matches) draw(0);
    };

    readColors();
    resize();
    start();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('visibilitychange', onVisibility);
    darkMode.addEventListener('change', onThemeChange);
    reduceMotion.addEventListener('change', start);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibility);
      darkMode.removeEventListener('change', onThemeChange);
      reduceMotion.removeEventListener('change', start);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 size-full" />;
}
