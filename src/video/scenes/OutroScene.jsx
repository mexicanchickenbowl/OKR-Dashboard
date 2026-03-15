import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { ParticleField } from '../components/ParticleField';
import { TextOverlay } from '../components/TextOverlay';
import { SCRIPT, COLORS } from '../script';

export const OutroScene = () => {
  const frame = useCurrentFrame();

  // Fade out at the end
  const fadeOut = interpolate(frame, [150, 210], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <GradientBackground>
      <div style={{ opacity: fadeOut }}>
        <ParticleField count={30} />
        <TextOverlay
          text={SCRIPT.outro.line}
          fontSize={56}
          y="50%"
          delay={5}
          fontWeight={700}
        />
      </div>
    </GradientBackground>
  );
};
