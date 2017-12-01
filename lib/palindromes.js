function isPalindrome(s) {
  var stringNoSpaces = s.split(" ").join("");
  var stringReverse = stringNoSpaces.split("").reverse().join("");
  console.log(stringNoSpaces);
  console.log(stringReverse);
  return stringNoSpaces == stringReverse;
}

console.log(isPalindrome("not"));

module.exports = isPalindrome;
