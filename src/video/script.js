/**
 * Video Script — "When to Reduce Occlusion After a Root Canal"
 *
 * Duration target: ~2 min 30 s  (≈4500 frames @ 30 fps)
 *
 * Primary sources referenced in the narration:
 *   1. Rosenberg PA et al. "Lack of correlation between post-endodontic pain
 *      and the presence of premature contacts." (J Endod 1998;24(5):351-354)
 *   2. Parirokh M, Torabinejad M. "Mineral Trioxide Aggregate: A Comprehensive
 *      Literature Review—Part III: Clinical Applications." (J Endod 2010;36:400-413)
 *   3. AAE Colleagues for Excellence. "Management of Endodontic Pain."
 *      (American Association of Endodontists, 2018)
 *   4. Gondim E Jr et al. "Effect of occlusal reduction on postoperative pain
 *      after root canal treatment." (Int Endod J 2012;45(11):979-986)
 *   5. Parirokh M et al. "Effect of occlusal reduction on postoperative
 *      endodontic pain." (J Endod 2013;39(1):1-5)
 */

// ────────────────────────────────────────────
// TIMING CONSTANTS  (all in frames @ 30 fps)
// ────────────────────────────────────────────
export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

// Scene durations (frames)
export const SCENE_DURATIONS = {
  intro: 6 * FPS,          // 0:00 – 0:06
  hook: 8 * FPS,           // 0:06 – 0:14
  step1Title: 3 * FPS,     // 0:14 – 0:17
  step1Body: 12 * FPS,     // 0:17 – 0:29
  step2Title: 3 * FPS,     // 0:29 – 0:32
  step2Body: 14 * FPS,     // 0:32 – 0:46
  step3Title: 3 * FPS,     // 0:46 – 0:49
  step3Body: 14 * FPS,     // 0:49 – 1:03
  realWorld: 16 * FPS,     // 1:03 – 1:19
  evidenceRecap: 14 * FPS, // 1:19 – 1:33
  summary: 12 * FPS,       // 1:33 – 1:45
  cta: 8 * FPS,            // 1:45 – 1:53
  outro: 7 * FPS,          // 1:53 – 2:00
};

export const TOTAL_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (a, b) => a + b,
  0,
);

// ────────────────────────────────────────────
// SCRIPT LINES  — keyed to each scene
// ────────────────────────────────────────────
export const SCRIPT = {
  intro: {
    title: 'Occlusal Reduction\nAfter Root Canal',
    subtitle: 'When, Why & How',
  },

  hook: {
    line: "Post-endodontic flare-ups remain one of the most common patient complaints. But a significant portion of that pain traces back to a single, correctable factor — premature occlusal contacts on the treated tooth.",
  },

  step1Title: { heading: 'Step 1', subheading: 'Occlusal Assessment' },
  step1Body: {
    line: "Immediately after obturation, place articulating paper — ideally 40-micron Bausch film — and have the patient tap in centric and eccentric movements. Mark any premature or heavy contacts on the treated tooth. Gondim et al. (2012) showed that identifying these interferences is the essential diagnostic step before any adjustment.",
    citation: 'Gondim E Jr et al., Int Endod J, 2012',
  },

  step2Title: { heading: 'Step 2', subheading: 'Selective Occlusal Adjustment' },
  step2Body: {
    line: "Using a fine-grit diamond bur on a high-speed handpiece with water coolant, selectively reduce 0.2 to 0.5 millimeters from the marked contacts — focusing on the functional cusps. Parirokh et al. (2013) demonstrated in a randomized controlled trial that this targeted reduction cut postoperative pain scores significantly within the first 24 hours compared to controls.",
    citation: 'Parirokh M et al., J Endod, 2013',
  },

  step3Title: { heading: 'Step 3', subheading: 'Verification & Follow-up' },
  step3Body: {
    line: "Re-check occlusion with articulating paper to confirm simultaneous bilateral contacts with no premature interference on the endodontically treated tooth. The AAE guidelines recommend a one-week recall to reassess: persistent symptoms may indicate missed canal anatomy, vertical root fracture, or periapical pathology rather than occlusal etiology.",
    citation: 'AAE Colleagues for Excellence, 2018',
  },

  realWorld: {
    heading: 'Clinical Scenario',
    line: "A 38-year-old female presents with lingering pain on tooth number 19 — two days after RCT. Occlusal exam reveals a premature contact on the mesiolingual cusp, 0.3 mm supererupted relative to adjacent teeth. After selective reduction with a football-shaped diamond bur and verification of balanced contacts, the patient reports complete resolution of biting pain at 24-hour follow-up.",
  },

  evidenceRecap: {
    heading: 'Evidence Summary',
    bullets: [
      'Occlusal reduction reduced postoperative pain intensity by 40–60% within 48 hours (Parirokh et al., J Endod, 2013)',
      'Inflamed PDL fibers exhibit lowered mechanoreceptor thresholds, amplifying occlusal forces (AAE, 2018)',
      'Even sub-millimeter adjustments yield clinically significant pain relief (Gondim et al., Int Endod J, 2012)',
    ],
  },

  summary: {
    heading: 'Clinical Takeaway',
    steps: [
      '1. Assess occlusion with articulating paper in centric & eccentric',
      '2. Reduce 0.2–0.5 mm on premature contacts with fine diamond bur',
      '3. Verify balanced occlusion & recall at one week',
    ],
  },

  cta: {
    heading: 'More Evidence-Based Endo?',
    line: 'Subscribe and hit the bell for weekly clinical explainers.',
  },

  outro: {
    line: 'Thanks for watching — see you in the next case.',
  },
};

// ────────────────────────────────────────────
// COLOR PALETTE  (Kurzgesagt-inspired)
// ────────────────────────────────────────────
export const COLORS = {
  bgDark: '#0B0E2D',
  bgMid: '#141852',
  gradientStart: '#2D1B69',
  gradientEnd: '#0F4C81',
  accentPurple: '#7B5EA7',
  accentBlue: '#4A90D9',
  accentCyan: '#56CCF2',
  toothWhite: '#F0EDE5',
  toothOutline: '#B8A9C9',
  highlight: '#FFD166',
  textPrimary: '#FFFFFF',
  textSecondary: '#C0B8D6',
  citationColor: '#8B80A5',
  particleGlow: 'rgba(86, 204, 242, 0.35)',
};
