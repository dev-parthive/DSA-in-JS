// Palindrome number
//  An integer is palindrome when it reads the same forward and backward
const isPalindrome = function (x) {
  return x === parseInt(x.toString().split("").reverse().join(""));
};
console.log(isPalindrome(121));
