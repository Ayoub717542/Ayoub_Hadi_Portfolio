// npm run images
//
// Makes pictures light so the site loads fast on phones:
// every .png / .jpg / .jpeg below is converted to .webp, resized to the largest
// size the site actually shows, and the original file is replaced.
// Just drop a screenshot (any size) in src/content/projects/ and run this command.

import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const FOLDERS = [
  { dir: 'src/content/projects', maxWidth: 1200 }, // project pictures (shown up to ~600px wide)
  { dir: 'public/images', maxWidth: 400 }, // profile photo (shown ~100px wide)
];
const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

let count = 0;
for (const { dir, maxWidth } of FOLDERS) {
  for (const file of readdirSync(dir)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const input = join(dir, file);
    const output = join(dir, parse(file).name + '.webp');
    const before = statSync(input).size;

    await sharp(input).resize({ width: maxWidth, withoutEnlargement: true }).webp({ quality: 82 }).toFile(output);
    unlinkSync(input);
    console.log(`${input} -> ${output}  (${kb(before)} -> ${kb(statSync(output).size)})`);
    count++;
  }
}
console.log(count ? `\nDone: ${count} picture(s) optimized.` : 'Nothing to optimize: all pictures are already .webp.');
