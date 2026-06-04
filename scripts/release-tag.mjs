import { readFileSync } from "fs";
import { execFileSync } from "child_process";

const manifest = JSON.parse(readFileSync("manifest.json", "utf-8"));
execFileSync("git", ["tag", manifest.version], { stdio: "inherit" });
