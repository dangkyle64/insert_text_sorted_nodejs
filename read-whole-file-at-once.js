const fs = require('fs');
const path = require('path');

// function reads the hardcoded test file in UTF-8 encoding 
// returns the text data read from the test file on success, logging it into the console
// returns an error message in the console on failure to read from file 
function readWholeFileAtOnce() {
    fs.readFile('./edit_this_file.rpy', 'utf8', (error, data) => {
        if (error) {
            console.error('Error reading file:', error);
            return;
        } 

        console.log('data:\n', data);
    });
};

readWholeFileAtOnce();