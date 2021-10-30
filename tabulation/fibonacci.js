const fib = (n) => {
  const table = Array(n+1).fill(0);
  table[1] = 1;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i-1] + table[i-2];
    // table[i+2] += table[i];
  }

  return table[n];
}

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21ls
console.log(fib(50)); // 12586269025


// Q(n) -> time
// Q(n) -> space