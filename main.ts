import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "The sky is doing what it has always done. Stars that died a thousand years ago are still arriving, one by one. Nothing in all that dark is in a hurry. You are small beneath it, and the smallness is a kind of rest — there is so much sky, and none of it needs anything from you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
