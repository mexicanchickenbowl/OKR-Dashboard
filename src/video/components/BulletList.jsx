import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { COLORS } from '../script';

/**
 * Staggered bullet-point list with fade-in per item.
 */
export const BulletList = ({
  items,
  startDelay = 0,
  stagger = 15,
  fontSize = 36,
  y = '50%',
}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: 1400,
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
      }}
    >
      {items.map((item, i) => {
        const f = frame - startDelay - i * stagger;
        const opacity = interpolate(f, [0, 15], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.cubic),
        });
        const translateX = interpolate(f, [0, 15], [40, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.cubic),
        });
        return (
          <div
            key={i}
            style={{
              opacity,
              transform: `translateX(${translateX}px)`,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 20,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: COLORS.accentCyan,
                marginTop: 12,
                flexShrink: 0,
                boxShadow: `0 0 12px ${COLORS.particleGlow}`,
              }}
            />
            <span
              style={{
                fontSize,
                fontWeight: 600,
                color: COLORS.textPrimary,
                lineHeight: 1.4,
              }}
            >
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
};
