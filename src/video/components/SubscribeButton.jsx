import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { COLORS } from '../script';

/**
 * Animated subscribe button with bell icon for the CTA scene.
 */
export const SubscribeButton = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const f = frame - delay;

  const scale = interpolate(f, [0, 20], [0.5, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(1.5)),
  });

  const opacity = interpolate(f, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Bell wiggle
  const bellRotate = f > 25
    ? interpolate(
        Math.sin((f - 25) * 0.4),
        [-1, 1],
        [-12, 12],
      )
    : 0;

  if (f < 0) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '22%',
        left: '50%',
        transform: `translateX(-50%) scale(${scale})`,
        opacity,
        display: 'flex',
        alignItems: 'center',
        gap: 32,
      }}
    >
      <div
        style={{
          padding: '20px 56px',
          borderRadius: 12,
          background: '#FF0000',
          fontSize: 36,
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '0.04em',
          boxShadow: '0 8px 30px rgba(255,0,0,0.35)',
        }}
      >
        SUBSCRIBE
      </div>
      <div
        style={{
          transform: `rotate(${bellRotate}deg)`,
          fontSize: 52,
        }}
      >
        🔔
      </div>
    </div>
  );
};
