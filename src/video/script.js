/**
 * Video Script — "When to Reduce Occlusion After a Root Canal"
 *
 * Duration target: ~2 min 30 s  (≈4500 frames @ 30 fps)
 * Audience: Dental students and practicing clinicians
 *
 * Primary sources referenced in the narration:
 *   1. Rosenberg PA et al. "The effect of occlusal reduction on pain after
 *      endodontic instrumentation." (J Endod 1998;24(7):492-496)
 *      — Foundational RCT; defined the patient profile for selective reduction.
 *   2. Ahmed YE et al. "Post-treatment endodontic pain following occlusal
 *      reduction in mandibular posterior teeth with symptomatic irreversible
 *      pulpitis and sensitivity to percussion." (Int Endod J 2020;53(9):1170-1180)
 *      — 308-patient RCT; 40% reduction in moderate-to-severe pain at 12 h.
 *   3. AAE Pain Control resource page — endorses occlusal reduction as
 *      "an evidence-based pain preventive strategy."
 *      (https://www.aae.org/specialty/pain-control/)
 *   4. Nguyen-Nhon T et al. "Effect of occlusal reduction on postendodontic
 *      pain: A systematic review and meta-analysis." (Aust Endod J 2020;46(2):282-294)
 *   5. Sponchiado EC Jr et al. "Influence of occlusal reduction on pain after
 *      endodontic treatment: a systematic review and meta-analysis."
 *      (Sci Rep 2021;11:13882)
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
    line: "Occlusal reduction after root canal therapy is endorsed by the AAE as an evidence-based pain preventive strategy — but it is not indicated for every case. The key is patient selection. Let's break down who benefits, how to do it, and what the evidence actually shows.",
  },

  step1Title: { heading: 'Step 1', subheading: 'Patient Selection' },
  step1Body: {
    line: "Not every endodontic patient needs occlusal reduction. Rosenberg et al. in their landmark 1998 J-Endod RCT defined the ideal candidate: symptomatic irreversible pulpitis, a vital pulp, preoperative pain with percussion sensitivity, and the absence of a periapical radiolucency. When applied indiscriminately, meta-analyses show the benefit disappears — patient selection is everything.",
    citation: 'Rosenberg PA et al., J Endod, 1998',
  },

  step2Title: { heading: 'Step 2', subheading: 'Technique & Reduction' },
  step2Body: {
    line: "Before rubber dam placement, mark centric and excursive contacts with articulating paper. Using a football-shaped diamond bur, reduce functional cusp tips by one to one-and-a-half millimeters — the goal is to take the tooth completely out of occlusion. Ahmed et al.'s 2020 RCT of 308 patients showed this reduced moderate-to-severe pain by approximately 40 percent at 12 hours post-instrumentation.",
    citation: 'Ahmed YE et al., Int Endod J, 2020',
  },

  step3Title: { heading: 'Step 3', subheading: 'Verify & Restore' },
  step3Body: {
    line: "After temporary restoration, re-check with articulating paper: the treated tooth should show no marks or very light contact while adjacent teeth show normal occlusion. Inform the patient the bite will feel open — that is intentional. Schedule definitive cuspal coverage within two to four weeks. Persistent pain at recall warrants investigation for missed canals, VRF, or periapical pathology.",
    citation: 'AAE Pain Control Guidelines',
  },

  realWorld: {
    heading: 'Clinical Scenario',
    line: "A 38-year-old female with symptomatic irreversible pulpitis on tooth number 19 — vital on cold test, positive to percussion, no periapical radiolucency. She fits the Rosenberg profile. Before isolating, you reduce 1.2 millimeters from the ML and DB cusps with a football diamond. After single-visit RCT and IRM temporary, she reports a VAS of 2 out of 10 at 24 hours — compared to a pre-op VAS of 8.",
  },

  evidenceRecap: {
    heading: 'Evidence Summary',
    bullets: [
      '40% reduction in moderate-to-severe pain at 12 h in selected patients (Ahmed et al., Int Endod J, 2020; n=308)',
      'Inflamed PDL mechanoreceptors have lowered thresholds — normal forces exceed the pain threshold (AAE)',
      'Meta-analyses confirm benefit in vital pulps with percussion sensitivity; no benefit when applied universally (Sponchiado et al., Sci Rep, 2021)',
    ],
  },

  summary: {
    heading: 'Clinical Takeaway',
    steps: [
      '1. Screen: vital pulp + percussion sensitivity + no radiolucency → proceed',
      '2. Reduce 1–1.5 mm on functional cusps before rubber dam placement',
      '3. Verify out-of-occlusion, restore definitively within 2–4 weeks',
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
