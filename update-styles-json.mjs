import fs from "fs";
import path from "path";
import postcss from "postcss";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, "websites");
const outputFile = path.join(__dirname, "styles.json");
const excludeFile = "userChrome.css";

// Create output file if it doesn't exist
if (!fs.existsSync(outputFile)) {
  fs.writeFileSync(outputFile, JSON.stringify({ website: {} }, null, 2));
}

function extractFeatures(cssContent) {
  const root = postcss.parse(cssContent);
  const features = {};
  let currentFeature = null;
  let buffer = [];

  root.nodes.forEach((node) => {
    if (node.type === "comment") {
      if (/^@/.test(node.text.trim())) return;
      if (currentFeature && buffer.length > 0) {
        features[currentFeature] = buffer
          .map((n) => nodeToCleanString(n))
          .join("\n")
          .trim();
        buffer = [];
      }
      currentFeature = node.text.trim();
    } else if (currentFeature) {
      buffer.push(node);
    }
  });

  if (currentFeature && buffer.length > 0) {
    features[currentFeature] = buffer
      .map((n) => nodeToCleanString(n))
      .join("\n")
      .trim();
  }

  return features;
}

function nodeToCleanString(node) {
  if (node.type === "rule" || node.type === "atrule") {
    const clone = node.clone();
    if (clone.nodes) {
      clone.nodes = clone.nodes.filter((n) => n.type !== "comment");
    }
    if (clone.selector) {
      clone.selector = clone.selector
        .replace(/\/\*[^*]*\*\//g, "")
        .replace(/\s*,\s*,/g, ",")
        .replace(/\s+/g, " ")
        .trim();
    }
    return clone.toString();
  }

  if (node.type === "comment") {
    return "";
  }

  return node.toString();
}

function updateStylesJson() {
  const styles = JSON.parse(fs.readFileSync(outputFile, "utf-8")) || { website: {} };

  fs.readdirSync(rootDir).forEach((file) => {
    if (file.endsWith(".css") && file !== excludeFile) {
      const content = fs.readFileSync(path.join(rootDir, file), "utf-8");
      try {
        const features = extractFeatures(content);
        if (Object.keys(features).length > 0) {
          styles.website[file] = features;
        }
      } catch (err) {
        console.error(`Failed to parse ${file}:`, err.message);
      }
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(styles, null, 2));
}

updateStylesJson();
