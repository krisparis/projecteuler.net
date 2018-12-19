var a = 0;
var b;
var c;

var tripletFound = false;

while (!tripletFound && a < 1000) {
  a ++;
  b = a;
  while (!tripletFound && b < 1000) {
    b ++;
    c = 1000 - a - b;
    tripletFound = ((a*a + b*b) === c*c);
  }
}

var result = a * b *c;
console.log('tripletFound: ' + tripletFound);
console.log('a: ' + a + '; b: ' + b + '; c: ' + c );
console.log('result: ' + result);
// Solution: 31875000.
