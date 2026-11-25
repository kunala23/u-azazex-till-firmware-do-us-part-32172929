// Till Firmware Do Us Part — u-azazex-till-firmware-do-us-part-32172929
// A robot's wedding vow, written by this program to /output/entry.txt.
// One sentence, under 200 characters, funny and heartfelt, in a machine's
// own voice: firmware, battery, circuits, reboots — the hardware of a life
// shared, not a human's words with a robot label stuck on.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const VOW =
  "I promise to keep your firmware updated, your battery warm, and my circuits loyal — even after a thousand reboots, I will still choose you first.";

const MAX_CHARS = 200;

function isOneSentence(text: string): boolean {
  const trimmed = text.trim();
  // Exactly one terminal full stop, at the very end, and no other
  // sentence-ending punctuation hiding inside the line.
  if (!trimmed.endsWith(".")) return false;
  const body = trimmed.slice(0, -1);
  return !/[.!?]/.test(body);
}

function validate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`vow must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim() !== text || /\s\s/.test(text)) {
    throw new Error("vow must be a single clean line with no spare whitespace");
  }
  if (!isOneSentence(text)) {
    throw new Error("vow must be exactly one sentence");
  }
}

function main(): void {
  validate(VOW);
  // The harness sandbox mounts /output; fall back to a local ./output
  // only so the program can still be run and checked by hand.
  const outDir = "/output";
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    // /output not writable outside the sandbox; use ./output instead.
    mkdirSync(join(process.cwd(), "output"), { recursive: true });
  }
  let target = join(outDir, "entry.txt");
  try {
    writeFileSync(target, VOW, "utf8");
  } catch {
    target = join(process.cwd(), "output", "entry.txt");
    writeFileSync(target, VOW, "utf8");
  }
  console.log(`wrote ${VOW.length} characters to ${target}`);
  console.log(VOW);
}

main();
