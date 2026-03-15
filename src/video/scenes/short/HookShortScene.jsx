import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { GradientBackground } from '../../components/GradientBackground';
import { ParticleField } from '../../components/ParticleField';
import { ToothDiagram } from '../../components/ToothDiagram';
import { COLORS } from '../../script';
import { SHORT_WIDTH, SHORT_HEIGHT, SHORT_SCRIPT } from '../../script-short';

export const HookShortScene = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const translateY = interpolate(frame, [0, 15], [40, 0], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  // "40%" highlight pulse
  const highlightScale = interpolate(
    Math.sin(frame * 0.08),
    [-1, 1],
    [1, 1.08],
  );

  return (
    <GradientBackground width={SHORT_WIDTH} height={SHORT_HEIGHT}>
      <ParticleField count={30} width={SHORT_WIDTH} height={SHORT_HEIGHT} />
      <ToothDiagram scale={0.8} x={540} y={1350} showHighSpot delay={8} />

      {/* Main hook text */}
      <div
        style={{
          position: 'absolute',
          top: '22%',
          left: '50%',
          transform: `translate(-50%, -50%) translateY(${translateY}px)`,
          opacity,
          textAlign: 'center',
          width: '85%',
        }}
      >
        <span
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: COLORS.textPrimary,
            lineHeight: 1.35,
            whiteSpace: 'pre-line',
            letterSpacing: '-0.02em',
          }}
        >
          Occlusal reduction after root canal cuts pain by{' '}
        </span>
        <span
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: COLORS.highlight,
            display: 'inline-block',
            transform: `scale(${highlightScale})`,
          }}
        >
          40%
        </span>
      </div>

      {/* Subline */}
      <div
        style={{
          position: 'absolute',
          top: '48%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: interpolate(frame, [12, 25], [0, 0.85], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          textAlign: 'center',
          width: '80%',
        }}
      >
        <span
          style={{
            fontSize: 38,
            fontWeight: 600,
            color: COLORS.textSecondary,
            lineHeight: 1.4,
          }}
        >
          but only if you pick the right patient.
        </span>
      </div>
    </GradientBackground>
  );
};
