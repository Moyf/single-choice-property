import { readFileSync, writeFileSync } from "fs";

const version = process.argv[2];
if (!version) {
  console.error("Usage: node scripts/version-bump.mjs <version>");
  process.exit(1);
}

for (const file of ["manifest.json", "package.json"]) {
  const json = JSON.parse(readFileSync(file, "utf-8"));
  json.version = version;
  writeFileSync(file, `${JSON.stringify(json, null, 2)}\n`);
}

const versions = JSON.parse(readFileSync("versions.json", "utf-8"));
const manifest = JSON.parse(readFileSync("manifest.json", "utf-8"));
versions[version] = manifest.minAppVersion;
writeFileSync("versions.json", `${JSON.stringify(versions, null, 2)}\n`);
