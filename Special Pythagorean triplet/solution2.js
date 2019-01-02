var tripletFound = false;

var tripletSum = 1000;
// a + b + c= 1000
// a + b + c >= a + (a+1) + (a+2)
// a + b + c >= 3a + 3
// So,  1000 >= 3a + 3
// a <= (1000 - 3) / 3
var limitForA = Math.floor ((tripletSum - 3) / 3);


var a = 0;
var b;
var c;

while (!tripletFound && a < limitForA) {
  a ++;
  b = a + 1;
  while (!tripletFound && b <= (tripletSum - 1 - a) / 2) {
    b ++;
    c = tripletSum - a - b;
    tripletFound = ((a*a + b*b) === c*c);
  }
}

var result = a * b *c;
console.log('tripletFound: ' + tripletFound);
console.log('a: ' + a + '; b: ' + b + '; c: ' + c );
console.log('result: ' + result);
// Solution: 31875000.
// a: 200; b: 375; c: 425
