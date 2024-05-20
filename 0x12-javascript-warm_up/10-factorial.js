#!/usr/bin/node

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const input = parseInt(process.argv[2], 10);

if (!isNaN(input)) {
    console.log(`Factorial of ${input} is ${factorial(input)}`);
} else {
    console.log("Invalid input. Please provide a valid integer.");
}

