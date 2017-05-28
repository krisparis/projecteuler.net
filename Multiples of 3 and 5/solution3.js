// We are looking to calculate the sum of all multiples of 3 or 5 below 1000.
// It's the sum of:
// - the sum of all multiples of 3
// - plus the sum of all multiples of 5
// - minus the sum of all multiples of 15 (=3*5) (because these numbers appear in both previous sums and so are summed twice)
//
// So, total = sumOfAllMultiplesOf(3) + sumOfAllMultiplesOf(5) - sumOfAllMultiplesOf(15).


// (n/2)(a+l) => Sum of arithmetic progression with n terms.
//     a is the first term
//     l is the last term

// l = a+(n-1)d, where d is the common difference.    
//     In the case of the sum of multiples of 3 below 1000
//     3+3(n-1)<1000,
//     3(n-1)<997,
//     n<997/3+1
//     n<333.333
//     n=int(333.333...)
//     n=333
//     => l = 3+3(333-1)=999
    
// n = int(1 + (x-a)/d)


// SIMPLIFICATION OF n
// as a=d,
// n = int(1 + (x-a)/d) = int(1 + (x-d)/d)
// n = int(1 + (x/d -d/d)) = int(1 + x/d -1)
// n = int(x/d)

// SIMPLIFICATION OF l
// l = a+(n-1)d = d + (int(x/d)-1)d 
// l = d + d*int(x/d)-d 
// l = d*int(x/d)


// S = (n/2)(a+l)
// S = (int(x/d)/2)(d+ d*int(x/d) ) 
// S = (int(x/d)/2) * d * (1 + int(x/d) )
// S =  d * (1 + int(x/d) ) * int(x/d)/2




var sumOfAllMultiplesOf = function (p, upperLimit) {

    var commonDiff = p,
    result =  commonDiff * (1 + Math.floor(upperLimit/commonDiff) ) * Math.floor(upperLimit/commonDiff)/2
    return result;
}

var sumOfMultiplesOf3 = sumOfAllMultiplesOf(3, 999),
sumOfMultiplesOf5 = sumOfAllMultiplesOf(5, 999),
sumOfMultiplesOf15 = sumOfAllMultiplesOf(15, 999),
finalResult = sumOfMultiplesOf3 + sumOfMultiplesOf5 - sumOfMultiplesOf15;


alert(finalResult); // Final result: 233168.