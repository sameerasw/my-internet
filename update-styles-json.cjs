const fs = require('fs');
const path = require('path');
const { parse } = require('@adobe/css-tools');

const rootDir = path.join(__dirname, 'websites');
const outputFile = path.join(__dirname, 'styles.json');
const excludeFile = 'userChrome.css';

// Check if the output file exists and create it if it doesn't
if (!fs.existsSync(outputFile)) {
  fs.writeFileSync(outputFile, JSON.stringify({ website: {} }, null, 2));
}

function extractFeatures(cssContent) {
  const ast = parse(cssContent);
  const features = {};
  let currentFeature = null;
  let buffer = '';

  ast.stylesheet.rules.forEach(rule => {
    if (rule.type === 'comment') {
      const commentText = rule.comment.trim();
      if (/^@/i.test(commentText)) {
        // Skip descriptive comment
        return;
      }
      // If we had a previous feature and buffered code, save it
      if (currentFeature && buffer.trim()) {
        features[currentFeature] = buffer.trim();
        buffer = '';
      }
      currentFeature = commentText;
    } else if (currentFeature) {
      const ruleStr = cssContent.slice(rule.position.start.offset, rule.position.end.offset);
      buffer += ruleStr + '\n';
    }
  });

  // Add the last buffered feature
  if (currentFeature && buffer.trim()) {
    features[currentFeature] = buffer.trim();
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
