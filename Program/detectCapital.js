// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

// Input: "USA"
// Output: True

// Input: "FlaG"
// Output: False

var detectCapitalUse = function (word) {
  let n = word.length;
  if (n === 1) {
    return true;
  }

  if (
    word.charAt(0) === word.charAt(0).toUpperCase() &&
    word.charAt(1) === word.charAt(1).toUpperCase()
  ) {
    for (var i = 2; i < word.length; i++) {
      if (word.charAt(i) === word.charAt(i).toLowerCase()) {
        return false;
      }
    }
  } else {
    for (var i = 1; i < word.length; i++) {
      if (word.charAt(i) === word.charAt(i).toUpperCase()) {
        return false;
      }
    }
  }
  return true;
};
