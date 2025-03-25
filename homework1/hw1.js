function fizzBuzz() {
   for (let i = 1; i <= 100; i++) {
      console.log(
         (i % 3 === 0 && i % 5 === 0 && "FizzBuzz") ||
            (i % 3 === 0 && "Fizz") ||
            (i % 5 === 0 && "Buzz") ||
            i
      );
   }
}

function isPalindrome(str) {
   const reversedStr = str.split("").reverse().join("");
   return str === reversedStr;
}
// fizzBuzz()

// let str = "racecar";
// console.log((isPalindrome(str) ? "Is a Palindrome" : "Is not a palindrome"));