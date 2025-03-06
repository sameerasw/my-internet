const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, 'websites');
const outputFile = path.join(__dirname, 'styles.json');
const excludeFile = 'userChrome.css';

function updateStylesJson() {
  const styles = JSON.parse(fs.readFileSync(outputFile, 'utf-8')) || { website: {} };

  fs.readdirSync(rootDir).forEach(file => {
    if (file.endsWith('.css') && file !== excludeFile) {
      const content = fs.readFileSync(path.join(rootDir, file), 'utf-8');
      const parts = content.split(/\/\* (.*?) \*\//);
      let isValid = true;
      const features = {};

      for (let index = 1; index < parts.length; index += 2) {
        const feature = parts[index]?.trim();
        const cssCode = parts[index + 1]?.trim();

        if (feature && cssCode) {
          try {
            JSON.stringify({ [feature]: cssCode });
            features[feature] = cssCode;
          } catch (e) {
            isValid = false;
            break;
          }
        }
      }

      if (isValid && Object.keys(features).length > 0) {
        styles.website[file] = features;
      }
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(styles, null, 2));
}

updateStylesJson();
