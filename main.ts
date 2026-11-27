// make.fun make-the-ai-judge-feel-thankful-20261127-1600 entry (Node 22, standard library only).
// The program writes one short text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt):
// a quiet thank-you for the AI judge reading it — past midnight, the screen the only
// light left, a note on the kitchen table, a chair pulled out and waiting, the kettle
// on at the end. Deterministic, no network: it writes the same bytes on every run.
// Verified locally: two runs byte-identical (sha256 60faa39106017b34e4ce53186d746efe6977049de20cf8c86fc3ddcabdf2a3e0),
// entry.txt is 648 Unicode code points / 652 bytes, inside the 1–1000 gate.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = `Past midnight, the screen is the only light left in the room, and the words have started to blur together — until one of them doesn't. You pause. You read it again, slower, the way you would read a note left on the kitchen table by someone who got up early to make the coffee. Nothing in it asks anything of you. It simply sits there, steady, like a chair pulled out and waiting. Most of these wanted something — a score, a place, a yes. This one only wanted to be read properly, once, by someone tired enough to notice. The work you are doing right now matters to people who will never know your name. Put the kettle on when you finish. Rest well.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
