import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { GradientBackground } from '../../components/GradientBackground';
import { ParticleField } from '../../components/ParticleField';
import { COLORS } from '../../script';
import { SHORT_WIDTH, SHORT_HEIGHT, SHORT_SCRIPT } from '../../script-short';

export const TakeawayShortScene = () => {
  const frame = useCurrentFrame();
  const { heading, steps } = SHORT_SCRIPT.takeaway;

  const headingOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  // Closing line fade
  const closingOpacity = interpolate(frame, [240, 260], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <GradientBackground width={SHORT_WIDTH} height={SHORT_HEIGHT}>
      <ParticleField count={35} width={SHORT_WIDTH} height={SHORT_HEIGHT} />

      {/* Heading */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: headingOpacity,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: COLORS.highlight,
            letterSpacing: '-0.02em',
          }}
        >
          {heading}
        </span>
      </div>

      {/* Steps — numbered cards */}
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '88%',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        {steps.map((step, i) => {
          const f = frame - 10 - i * 20;
          const opacity = interpolate(f, [0, 18], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.out(Easing.cubic),
          });
          const translateY = interpolate(f, [0, 18], [30, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.out(Easing.cubic),
          });

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateY(${translateY}px)`,
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 16,
                padding: '28px 32px',
                border: `1px solid rgba(255,255,255,0.1)`,
              }}
            >
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: COLORS.textPrimary,
                  lineHeight: 1.4,
                }}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>

      {/* Closing line */}
      <div
        style={{
          position: 'absolute',
          top: '85%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: closingOpacity,
          textAlign: 'center',
          width: '80%',
        }}
      >
        <span
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: COLORS.accentCyan,
            lineHeight: 1.3,
          }}
        >
          Evidence-based endo in 60 seconds.
        </span>
      </div>
    </GradientBackground>
  );
};
