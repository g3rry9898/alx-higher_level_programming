#!/usr/bin/node

const arg = process.argv[2];
const parsedInt = parseInt(arg, 10);

if (!isNaN(parsedInt)) {
    console.log(`My number: ${parsedInt}`);
} else {
    console.log("Not a number");
}

