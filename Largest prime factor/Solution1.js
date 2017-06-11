/**
 * Find all the divisors of n less or equal to the square root of n.
 * @param n {Number} the number which divisors are being calculated
 * @result {Array} All divisors of n in descending order
 */
var isPrimeNumber = function (n) {
    var msg, result = false;
    if (isNaN(n) || n < 0) {
        msg=(n + " is not a valid number!  Try again!");
        return result;
    } else    if ((n >= 0) && (n <=2)) {
        msg=(n + " is not a valid number.");
        return result;
    } 
    // Test whether the number has any divisor below its square root.
    var i = 2, divisorFound = false, limit = Math.floor(Math.sqrt(n));
    while ((!divisorFound) && (i <= limit)) {
        if (n % i == 0) {
            divisorFound = true;
            msg=(n + " is not prime.  It is divisible by " + i + ".");
        }        
        i ++;
    }
    result = (!divisorFound);
    return result;
};

/**
 * Find all the divisors of n less or equal to the square root of n.
 * @param n {Number} the number which divisors are being calculated
 * @result {Array} All divisors of n in descending order
 */
var findAllDivisorsBelowSqrt = function (n) {
    var i = Math.floor(Math.sqrt(n)),resultCandidates = [];     
    while ((i > 0)) {
        if (n % i === 0) { // i divides n
            resultCandidates.push(i);
        }
        i -= 1;
    }
    return resultCandidates;
};
 
var n = 600851475143, 
resultCandidates = findAllDivisorsBelowSqrt(600851475143);

var i = 0, isPrimeDivisorFound = false, currDivisor;
while ((!isPrimeDivisorFound) && (i < resultCandidates.length)) {
    currDivisor = resultCandidates[i];
    if (isPrimeNumber(currDivisor)) {
        isPrimeDivisorFound  =true; 
    }
   
    i ++;
}
if (isPrimeDivisorFound) {
    // Find 6857 for 600851475143.
    console.log("Largest prime divisor of " + n +" is " + currDivisor);
} else {
    console.log("No prime divisor found for " + n);
}
