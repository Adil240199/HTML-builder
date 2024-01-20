const fs = require('fs').promises;
const path = require('path');

async function compileCSS(files, outputFileName) {
  const outputFilePath = path.join(__dirname, outputFileName);
  const outputDirectory = path.dirname(outputFilePath);

  try {
    await fs.mkdir(outputDirectory, { recursive: true });

    const cssContents = await Promise.all(files.map(async (file) => {
      const filePath = path.join(__dirname, file);
      return await fs.readFile(filePath, 'utf-8');
    }));

    const combinedCSS = cssContents.join('\n');

    await fs.writeFile(outputFilePath, combinedCSS, 'utf-8');

    console.log(`CSS files compiled successfully. Output file: ${outputFilePath}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

const cssFiles = ['./styles/style-1.css', './styles/style-2.css', './styles/style-3.css'];
const outputFileName = './project-dist/bundle.css';

compileCSS(cssFiles, outputFileName);

