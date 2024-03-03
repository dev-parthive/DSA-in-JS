// Palindrome number
//  An integer is palindrome when it reads the same forward and backward

const isPalindrome = function (x) {
  if (x < 0) return false;
  return x === parseInt(x.toString().split("").reverse().join(""));
};
console.log(isPalindrome(-121));
