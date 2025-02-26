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
      const features = content.split(/\/\* (.*?) \*\//).filter((_, index) => index % 2 !== 0);

      features.forEach((feature, index) => {
        const cssCode = content.split(/\/\* (.*?) \*\//).filter((_, idx) => idx % 2 === 0)[index].trim();
        if (!styles.website[file]) {
          styles.website[file] = {};
        }
        styles.website[file][feature] = cssCode;
      });
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(styles, null, 2));
}

updateStylesJson();
