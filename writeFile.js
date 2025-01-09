const fs = require('node:fs/promises');

fileLocation = './edit_this_file.rpy';

async function writeFile(content) {
    try {
        await fs.appendFile(fileLocation, content);
        console.log('Successful write.')
    } catch(error) {
        console.log(error);
    }
}

module.exports = { writeFile }
writeFile('Cookies');


