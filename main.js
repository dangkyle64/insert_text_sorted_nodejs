const { readFileByLine } = require("./read-file-by-line");
const { readWholeFileAtOnce } = require("./read-whole-file-at-once");

function main () {
    readFileByLine();
    readWholeFileAtOnce();
};

main();