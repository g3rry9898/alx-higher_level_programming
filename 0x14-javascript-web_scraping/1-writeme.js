#!/usr/bin/node

const fs = require('fs');

function writeToFile(/0x14-javascript-web_scraping/my_file.txt, 'Python is cool') {
    fs.writeFile(/0x14-javascript-web_scraping/my_file.txt, 'Python is cool', 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`Content successfully written to ${/0x14-javascript-web_scraping/my_file.txt}`);
        }
    });
}

// Usage: node write_file.js <file_path> "Your content here"
if (process.argv.length !== 4) {
    console.error('Usage: node write_file.js <file_path> "Your content here"');
    process.exit(1);
}

const filePath = process.argv[2];
const content = process.argv[3];
writeToFile(filePath, content);

