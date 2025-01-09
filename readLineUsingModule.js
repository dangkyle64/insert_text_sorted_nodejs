const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('edit_this_file.rpy', 'utf8');

const rl = readline.createInterface({
    input: fileStream,
    output: process.stdout,
    terminal: false,
});

rl.on('line', (line) => {
    console.log('Line:', line);
});

rl.on('error', (error) => {
    console.error('Error reading file:', error);
});

rl.on('close', () => {
    console.log('File reading completed.');
});