const fs = require('fs');
const path = require('path');

function readWholeFile() {
    fs.readFile('./edit_this_file.rpy', 'utf8', (error, data) => {
        if (error) {
            console.error('Error reading file:', error);
            return;
        } 

        console.log('data:\n', data);
    });
};

readWholeFile();