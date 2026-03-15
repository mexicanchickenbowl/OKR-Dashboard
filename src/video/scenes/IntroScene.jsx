import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { ParticleField } from '../components/ParticleField';
import { ToothDiagram } from '../components/ToothDiagram';
import { COLORS, SCRIPT } from '../script';

export const IntroScene = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [15, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const titleScale = interpolate(frame, [15, 40], [0.85, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const subtitleOpacity = interpolate(frame, [50, 70], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const lineWidth = interpolate(frame, [40, 70], [0, 400], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <GradientBackground>
      <ParticleField count={50} />
      <ToothDiagram scale={0.7} x={960} y={650} delay={30} />

      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: '28%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${titleScale})`,
          opacity: titleOpacity,
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 78,
            fontWeight: 900,
            color: COLORS.textPrimary,
            lineHeight: 1.15,
            whiteSpace: 'pre-line',
            letterSpacing: '-0.02em',
          }}
        >
          {SCRIPT.intro.title}
        </h1>
      </div>

      {/* Divider line */}
      <div
        style={{
          position: 'absolute',
          top: '48%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: lineWidth,
          height: 3,
          background: `linear-gradient(90deg, transparent, ${COLORS.accentCyan}, transparent)`,
        }}
      />

      {/* Subtitle */}
      <div
        style={{
          position: 'absolute',
          top: '54%',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: subtitleOpacity,
        }}
      >
        <span
          style={{
            fontSize: 42,
            fontWeight: 600,
            color: COLORS.accentCyan,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          {SCRIPT.intro.subtitle}
        </span>
      </div>
    </GradientBackground>
  );
};
