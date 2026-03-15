import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { COLORS } from '../script';

/**
 * Animated bold sans-serif text that fades + slides in.
 */
export const TextOverlay = ({
  text,
  fontSize = 64,
  color = COLORS.textPrimary,
  y = '50%',
  delay = 0,
  align = 'center',
  maxWidth = 1400,
  fontWeight = 800,
  lineHeight = 1.2,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const adjustedFrame = frame - delay;

  const opacity = interpolate(adjustedFrame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const translateY = interpolate(adjustedFrame, [0, 20], [30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  if (adjustedFrame < 0) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: '50%',
        transform: `translate(-50%, -50%) translateY(${translateY}px)`,
        opacity,
        textAlign: align,
        maxWidth,
        width: '90%',
        ...style,
      }}
    >
      <span
        style={{
          fontSize,
          fontWeight,
          color,
          lineHeight,
          letterSpacing: '-0.02em',
          whiteSpace: 'pre-line',
        }}
      >
        {text}
      </span>
    </div>
  );
};

/**
 * Smaller citation text in bottom corner.
 */
export const Citation = ({ text, delay = 10 }) => {
  const frame = useCurrentFrame();
  const adjustedFrame = frame - delay;

  const opacity = interpolate(adjustedFrame, [0, 15], [0, 0.7], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  if (adjustedFrame < 0) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 40,
        right: 60,
        opacity,
        fontSize: 22,
        fontWeight: 500,
        color: COLORS.citationColor,
        fontStyle: 'italic',
      }}
    >
      — {text}
    </div>
  );
};
