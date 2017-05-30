var sumOfEvenFibonacciNbsBelowLimit = function(limit) {
    var a = 1, b = 1, c = a+b, evenTermsSum = 0;
    
    // While each third calculated fibonacci number is smaller than limit.    
    while (c < limit) {
        evenTermsSum = evenTermsSum + c;
        a = b +c;
        b = c + a;
        c = a + b;
    }
    return evenTermsSum;
}

 console.log(sumOfEvenFibonacciNbsBelowLimit(4000000)); // 4613732
 
// Proove that only every third fibonacci number is even.
//
// By induction.
// Initial case:
// F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2. ==> Only F(0) and F(3) are even whereas F(1) and F(2) are odd.
// We admit that F(n) is even and also F(n-1) and F(n-2) are odd.
// We have to proove that F(n+3) is even and F(n+1), F(n+2) are odd.

// F(n) = F(n-1) + F(n-2)
// F(n+1) = F(n) + F(n-1) => Sum between even and odd number is odd. So F(n+1) is odd.
// F(n+2) = F(n+1) + F(n) => Sum between even and odd number is odd. So F(n+2) is odd.
// F(n+3) = F(n+2) + F(n+1) => Sum between two odd number is even. So F(n+3) is even.
//
// End of proof.
