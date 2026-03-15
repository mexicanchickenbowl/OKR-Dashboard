import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { COLORS } from '../script';

/**
 * SVG molar cross-section — hand-drawn style with animated highlights.
 * Shows crown, roots, canals, and optional "high spot" marker.
 */
export const ToothDiagram = ({
  scale = 1,
  x = 960,
  y = 540,
  showHighSpot = false,
  showBur = false,
  showArticulatingPaper = false,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const f = frame - delay;

  const drawIn = interpolate(f, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const highSpotPulse = interpolate(
    Math.sin(f * 0.12),
    [-1, 1],
    [0.6, 1],
  );

  if (f < 0) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${scale * drawIn})`,
        opacity: drawIn,
      }}
    >
      <svg width="320" height="400" viewBox="0 0 320 400">
        {/* Crown */}
        <path
          d="M80 160 Q80 60 160 50 Q240 60 240 160 L240 200 L80 200 Z"
          fill={COLORS.toothWhite}
          stroke={COLORS.toothOutline}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Cusps */}
        <path
          d="M95 160 Q110 120 130 155 Q150 110 170 155 Q190 120 210 155 Q225 120 235 160"
          fill="none"
          stroke={COLORS.toothOutline}
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Root body */}
        <path
          d="M100 200 L90 310 Q100 350 120 340 L140 200 Z"
          fill={COLORS.toothWhite}
          stroke={COLORS.toothOutline}
          strokeWidth="3"
        />
        <path
          d="M180 200 L200 310 Q210 350 220 340 L230 200 Z"
          fill={COLORS.toothWhite}
          stroke={COLORS.toothOutline}
          strokeWidth="3"
        />

        {/* Root canals (pink/red) */}
        <path
          d="M115 200 L108 300"
          fill="none"
          stroke="#E87F7F"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M200 200 L210 300"
          fill="none"
          stroke="#E87F7F"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Pulp chamber */}
        <ellipse
          cx="160"
          cy="180"
          rx="30"
          ry="18"
          fill="#E87F7F"
          opacity="0.6"
        />

        {/* Articulating paper mark (high spot) */}
        {showHighSpot && (
          <g opacity={highSpotPulse}>
            <ellipse
              cx="145"
              cy="82"
              rx="18"
              ry="6"
              fill={COLORS.highlight}
            />
            <text
              x="145"
              y="65"
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              fill={COLORS.highlight}
            >
              HIGH SPOT
            </text>
          </g>
        )}

        {/* Articulating paper strip */}
        {showArticulatingPaper && (
          <g>
            <rect
              x="60"
              y="42"
              width="200"
              height="8"
              rx="2"
              fill="#1A1AE0"
              opacity="0.8"
            />
            <text
              x="160"
              y="35"
              textAnchor="middle"
              fontSize="14"
              fontWeight="600"
              fill={COLORS.accentBlue}
            >
              ARTICULATING PAPER
            </text>
          </g>
        )}

        {/* Diamond bur */}
        {showBur && (
          <g>
            <line
              x1="200"
              y1="10"
              x2="155"
              y2="75"
              stroke="#C0C0C0"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <polygon
              points="155,75 148,90 162,90"
              fill="#A0A0B0"
              stroke="#808090"
              strokeWidth="1"
            />
            {/* Sparks */}
            {[0, 1, 2].map((i) => {
              const sparkOpacity = interpolate(
                Math.sin(f * 0.3 + i * 2),
                [-1, 1],
                [0, 1],
              );
              return (
                <circle
                  key={i}
                  cx={155 + Math.cos(f * 0.2 + i) * 12}
                  cy={85 + Math.sin(f * 0.2 + i) * 8}
                  r="2"
                  fill={COLORS.highlight}
                  opacity={sparkOpacity}
                />
              );
            })}
          </g>
        )}
      </svg>
    </div>
  );
};
