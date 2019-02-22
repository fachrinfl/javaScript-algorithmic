// Factorialize a Number
// Numbers to factorialized are 5!, 10!, 20!, 0!

// 1st solution
function factorialize1st(num) {
  var result = 1;
  for (var i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}
console.log(factorialize1st(5)); //120

// 2st solution
function factorialize2nd(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize2nd(num - 1);
}
console.log(factorialize2nd(5)); //120

// 3rd solution
function factorialize3rd(num) {
  for (var a = 1; num >= 1; num--) {
    a *= num;
  }
  return a;
}
console.log(factorialize3rd(5)); //120
