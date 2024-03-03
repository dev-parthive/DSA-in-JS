// Ques - Fibonacci number
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

const fib = function (n) {
  const numbers = [0, 1];
  for (let i = 2; i <= n; i++) {
    numbers.push(numbers[i - 1] + numbers[i - 2]);
  }
  console.log(numbers);
  return numbers[n];
};

console.log(fib(7));
