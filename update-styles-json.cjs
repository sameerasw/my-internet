const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

const rootDir = path.join(__dirname, 'websites');
const outputFile = path.join(__dirname, 'styles.json');
const excludeFile = 'userChrome.css';

// Create output file if it doesn't exist
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
        // Skip @ comments but keep collecting under current feature
        return;
      }
      // Save previous feature if exists
      if (currentFeature && buffer.length > 0) {
        features[currentFeature] = buffer
          .map(n => nodeToCleanString(n))
          .join('\n')
          .trim();
        buffer = [];
      }
      currentFeature = node.text.trim();
    } else if (currentFeature) {
      buffer.push(node);
    }
  });

  // Final flush
  if (currentFeature && buffer.length > 0) {
    features[currentFeature] = buffer
      .map(n => nodeToCleanString(n))
      .join('\n')
      .trim();
  }

  return features;
}

// Helper to stringify a node while removing inline @ comments
function nodeToCleanString(node) {
  if (node.type === 'rule' || node.type === 'atrule') {
    const clone = node.clone();

    // Remove @ inline comments inside declarations
    if (clone.nodes) {
      clone.nodes = clone.nodes.filter(n => {
        return !(n.type === 'comment' && /^@/.test(n.text.trim()));
      });
    }

    return clone.toString();
  }

  // If it's a comment starting with @, skip it entirely
  if (node.type === 'comment' && /^@/.test(node.text.trim())) {
    return '';
  }

  return node.toString();
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
