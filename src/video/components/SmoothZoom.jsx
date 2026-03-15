import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';

/**
 * Wrapper that applies a slow, smooth zoom-in to its children.
 */
export const SmoothZoom = ({
  children,
  from = 1,
  to = 1.08,
  durationFrames = 300,
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, durationFrames], [from, to], {
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.quad),
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
      }}
    >
      {children}
    </div>
  );
};
