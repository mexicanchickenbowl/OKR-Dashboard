import React from 'react';
import { Audio, staticFile, useCurrentFrame } from 'remotion';

/**
 * Conditionally renders an <Audio> tag for a scene's voiceover file.
 * Falls back silently if the file hasn't been generated yet (preview-safe).
 *
 * Place this inside a <Sequence> so the audio aligns with the scene timing.
 *
 * Usage:
 *   <Voiceover scene="hook" />
 *   → loads public/audio/vo-hook.mp3
 */
export const Voiceover = ({ scene, volume = 1 }) => {
  // staticFile resolves from the `public/` directory
  const src = staticFile(`audio/vo-${scene}.mp3`);

  return <Audio src={src} volume={volume} />;
};
