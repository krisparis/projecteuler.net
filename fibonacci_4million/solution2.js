// If n multiple of 3 then is F(n) even?

// Proof by induction:
// We admit F(3p) is even. p belongs to Z.
// Is F(3(p+1)) F(3p+3) even for ever p in Z ?

// Proof:
// F(3p+3) = F(3p+2) + F(3p+1)
// F(3p+3) = F(3p+1) + F(3p) + F(3p+1)
// F(3p+3) = F(3p) + 2*F(3p+1)
// ==> F(3p+3) is even


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