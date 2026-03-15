import React from 'react';
import { GradientBackground } from '../components/GradientBackground';
import { ParticleField } from '../components/ParticleField';
import { TextOverlay, Citation } from '../components/TextOverlay';
import { ToothDiagram } from '../components/ToothDiagram';
import { SmoothZoom } from '../components/SmoothZoom';
import { SCRIPT } from '../script';

export const Step1BodyScene = () => {
  return (
    <GradientBackground>
      <SmoothZoom from={1} to={1.05} durationFrames={360}>
        <ParticleField count={30} />
        <ToothDiagram
          scale={1}
          x={1350}
          y={480}
          showArticulatingPaper
          showHighSpot
          delay={15}
        />
        <TextOverlay
          text={SCRIPT.step1Body.line}
          fontSize={34}
          y="50%"
          delay={5}
          fontWeight={600}
          maxWidth={750}
          style={{ left: '30%' }}
        />
        <Citation text={SCRIPT.step1Body.citation} delay={30} />
      </SmoothZoom>
    </GradientBackground>
  );
};
