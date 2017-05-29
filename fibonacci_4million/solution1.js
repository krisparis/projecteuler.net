var sumOfEvenFibonacciNbsBelowLimit = function(limit) {
    var a = 0, b = 1, c = a + b,
    // Initialize 'evensum' with the first fibonacci number which is even.
    evensum = 0;
    
    // While the third calculated fibonacci number is smaller than limit.
    while (c < limit) {
        // Add only if 'c' is even.
        if (c % 2 === 0) {
            evensum += c;
        }    
        a = b;
        b = c;
        c = a + b;
    }
    return evensum;
}
console.log(sumOfEvenFibonacciNbsBelowLimit(4000000)); // 4613732