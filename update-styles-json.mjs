import fs from "fs";
import path from "path";
import postcss from "postcss";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, "websites");
const outputFile = path.join(__dirname, "styles.json");
const mappingFile = path.join(__dirname, "css-mapping.json");
const excludeFile = "userChrome.css";

// Create output file if it doesn't exist
if (!fs.existsSync(outputFile)) {
  fs.writeFileSync(outputFile, JSON.stringify({ website: {}, mapping: {} }, null, 2));
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
  // Read mapping data from css-mapping.json (or use empty object)
  let mapping = {};
  if (fs.existsSync(mappingFile)) {
    try {
      mapping = JSON.parse(fs.readFileSync(mappingFile, "utf-8"));
    } catch (err) {
      console.error("Failed to parse css-mapping.json:", err.message);
      mapping = {};
    }
  }

  // Prepare website data
  const website = {};
  fs.readdirSync(rootDir).forEach((file) => {
    if (file.endsWith(".css") && file !== excludeFile) {
      const content = fs.readFileSync(path.join(rootDir, file), "utf-8");
      try {
        const features = extractFeatures(content);
        if (Object.keys(features).length > 0) {
          website[file] = features;
        }
      } catch (err) {
        console.error(`Failed to parse ${file}:`, err.message);
      }
    }
  });

  // Write combined output
  const output = {
    website,
    mapping,
  };
  fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));
}

updateStylesJson();
