// Reverse in a string
var strWords = "Greetings from Earth";

// Basic Solution
function reverseStringBasic(str) {
  str = str.split("");
  str = str.reverse("");
  str = str.join("");
  return str;
}
console.log(reverseStringBasic(strWords));

// Intermediate Solution
function reverseStringIntermediate(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseStringIntermediate(strWords));

// Advanced Solution
function reverseStringAdvanced(str) {
  var rev = "";
  str.split("");
  for (var i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log(reverseStringAdvanced(strWords));

// Advanced Two Solution
function reverseStringAdvancedTwo(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
console.log(reverseStringAdvancedTwo(strWords));
