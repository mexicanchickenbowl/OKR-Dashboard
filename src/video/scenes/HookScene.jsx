import React from 'react';
import { GradientBackground } from '../components/GradientBackground';
import { ParticleField } from '../components/ParticleField';
import { TextOverlay } from '../components/TextOverlay';
import { ToothDiagram } from '../components/ToothDiagram';
import { SmoothZoom } from '../components/SmoothZoom';
import { SCRIPT, COLORS } from '../script';

export const HookScene = () => {
  return (
    <GradientBackground>
      <SmoothZoom from={1} to={1.06} durationFrames={240}>
        <ParticleField count={35} />
        <ToothDiagram scale={0.9} x={960} y={520} showHighSpot delay={10} />
        <TextOverlay
          text={SCRIPT.hook.line}
          fontSize={46}
          y="18%"
          delay={5}
          fontWeight={700}
          maxWidth={1300}
        />
        {/* Question mark accent */}
        <TextOverlay
          text="?"
          fontSize={180}
          y="82%"
          delay={30}
          color={COLORS.accentPurple + '40'}
          fontWeight={900}
        />
      </SmoothZoom>
    </GradientBackground>
  );
};
