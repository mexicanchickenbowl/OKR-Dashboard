/**
 * Short-Form Video Script — "Occlusal Reduction: 60-Second Evidence Breakdown"
 *
 * Duration target: ~60 s (1800 frames @ 30 fps)
 * Format: 1080 × 1920 (9:16 vertical — TikTok / Instagram Reels)
 * Audience: Dental students and practicing clinicians
 */

export const SHORT_FPS = 30;
export const SHORT_WIDTH = 1080;
export const SHORT_HEIGHT = 1920;

// Scene durations (frames)
export const SHORT_SCENE_DURATIONS = {
  hook: 8 * SHORT_FPS,          // 0:00 – 0:08
  evidence: 20 * SHORT_FPS,     // 0:08 – 0:28
  whoBenefits: 20 * SHORT_FPS,  // 0:28 – 0:48
  takeaway: 12 * SHORT_FPS,     // 0:48 – 1:00
};

export const SHORT_TOTAL_FRAMES = Object.values(SHORT_SCENE_DURATIONS).reduce(
  (a, b) => a + b,
  0,
);

// ────────────────────────────────────────────
// SCRIPT LINES — 4 scenes, stats-focused
// ────────────────────────────────────────────
export const SHORT_SCRIPT = {
  hook: {
    line: 'Occlusal reduction after root canal\ncuts pain by 40% —\nbut only if you pick the right patient.',
  },

  evidence: {
    heading: 'The Evidence',
    bullets: [
      '308-patient RCT (Ahmed et al., 2020)',
      '1–1.5 mm cusp reduction → 40% less moderate-to-severe pain at 12 h',
      'Two meta-analyses: zero benefit when done on every patient',
      'Benefit is entirely in one subgroup',
    ],
    citation: 'Ahmed YE et al., Int Endod J, 2020',
  },

  whoBenefits: {
    heading: 'Who Benefits',
    bullets: [
      'Symptomatic irreversible pulpitis',
      'Vital pulp',
      'Percussion sensitivity',
      'No periapical radiolucency',
    ],
    subline:
      'Inflamed PDL mechanoreceptors → normal bite forces exceed the pain threshold. Remove occlusion, remove the trigger.',
    citation: 'Rosenberg PA et al., J Endod, 1998',
  },

  takeaway: {
    heading: 'Three-Step Checklist',
    steps: [
      '1. Screen: vital pulp + percussion + no radiolucency',
      '2. Reduce 1–1.5 mm on functional cusps before dam',
      '3. Verify out-of-occlusion → restore within 2–4 wks',
    ],
  },
};
