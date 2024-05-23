#!/usr/bin/node

const fs = require('fs');
const fetch = require('node-fetch');

async function fetchAndSaveWebpage(url, filePath) {
    try {
        const response = await fetch(url);
        const content = await response.text();

        if (response.ok) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Webpage content saved to ${filePath}`);
        } else {
            console.error(`Error fetching webpage: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Usage: node fetch_and_save.js <url> <file_path>
if (process.argv.length !== 4) {
    console.error('Usage: node fetch_and_save.js <url> <file_path>');
    process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];
fetchAndSaveWebpage(url, filePath);

