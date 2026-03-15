import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { GradientBackground } from '../../components/GradientBackground';
import { ParticleField } from '../../components/ParticleField';
import { COLORS } from '../../script';
import { SHORT_WIDTH, SHORT_HEIGHT, SHORT_SCRIPT } from '../../script-short';

export const EvidenceShortScene = () => {
  const frame = useCurrentFrame();
  const { heading, bullets, citation } = SHORT_SCRIPT.evidence;

  // Heading fade
  const headingOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  // Citation
  const citationOpacity = interpolate(frame, [15, 30], [0, 0.6], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <GradientBackground width={SHORT_WIDTH} height={SHORT_HEIGHT}>
      <ParticleField count={25} width={SHORT_WIDTH} height={SHORT_HEIGHT} />

      {/* Heading */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: headingOpacity,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: COLORS.accentCyan,
            letterSpacing: '-0.02em',
          }}
        >
          {heading}
        </span>
      </div>

      {/* Bullet list — staggered */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '85%',
          display: 'flex',
          flexDirection: 'column',
          gap: 36,
        }}
      >
        {bullets.map((item, i) => {
          const f = frame - 10 - i * 18;
          const opacity = interpolate(f, [0, 15], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.out(Easing.cubic),
          });
          const translateX = interpolate(f, [0, 15], [50, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.out(Easing.cubic),
          });
          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateX(${translateX}px)`,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: COLORS.accentCyan,
                  marginTop: 14,
                  flexShrink: 0,
                  boxShadow: `0 0 14px ${COLORS.particleGlow}`,
                }}
              />
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 600,
                  color: COLORS.textPrimary,
                  lineHeight: 1.45,
                }}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>

      {/* Citation */}
      <div
        style={{
          position: 'absolute',
          bottom: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: citationOpacity,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 500,
            color: COLORS.citationColor,
            fontStyle: 'italic',
          }}
        >
          — {citation}
        </span>
      </div>
    </GradientBackground>
  );
};
