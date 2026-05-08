import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildTheme, lightTheme, darkTheme } from "./theme.source.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const variants = [
  {
    name: "Hush Light",
    file: "Hush-light-color-theme.json",
    tokens: lightTheme,
  },
  {
    name: "Hush Dark",
    file: "Hush-dark-color-theme.json",
    tokens: darkTheme,
  },
];

for (const v of variants) {
  const outPath = path.resolve(__dirname, "../themes/", v.file);
  fs.writeFileSync(
    outPath,
    JSON.stringify(buildTheme(v.name, v.tokens), null, 2),
  );
  console.log(`Built theme → ${outPath}`);
}
