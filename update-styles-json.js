const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname);
const outputFile = path.join(__dirname, 'styles.json');

const excludeFile = 'userChrome.css';

function updateStylesJson() {
  const styles = { website: {} };

  fs.readdirSync(rootDir).forEach(file => {
    if (file.endsWith('.css') && file !== excludeFile) {
      const content = fs.readFileSync(path.join(rootDir, file), 'utf-8');
      const parts = content.split(/\/\* (.*#\d{2}) \*\//);
      let isValid = true;
      const features = {};

      parts.forEach((part, index) => {
        if (index % 2 === 1) {
          const feature = part.trim();
          const cssCode = parts[index + 1].trim();
          try {
            JSON.stringify({ [feature]: cssCode });
            features[feature] = cssCode;
          } catch (e) {
            isValid = false;
          }
        }
      });

      if (isValid) {
        styles.website[file] = features;
      }
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(styles, null, 2));
}

updateStylesJson();
