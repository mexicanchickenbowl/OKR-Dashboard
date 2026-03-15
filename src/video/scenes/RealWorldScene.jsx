import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { ParticleField } from '../components/ParticleField';
import { TextOverlay } from '../components/TextOverlay';
import { SmoothZoom } from '../components/SmoothZoom';
import { SCRIPT, COLORS } from '../script';

export const RealWorldScene = () => {
  const frame = useCurrentFrame();

  // Person icon fade-in
  const iconOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <GradientBackground>
      <SmoothZoom from={1} to={1.04} durationFrames={480}>
        <ParticleField count={30} />

        {/* Heading */}
        <TextOverlay
          text={SCRIPT.realWorld.heading}
          fontSize={52}
          y="14%"
          delay={0}
          color={COLORS.accentCyan}
          fontWeight={800}
        />

        {/* Person silhouette icon */}
        <div
          style={{
            position: 'absolute',
            top: '42%',
            left: '15%',
            transform: 'translate(-50%, -50%)',
            opacity: iconOpacity,
          }}
        >
          <svg width="140" height="180" viewBox="0 0 140 180">
            <circle cx="70" cy="40" r="35" fill={COLORS.accentPurple} opacity="0.7" />
            <ellipse cx="70" cy="140" rx="55" ry="50" fill={COLORS.accentPurple} opacity="0.5" />
          </svg>
          <div
            style={{
              textAlign: 'center',
              fontSize: 24,
              fontWeight: 700,
              color: COLORS.textSecondary,
              marginTop: 8,
            }}
          >
            Sarah, 38
          </div>
        </div>

        {/* Story text */}
        <TextOverlay
          text={SCRIPT.realWorld.line}
          fontSize={34}
          y="50%"
          delay={15}
          fontWeight={600}
          maxWidth={900}
          style={{ left: '58%' }}
        />
      </SmoothZoom>
    </GradientBackground>
  );
};
