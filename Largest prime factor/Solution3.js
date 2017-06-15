// Algorithm that uses the property that
// each number is a product of prime number n = p1^a1 * p2^a2 * ... * pn^an.

var n = 14 , lastFactor;
// 2 is the only even prime number.
// So if possible, start by completely divide out by 2.
if (n % 2 === 0)  {
    lastFactor = 2;
    n = Math.floor(n/2);
    while (n % 2 === 0){
      n = Math.floor(n/2);
    }
} else {
    lastFactor = 1;
}

// For n = 14, Print [lastFactor = 2, remainingNumber = 7]
console.log("After completely divided out by 2, remainingNumber = " + n + ", lastFactor: " + lastFactor); 


// Then start from factor after 2.
var k = 3,
// Every number n can at most have one prime factor greater than sqrt(n).
// If a factor exceeds that limit then it will necessarly be a prime number.
// and since it is the last factor the work is done when such a factor is found.
factorLimit = Math.sqrt(n);

console.log("First factorLimit: " + factorLimit); // Print 775146.0992245268 for n = 600851475143.

while ((n > 1) && (k <= factorLimit)){
    // If k divide n.
    if (n % k === 0)  {
        lastFactor = k;
        n = Math.floor(n/k);
        // Continue division while n is a multiple of k.
        while (n % k === 0){
            n = Math.floor(n/k);
        }
        // Update factorLimit.
        // So that it will be able to avoid the last loop iteration.
        factorLimit = Math.sqrt(n);
    }
    k += 2; // Consider only odd number as every even factor have been eliminated.
}

if (n === 1) {
    console.log("lastFactor : " + lastFactor);
} else {
    console.log("(Stopped by factor limit) lastFactor : " + n); // Print 6857 for 600851475143.
}
