import React from 'react';
import { Composition, Sequence, Audio, staticFile } from 'remotion';
import { SCENE_DURATIONS, TOTAL_FRAMES, FPS, WIDTH, HEIGHT } from './script';

import { IntroScene } from './scenes/IntroScene';
import { HookScene } from './scenes/HookScene';
import { StepTitleScene } from './scenes/StepTitleScene';
import { Step1BodyScene } from './scenes/Step1BodyScene';
import { Step2BodyScene } from './scenes/Step2BodyScene';
import { Step3BodyScene } from './scenes/Step3BodyScene';
import { RealWorldScene } from './scenes/RealWorldScene';
import { EvidenceRecapScene } from './scenes/EvidenceRecapScene';
import { SummaryScene } from './scenes/SummaryScene';
import { CTAScene } from './scenes/CTAScene';
import { OutroScene } from './scenes/OutroScene';

/**
 * Attempts to load a voiceover audio file for a scene.
 * Renders nothing if the file hasn't been generated yet.
 */
const SceneAudio = ({ scene }) => {
  try {
    const src = staticFile(`audio/vo-${scene}.mp3`);
    return <Audio src={src} volume={1} />;
  } catch {
    return null;
  }
};

/**
 * Main video — sequences all scenes end-to-end with voiceover.
 */
const EndoExplainer = () => {
  const d = SCENE_DURATIONS;
  let offset = 0;

  const seq = (key, Component, props = {}) => {
    const from = offset;
    const duration = d[key];
    offset += duration;
    return (
      <Sequence from={from} durationInFrames={duration} name={key} key={key}>
        <Component {...props} />
        <SceneAudio scene={key} />
      </Sequence>
    );
  };

  return (
    <>
      {seq('intro', IntroScene)}
      {seq('hook', HookScene)}
      {seq('step1Title', StepTitleScene, { stepKey: 'step1Title' })}
      {seq('step1Body', Step1BodyScene)}
      {seq('step2Title', StepTitleScene, { stepKey: 'step2Title' })}
      {seq('step2Body', Step2BodyScene)}
      {seq('step3Title', StepTitleScene, { stepKey: 'step3Title' })}
      {seq('step3Body', Step3BodyScene)}
      {seq('realWorld', RealWorldScene)}
      {seq('evidenceRecap', EvidenceRecapScene)}
      {seq('summary', SummaryScene)}
      {seq('cta', CTAScene)}
      {seq('outro', OutroScene)}
    </>
  );
};

/**
 * Remotion Root — registers the composition.
 */
export const RemotionVideo = () => {
  return (
    <Composition
      id="EndoExplainer"
      component={EndoExplainer}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
