#!/usr/bin/node

async function getStatusFromUrl('https://alx-intranet.hbtn.io/status') {
    try {
        const response = await fetch('https://alx-intranet.hbtn.io/status');

        if (response.ok) {
            // Successful response (status code 200)
            console.log(`code: ${200}`);
        } else {
            // Handle other status codes (e.g., 404, 500, etc.)
            console.error(`Error: ${404} `);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Usage: node get_status.js <url>
if (process.argv.length !== 3) {
    console.error('Usage: node get_status.js <url>');
    process.exit(1);
}

const url = process.argv[2];
getStatusFromUrl(url);

