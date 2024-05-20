#!/usr/bin/node

function findSecondLargest(...args) {
    const integers = args.map(Number).filter(Number.isInteger);
    const sortedIntegers = integers.sort((a, b) => b - a);
    return sortedIntegers[1] || 0;
}

console.log(findSecondLargest(...process.argv.slice(2)));

