#!/usr/bin/node

function createIncrementer() {
  let n = 0; // Initialize the counter

  // Return a function that increments and returns the current value
  return function (incrementBy) {
    n += incrementBy;
    return n;
  };
}

// Usage:
const incrementer = createIncrementer();
console.log(incrementer(1)); // 1
console.log(incrementer(2)); // 3
console.log(incrementer(3)); // 6

