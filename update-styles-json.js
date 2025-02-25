const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname);
const outputFile = path.join(__dirname, 'styles.json');

const excludeFile = 'userChrome.css';

function updateStylesJson() {
  const styles = {};

  fs.readdirSync(rootDir).forEach(file => {
    if (file.endsWith('.css') && file !== excludeFile) {
      const content = fs.readFileSync(path.join(rootDir, file), 'utf-8');
      styles[file] = content;
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(styles, null, 2));
}

updateStylesJson();
