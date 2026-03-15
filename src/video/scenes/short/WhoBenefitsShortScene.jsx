import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { GradientBackground } from '../../components/GradientBackground';
import { ParticleField } from '../../components/ParticleField';
import { ToothDiagram } from '../../components/ToothDiagram';
import { COLORS } from '../../script';
import { SHORT_WIDTH, SHORT_HEIGHT, SHORT_SCRIPT } from '../../script-short';

export const WhoBenefitsShortScene = () => {
  const frame = useCurrentFrame();
  const { heading, bullets, subline, citation } = SHORT_SCRIPT.whoBenefits;

  const headingOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const sublineOpacity = interpolate(frame, [75, 90], [0, 0.9], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const citationOpacity = interpolate(frame, [20, 35], [0, 0.6], {
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
          top: '8%',
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

      {/* Criteria checklist */}
      <div
        style={{
          position: 'absolute',
          top: '28%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '85%',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        {bullets.map((item, i) => {
          const f = frame - 8 - i * 15;
          const opacity = interpolate(f, [0, 12], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.out(Easing.cubic),
          });
          const scale = interpolate(f, [0, 12], [0.85, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.out(Easing.back(1.5)),
          });
          // Checkmark appears after text
          const checkOpacity = interpolate(f, [10, 18], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });
          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `scale(${scale})`,
                display: 'flex',
                alignItems: 'center',
                gap: 20,
              }}
            >
              <span
                style={{
                  fontSize: 36,
                  opacity: checkOpacity,
                  color: COLORS.highlight,
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontSize: 38,
                  fontWeight: 700,
                  color: COLORS.textPrimary,
                  lineHeight: 1.35,
                }}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>

      {/* Tooth diagram in the middle */}
      <ToothDiagram
        scale={0.65}
        x={540}
        y={1100}
        showHighSpot
        showArticulatingPaper
        delay={10}
      />

      {/* Explanation subline */}
      <div
        style={{
          position: 'absolute',
          top: '78%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: sublineOpacity,
          textAlign: 'center',
          width: '85%',
        }}
      >
        <span
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: COLORS.textSecondary,
            lineHeight: 1.5,
          }}
        >
          {subline}
        </span>
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
