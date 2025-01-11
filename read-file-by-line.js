const fs = require('fs');
const readline = require('readline');

// function opens a stream to read the test file in UTF-8 encoding 
// logs the text data line read from the test file on success
// logs an error message on failure
function readFileByLine() {
    const fileStream = fs.createReadStream('edit-this-file.rpy', 'utf8');

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
};

module.exports = { readFileByLine };
//readFileByLine();