// Algorithm that uses the property that
// each number is a product of prime number n = p1^a1 * p2^a2 * ... * pn^an.

    
var n = 600851475143,
k = 2, lastFactor = 1;
while (n > 1){
    // If k divide n.
    if (n % k === 0)  {
        // lastFactor will always be a prime number
        // because the first k is 2, a prime number, and because of the following code.
        lastFactor = k;
        n = Math.floor(n/k);
        // Continue division while n is a multiple of k.
        while (n % k === 0){
            n = Math.floor(n/k);
        }
    }
    k += 1;
}
