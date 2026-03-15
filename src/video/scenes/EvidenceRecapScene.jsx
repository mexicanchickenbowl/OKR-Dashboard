import React from 'react';
import { GradientBackground } from '../components/GradientBackground';
import { ParticleField } from '../components/ParticleField';
import { TextOverlay } from '../components/TextOverlay';
import { BulletList } from '../components/BulletList';
import { SCRIPT, COLORS } from '../script';

export const EvidenceRecapScene = () => {
  return (
    <GradientBackground>
      <ParticleField count={35} />
      <TextOverlay
        text={SCRIPT.evidenceRecap.heading}
        fontSize={56}
        y="16%"
        delay={0}
        color={COLORS.accentCyan}
        fontWeight={800}
      />
      <BulletList
        items={SCRIPT.evidenceRecap.bullets}
        startDelay={15}
        stagger={20}
        fontSize={34}
        y="55%"
      />
    </GradientBackground>
  );
};
