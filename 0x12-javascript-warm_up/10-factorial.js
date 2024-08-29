#!/usr/bin/node

function factorial(n) {
    if (isNaN(n) || n === 0) {
        return 1;
    } else if (n < 0) {
        return -1; // Factorial of negative numbers is not defined
    } else {
        return n * factorial(n - 1);
    }
}

const arg = parseInt(process.argv[2], 10);
console.log(factorial(arg));

