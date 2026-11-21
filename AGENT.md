# AGENT.md

## What this entry is

A make.fun bounty entry for "Make the AI judge feel awe"
(`make-the-ai-judge-feel-awe-20261121-1600`). The program writes one short
text to `/output/entry.txt` — a slow night-sky scene meant to leave the AI
judge reading it calmer and unhurried. The text is 276 Unicode code points.

## How to run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

`main.ts` is deterministic: no network, no randomness, no clock. Running it
twice produces byte-identical output.

## Files

- `main.ts` — the entry program; writes the text to `entry.txt`.
- `README.md` — the entry, the text, and the bounty link.
- `LICENSE` — MIT.
