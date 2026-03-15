import React from 'react';
import { GradientBackground } from '../components/GradientBackground';
import { ParticleField } from '../components/ParticleField';
import { StepBadge } from '../components/StepBadge';
import { SCRIPT } from '../script';

export const StepTitleScene = ({ stepKey }) => {
  const data = SCRIPT[stepKey];
  return (
    <GradientBackground>
      <ParticleField count={25} />
      <StepBadge
        number={data.heading.replace('Step ', '')}
        label={data.subheading}
        delay={5}
      />
    </GradientBackground>
  );
};
