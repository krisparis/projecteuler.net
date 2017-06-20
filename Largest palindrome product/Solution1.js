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
largestPalindrome = 0, // Initialize the result variable with 0.
continueLoop = true, i, j, currProduct; // Iteration variables.

for (i = maxFactor; i >= minFactor; i-- ) {
    // Initialize j with i to avoid calculating products with j greater than this i
    // because these products have already been calculated in previous iteration with greater values of i.
    j = i;
    continueLoop = true;
    while (continueLoop && (j >= minFactor)) {
        currProduct = i*j;
        if (currProduct <= largestPalindrome) {continueLoop = false;}    
        // Update largestPalindrome if new product is a greater palindrome.
        if (continueLoop && (currProduct === getReversedNumber(currProduct) )) {largestPalindrome = currProduct;}
        j--;
    }
}
// Largest palindrome.
console.log("Largest palindrome: " + largestPalindrome); // Print 9009 for products of 2-digit numbers and 906609 for product of 3-digit numbers.
