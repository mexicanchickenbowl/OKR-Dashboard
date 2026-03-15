import React from 'react';
import { GradientBackground } from '../components/GradientBackground';
import { ParticleField } from '../components/ParticleField';
import { TextOverlay } from '../components/TextOverlay';
import { BulletList } from '../components/BulletList';
import { SCRIPT, COLORS } from '../script';

export const SummaryScene = () => {
  return (
    <GradientBackground>
      <ParticleField count={40} />
      <TextOverlay
        text={SCRIPT.summary.heading}
        fontSize={60}
        y="18%"
        delay={0}
        color={COLORS.highlight}
        fontWeight={800}
      />
      <BulletList
        items={SCRIPT.summary.steps}
        startDelay={10}
        stagger={18}
        fontSize={38}
        y="55%"
      />
    </GradientBackground>
  );
};
