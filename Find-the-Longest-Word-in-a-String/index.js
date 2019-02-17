// Find the longest word in a string
var strWords = "The quick brown fox jumped over the lazy dog";

// Basic Solution
function findLongestWordBasic(str) {
  var words = str.split(" ");
  var maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}
console.log(findLongestWordBasic(strWords));

// Intermediate Solution
function findLongestWordIntermediate(str) {
  return str.split(" ").reduce(function(x, y) {
    return Math.max(x, y.length);
  }, 0);
}
console.log(findLongestWordIntermediate(strWords));

// Advanced Solution
function findLongestWordAdvanced(str) {
  str = str.split(" ");
  
  if (str.length == 1) {
      return str[0].length;
  }

  if(str[0].length >= str[1].length) {
      str.splice(1, 1);
      return findLongestWordAdvanced(str.join(' '));
  }

  if (str[0].length <= str[1].length) {
      return findLongestWordAdvanced(str.slice(1, str.length).join(' '));
  }

  return str.length;
}
console.log(findLongestWordAdvanced(strWords));
