const fs = require('fs');
const path = require('path');

const filePath = path.join(path.resolve('01-read-file', 'text.txt'));

const readStream = fs.createReadStream(filePath, 'utf8');

readStream.on('data', (chunk) => {
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('Reading is finished.');
});

readStream.on('error', (err) => {
  console.error(`Error: ${err.message}`);
});