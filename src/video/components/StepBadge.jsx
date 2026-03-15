import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { COLORS } from '../script';

/**
 * Animated step number badge — zooms in with a purple glow.
 */
export const StepBadge = ({ number, label, delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = frame - delay;

  const scale = interpolate(f, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(1.8)),
  });

  const opacity = interpolate(f, [0, 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  if (f < 0) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
      }}
    >
      <div
        style={{
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${COLORS.accentPurple}, ${COLORS.accentBlue})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 0 60px ${COLORS.accentPurple}80`,
        }}
      >
        <span
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: COLORS.textPrimary,
          }}
        >
          {number}
        </span>
      </div>
      <span
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: COLORS.textPrimary,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        {label}
      </span>
    </div>
  );
};
