// The list of prime numbers below 20.
var primeNum_Exp = {2: 1, 3: 1, 5: 1, 7: 1, 11: 1, 13: 1, 17: 1, 19: 1};

/**
 * Tests if the given number is prime and below 20.
 * @param n {Number} the number to test
 * @return {Boolean} true if n is prime and below 20, false otherwise.
 */
var isPrimeNumber = function (n) { return primeNum_Exp.hasOwnProperty(n);}

/**
 * Calculates the maximum possible exponent for the given power
 * with the resulting number not exceding the given limit.
 * @param limit {Number} the number to not exceed
 * @param power {Number} the power
 * @return {Number} the maximum possible exponent for the given power; minimum is 0.
 */
var calculateMaxExp = function (limit, power) {
  var exponent = 0;
  while (limit > 1 && (limit % power === 0)) {
    limit = Math.floor(limit / power);
      exponent ++;
    }
    return exponent;
};

var tmpExp;
for (var i = 2;  i <= 20; i++) { // For all numbers up to 20.
	if (!isPrimeNumber(i)) { // If not a prime number
		for (divisor in primeNum_Exp) { // For all prime divisors
    	// Calculate maximum exponent of this divisor. 
      //No calculation if the divisor is greater than the current number.
		  tmpExp = (i > divisor) ? calculateMaxExp(i, divisor) : null;
      // Associate the new higher exponent with the prime divisor factor.
		  if (tmpExp && (tmpExp > primeNum_Exp[divisor])) { primeNum_Exp[divisor] = tmpExp;}
		}
	}
}

// Multiply all prime factors taking into account their calculated exponents.
var result = 1;
for (var key in primeNum_Exp) {
  result *= Math.pow(key, primeNum_Exp[key]);
}
console.log(result); // Print 232792560
