// Fibonacci number using recursion
// const fib = function (n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// };
// console.log(fib(7));

function sum(i) {
  console.log(i);
  if (i === 1) {
    return 1;
  }
  return i + sum(i - 1);
}
console.log("The value of sum is : ", sum(5));
