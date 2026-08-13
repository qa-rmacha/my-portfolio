const fs = require("fs");
const path = require("path");

const files = ["index.html", "style.css", "script.js", "README.md", "package.json", "resume.pdf"];
const dist = path.join(__dirname, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of files) {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(dist, file));
    console.log("  built " + file);
  }
}
console.log("Build complete -> dist/");
