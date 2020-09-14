// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

var isPalindrome = function(str1) {
    var k = 0;
    var str = str1.replace(/[^A-Z0-9]/ig, "").toLowerCase();
      var l = str.length - 1;
      var isPalindrome = true;
      while (k <= l) {
        if (!(str.charAt(k) === str.charAt(l))) {
          isPalindrome = false;
          break;
        }
        k++;
        l--;
      }
      
      return isPalindrome;
};

isPalindrome('A man, a plan, a canal: Panama') //true
isPalindrome('race a car') //false