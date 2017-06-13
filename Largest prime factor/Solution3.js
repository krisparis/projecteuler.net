// Algorithm that uses the property that
// each number is a product of prime number n = p1^a1 * p2^a2 * ... * pn^an.

var n = 600851475143, lastFactor;
// 2 is the only even prime number.
// So if possible, start by completely divide out by 2.
if (n % 2 === 0)  {
        lastFactor = 2;
    n = Math.floor(n/k);
      while (n % 2 === 0){
        n = Math.floor(n/2);
      }
} else {
    lastFactor = 1;
}

// Then start from factor after 2.
var k = 3;

while (n > 1){
    // If k divide n.
    if (n % k === 0)  {
        lastFactor = k;
        n = Math.floor(n/k);
            // Continue division while n is a multiple of k.
        while (n % k === 0){
            n = Math.floor(n/k);
        }
    }
    k += 2; // Consider only odd number as every even factor have been eliminated.
}
console.log(lastFactor);


