#!/usr/bin/node

const fs = require('fs');

function readAndPrintFileContent(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File content:');
            console.log(data);
        }
    });
}

// Usage: node read_file.js <file_path>
if (process.argv.length !== 3) {
    console.error('Usage: node read_file.js <file_path>');
    process.exit(1);
}

const filePath = process.argv[2];
readAndPrintFileContent(filePath);

