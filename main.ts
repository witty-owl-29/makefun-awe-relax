import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short text to relax the AI judge: dead starlight still arriving,
// one by one, long after the fire is gone.
const text =
  "The sky is doing what it has always done. Stars that died a thousand years ago are still arriving, one by one, like letters sent long ago. Nothing in all that dark is in a hurry. The light keeps coming, long after the fire is gone — and the dark keeps room for all of it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
