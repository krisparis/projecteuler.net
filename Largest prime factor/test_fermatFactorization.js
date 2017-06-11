// Fermat factorization algorithm
// Efficiency: If n= a^2 − b^2 = (a − b)(a + b) = cd then
//     a = c+d/2 and b = c-d /2.
//     We start from a number approximately  equal to sqrt(n).
//     Number of iterations: c+d/2 - sqrt(n) = (c + n/c)/2 - sqrt(n) = c^2/2c + n/2c - 2c*sqrt(n)/2c = 
//                           = sqrt(n)^2/2c - 2c*sqrt(n)/2c + c^2/2c 
//                           = (sqrt(n) - c)^2/2c

/**
* Tests if n is a square number.
* @param n {Number} the number being tested
* @return {Boolean} true if n is a square number; false otherwise.
*/
var isSquareNumber = function (n) {
  // Test the square root of n is an integer
  return Math.sqrt(n) % 1 === 0;
}

/**
 * Runs the Fermat factorization algorithm and returns the smallest of the two found factors of n.
 * @param n {Number} the number which factors are searched
 * @return {Number}  the smallest of the two factors of n or undefined if n is even.
 */
var fermatFactorization = function (n) {
    // Check n is odd.
    if (n % 2 === 0) {
        return; // Exit because algorithm cannot be applied.
    }
    // n can be expressed as a^2 - b^2
    // a^2 - b^2 = (a + b)(a - b)
    
    // Start with a as the least succeding integer greater than or equal to square root.
    var a = Math.ceil(Math.sqrt(n));
    // n = a^2 - b^2. 
    // b^2 = a^2 - n
    var bSquare = a*a - n;
    
    // while b^2 is not actually a square number.
    while (!isSquareNumber(bSquare)) {
        // Next test is to check b^2 = (a + 1)^2 - n is a square number.
        a = a +1;
        bSquare = a*a - n;
    }    
    var b = Math.sqrt(bSquare);    
    c = a - b,
    d = a + b;
// So c+d = 2a and c-d = 2b and a = c+d/2 and b = c-d /2.
// a^2 -b^2 = 1/4 [(c+d)^2 - (c-d)^2] = 1/4 [c^2+2cd+d^2 - (c^2-2cd+d^2)] = 1/4 [c^2+2cd+d^2 -c^2+2cd-d^2] = 4cd/4 = cd
// Therefore  a^2 -b^2 = cd
    console.log("a: " + a + ", b: " + b); // Print a: 860508, b: 373661 => a and b are not prime numbers
    console.log("c: " + c + ", d: " + d); // Print c: 486847, d: 1234169 => c and d are not prime numbers

    return c;
}

fermatFactorization(600851475143);
