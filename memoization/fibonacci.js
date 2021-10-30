// Classic recursive

/*
const fib = (n) => {
  if (n <= 2) return 1;

  return fib(n-1) + fib(n-2);
};

console.log(fib(6)); 
console.log(fib(7)); 
console.log(fib(50));  // ???? slow O(2^n)
*/


// Memoization
// js object, keys will be arg of fib and value is return value
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n];
};

console.log(fib(6)); 
console.log(fib(50)); 
