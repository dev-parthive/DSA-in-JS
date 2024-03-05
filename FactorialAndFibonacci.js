// factorial using for loop

// let
// factorial = 1 ;
// for(let i = 1; i <=  5 ; i++){
//     factorial = factorial * i
// }

// console.log(factorial)

// factorial using recursion

// function recurtion(n){
//     if(n === 1){
//         return n
//     }
//     return n * recurtion(n - 1)
// }

// console.log(recurtion(5))

// fibonacci using loop
function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

console.log(fib(7));

//Fibonacci using recursion

// function fib(n){
//     if(n <= 1) {return n};
//         console.log(` ${n} + 1 =  ${ n  + 1} and ${n} - 2 = ${n - 2} `)
//     return fib(n - 1 ) + fib(n - 2)
// }

// console.log(fib(7))
