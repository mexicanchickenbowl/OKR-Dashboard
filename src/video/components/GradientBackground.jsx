import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { COLORS, WIDTH, HEIGHT } from '../script';

export const GradientBackground = ({ children }) => {
  const frame = useCurrentFrame();

  // Slow pulsing gradient shift
  const gradAngle = interpolate(frame, [0, 900], [135, 160], {
    extrapolateRight: 'extend',
  });

  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        background: `linear-gradient(${gradAngle}deg, ${COLORS.bgDark} 0%, ${COLORS.gradientStart} 40%, ${COLORS.gradientEnd} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Subtle vignette overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
};
