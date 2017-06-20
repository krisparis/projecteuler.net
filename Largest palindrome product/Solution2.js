/**
 * Calculates the number corresponding to the argument read in reversed order.
 * @param number {Number}
 * @return {Number} the argument in reversed order.
 */
var getReversedNumber = function (number){
    var revNum = 0;
    while(number != 0){
      revNum = revNum * 10 + number % 10; 
      number = Math.floor(number/10);
    }
    return revNum;
};

// Range of values for 3-digit factors
// Since 101*101 = 10201 is a palindrome, we can exclude 100 as possible values for the factors.
var maxFactor = 999, minFactor = 101, 
// 990 is the largest number less than or equal to 999 and divisible by 11.
largestFactorMultipleOf_11 = 990,
largestPalindrome = 0, // Initialize the result variable with 0.
 // Iteration variables.
continueLoop = true, i, j, stepValueOfj, initValueOfj,
currProduct;

// largestPalindrome is the product of factors i and j such as
// 10^2 < i < 10^4 and 10^2 < j < 10^4 and so 10^4 < i.j < 10^6
// 111 111 = 143×777 is a palindrome of two 3-digit integers.
// So largestPalindrome must be 6 digits long.
// Since it is palindromic:
// largestPalindrome = 10^5 * x + 10^4 * y + 10^3z + 10^2z  + 10^1y  10^0x
// largestPalindrome =  x(10^5 + 10^0) + y(10^4 + 10^1) + z(10^3 + 10^2)
// largestPalindrome =  x.100001 + y.10010 + z.1100
// largestPalindrome =  11.(x.9091 + y.910 + z.100)
// largestPalindrome is a multiple of 11.

// ==> 11 is prime so 11 or one of its multiples 
// cannot be the result of the product of a and b unless either i or j (or both) are multiples of 11.

for (i = maxFactor; i >= minFactor; i-- ) {
    // If i if not a multiple of 11 then j must be.
    // Therefore one can initialize j with a value multiple of 11 and then decrement j by 11.
    stepValueOfj = (i % 11 !== 0) ? 11 : 1;    
    initValueOfj = (stepValueOfj === 11) ? largestFactorMultipleOf_11 : i;
    
    // Initialize j with i to avoid calculating products with j greater than this i
    // because these products have already been calculated in previous iteration with greater values of i.
    j = initValueOfj;
    continueLoop = true;
    while (continueLoop && (j >= minFactor)) {
        currProduct = i*j;
        if (currProduct <= largestPalindrome) {continueLoop = false;}    
        // Update largestPalindrome if new product is a greater palindrome.
        if (continueLoop && (currProduct === getReversedNumber(currProduct) )) {largestPalindrome = currProduct;}
        j -= stepValueOfj;
    }
}
// Largest palindrome.
console.log("Largest palindrome: " + largestPalindrome); // Print 906609 for product of 3-digit numbers.

// This technique will not work with the palindrome 9009
// Because any 4-digit palindrome P can be written as
// P = x.10^3 + y.10^2 + y.10^1 + x.10^0 = x.1001 + y.101
// 101 is prime so it cannot be divided out by 11.


