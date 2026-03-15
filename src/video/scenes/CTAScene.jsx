import React from 'react';
import { GradientBackground } from '../components/GradientBackground';
import { ParticleField } from '../components/ParticleField';
import { TextOverlay } from '../components/TextOverlay';
import { SubscribeButton } from '../components/SubscribeButton';
import { SCRIPT, COLORS } from '../script';

export const CTAScene = () => {
  return (
    <GradientBackground>
      <ParticleField count={50} />
      <TextOverlay
        text={SCRIPT.cta.heading}
        fontSize={64}
        y="28%"
        delay={0}
        color={COLORS.highlight}
        fontWeight={800}
      />
      <TextOverlay
        text={SCRIPT.cta.line}
        fontSize={36}
        y="44%"
        delay={10}
        fontWeight={600}
      />
      <SubscribeButton delay={20} />
    </GradientBackground>
  );
};
