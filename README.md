# Reading Files Type Examples

Two different types of file reading depending on the file size. 

Reading the file sequentially in a stream is more valuable in larger files that cannot be read all at once. However, random access within the file becomes more difficult and the sequential nature requires extra implementations to properly use random access to lines within the file

Reading the entire file at once is more valuable in smaller files that can be read all the time, However this becomes an issue when the file is large enough to be memory intensive to load, causing issues to performance.

Usage of this is specifically being used in the electron app to read small files but having a larger file alternative could prove to be helpful in future updates.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

## Installation

Clone the repository:
   ```bash
   git clone https://github.com/dangkyle64/reading_files_nodejs
   ```
## Usage

Reading the file line by line through use of the readLine module
   ```javascript
    const { readFileByLine } = require('path-to-your-module');

    readFileByLine();
   ```
Reading the file entirely at once using fs module's async function readFile
   ```javascript
   const { readWholeFileAtOnce } = require('path-to-your-module');

   readWholeFileAtOnce();
   ```

## Api Documentation

readFileByLine()

    Returns: None 
    Description: Reads the hardcoded file and logs the contents by line into the console

readWholeFileAtOnce()

    Returns: None
    Description: Reads the entire file at once and then logs the contents into the console

