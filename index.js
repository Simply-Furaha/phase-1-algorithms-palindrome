function isPalindrome(word) {
  const palindromeWord = word.split('').reverse().join('');

  return palindromeWord === word
}
console.log(isPalindrome('abba'))
isPalindrome('racecar')
isPalindrome('a')
isPalindrome('robot')
isPalindrome('ab')






/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
