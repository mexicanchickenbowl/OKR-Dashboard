import React, { useMemo } from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { COLORS, WIDTH, HEIGHT } from '../script';

/**
 * Subtle floating particle effect — Kurzgesagt-style ambient dots.
 */
export const ParticleField = ({ count = 40, width: w, height: h }) => {
  const frame = useCurrentFrame();
  const pw = w || WIDTH;
  const ph = h || HEIGHT;

  const particles = useMemo(() => {
    const rng = (seed) => {
      let s = seed;
      return () => {
        s = (s * 16807 + 0) % 2147483647;
        return s / 2147483647;
      };
    };
    const rand = rng(42);
    return Array.from({ length: count }, () => ({
      x: rand() * pw,
      y: rand() * ph,
      size: 2 + rand() * 4,
      speed: 0.15 + rand() * 0.35,
      phase: rand() * Math.PI * 2,
      opacity: 0.15 + rand() * 0.3,
    }));
  }, [count, pw, ph]);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {particles.map((p, i) => {
        const y = (p.y - frame * p.speed * 0.6) % ph;
        const x = p.x + Math.sin(frame * 0.02 + p.phase) * 20;
        const opacity = interpolate(
          Math.sin(frame * 0.03 + p.phase),
          [-1, 1],
          [p.opacity * 0.4, p.opacity],
        );
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y < 0 ? y + ph : y,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: COLORS.accentCyan,
              opacity,
              boxShadow: `0 0 ${p.size * 3}px ${COLORS.particleGlow}`,
            }}
          />
        );
      })}
    </div>
  );
};
