#!/usr/bin/node

function executeXTimes(x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}

// Example usage:
function myFunction() {
    console.log("Hello, world!");
}

executeXTimes(5, myFunction); // Calls myFunction 5 times

