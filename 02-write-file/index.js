const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fileStream = fs.createWriteStream('./02-write-file/output.txt', { flags: 'a' });

console.log('Welcome to the console input writer!');

rl.on('line', (input) => {
  fileStream.write(`${input}\n`);
});

rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
