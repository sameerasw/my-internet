const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

const rootDir = path.join(__dirname, 'websites');
const outputFile = path.join(__dirname, 'styles.json');
const excludeFile = 'userChrome.css';

// Create output file if doesn't exist
if (!fs.existsSync(outputFile)) {
  fs.writeFileSync(outputFile, JSON.stringify({ website: {} }, null, 2));
}

function extractFeatures(cssContent) {
  const root = postcss.parse(cssContent);
  const features = {};
  let currentFeature = null;
  let buffer = [];

  root.nodes.forEach(node => {
  if (node.type === 'comment') {
    if (/^@/.test(node.text.trim())) {
      // Skip @ comments but keep the current feature context intact
      return;
    }
    // When encountering a new comment (non-@), save old feature buffer and start a new feature
    if (currentFeature && buffer.length > 0) {
      features[currentFeature] = buffer.map(n => n.toString()).join('\n').trim();
      buffer = [];
    }
    currentFeature = node.text.trim();
  } else if (currentFeature) {
    buffer.push(node);
  }
});

  // Add the last buffered feature
  if (currentFeature && buffer.length > 0) {
    features[currentFeature] = buffer.map(n => n.toString()).join('\n').trim();
  }

  return features;
}

function updateStylesJson() {
  const styles = JSON.parse(fs.readFileSync(outputFile, 'utf-8')) || { website: {} };

  fs.readdirSync(rootDir).forEach(file => {
    if (file.endsWith('.css') && file !== excludeFile) {
      const content = fs.readFileSync(path.join(rootDir, file), 'utf-8');
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
