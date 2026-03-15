/**
 * ElevenLabs Voiceover Generator
 *
 * Generates a calm, professional narration audio file from the video script.
 * Outputs individual scene audio files + a combined voiceover track.
 *
 * Usage:
 *   ELEVEN_LABS_API_KEY=your_key node src/video/generate-voiceover.js
 *
 * The generated audio files are placed in public/audio/ and referenced
 * by the Remotion composition via <Audio> tags.
 */

import fs from 'node:fs';
import path from 'node:path';
import { SCRIPT } from './script.js';

const API_KEY = process.env.ELEVEN_LABS_API_KEY;
if (!API_KEY) {
  console.error(
    'Error: Set ELEVEN_LABS_API_KEY environment variable.\n' +
      'Get your key at https://elevenlabs.io → Profile → API Keys',
  );
  process.exit(1);
}

// ── Config ────────────────────────────────────────────────────────────
// "Daniel" — calm, authoritative male voice well-suited for medical content.
// Replace with any ElevenLabs voice_id you prefer.
const VOICE_ID = 'onwK4e9ZLuTAKqWW03F9'; // Daniel
const MODEL_ID = 'eleven_multilingual_v2';
const OUTPUT_DIR = path.resolve('public', 'audio');

const VOICE_SETTINGS = {
  stability: 0.72,
  similarity_boost: 0.78,
  style: 0.15,
  use_speaker_boost: true,
};

// ── Script → narration text per scene ─────────────────────────────────
function buildNarrationSegments() {
  const segments = [];

  const add = (key, text) => {
    if (text && text.trim()) segments.push({ key, text: text.trim() });
  };

  add('intro', 'Occlusal Reduction After Root Canal. When, Why, and How.');
  add('hook', SCRIPT.hook.line);
  add('step1Title', `Step one. ${SCRIPT.step1Title.subheading}.`);
  add('step1Body', SCRIPT.step1Body.line);
  add('step2Title', `Step two. ${SCRIPT.step2Title.subheading}.`);
  add('step2Body', SCRIPT.step2Body.line);
  add('step3Title', `Step three. ${SCRIPT.step3Title.subheading}.`);
  add('step3Body', SCRIPT.step3Body.line);
  add('realWorld', SCRIPT.realWorld.line);
  add(
    'evidenceRecap',
    `${SCRIPT.evidenceRecap.heading}. ${SCRIPT.evidenceRecap.bullets.join('. ')}.`,
  );
  add(
    'summary',
    `${SCRIPT.summary.heading}. ${SCRIPT.summary.steps.join('. ')}.`,
  );
  add('cta', `${SCRIPT.cta.heading} ${SCRIPT.cta.line}`);
  add('outro', SCRIPT.outro.line);

  return segments;
}

// ── ElevenLabs TTS call ───────────────────────────────────────────────
async function synthesize(text, outputPath) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY,
      'Content-Type': 'application/json',
      Accept: 'audio/mpeg',
    },
    body: JSON.stringify({
      text,
      model_id: MODEL_ID,
      voice_settings: VOICE_SETTINGS,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`ElevenLabs API error (${res.status}): ${err}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
  console.log(`  ✓ ${path.basename(outputPath)} (${buffer.length} bytes)`);
}

// ── Main ──────────────────────────────────────────────────────────────
async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const segments = buildNarrationSegments();
  console.log(`Generating ${segments.length} voiceover segments…\n`);

  for (const { key, text } of segments) {
    const outFile = path.join(OUTPUT_DIR, `vo-${key}.mp3`);
    await synthesize(text, outFile);
    // Small delay to stay within rate limits
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log('\nDone! Audio files are in', OUTPUT_DIR);
  console.log(
    'To preview the video with voiceover, run: npm run remotion:preview',
  );
}

main().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
