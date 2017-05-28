// We are looking to calculate the sum of all multiples of 3 or 5 below 1000.
// It's the sum of:
// - the sum of all multiples of 3
// - plus the sum of all multiples of 5
// - minus the sum of all multiples of 15 (=3*5) (because these numbers appear in both previous sums and so are summed twice)
//
// So, total = sumOfAllMultiplesOf(3) + sumOfAllMultiplesOf(5) - sumOfAllMultiplesOf(15).


var sumOfAllMultiplesOf = function (p, upperLimit) {

    // Goal: calculate p * [(numberOfTerms) * (firstTerm + lastTerm) / 2].

    // Objective 1: Calculate the sum of the progression 1,2,3,4,...,lastTerm; 
    //    where lastTerm cannot exceed upperLimit.

    var firstTerm, lastTerm, numberOfTerms, result;

    firstTerm = 1;
    // The number of terms is the highest integer that results of the division of upperLimit by p.
    numberOfTerms = Math.floor(upperLimit/p); // Important: Use Math.floor and Math.round.
    // numberOfTerms is the number of entier parts of p in upperLimit

    // Calculate from firstTerm and numberOfTerms and 1 (the common difference in this progression).
    lastTerm = firstTerm + (numberOfTerms-1) * 1;

    console.log("numberOfTerms: "+numberOfTerms + "; firstTerm: " + firstTerm +"; lastTerm: "+lastTerm);

    result = numberOfTerms * (firstTerm + lastTerm)/2;
    console.log("sum of the progression 1,2,3,4,...,lastTerm =  "+result);

    // Multiply by the argument p.
    result = p * result;
    console.log("sumOfAllMultiplesOf("+ p +"): "+result);

    return result;
}

var sumOfMultiplesOf3 = sumOfAllMultiplesOf(3, 999),
sumOfMultiplesOf5 = sumOfAllMultiplesOf(5, 999),
sumOfMultiplesOf15 = sumOfAllMultiplesOf(15, 999),
finalResult = sumOfMultiplesOf3 + sumOfMultiplesOf5 - sumOfMultiplesOf15;


alert(finalResult); // Final result: 233168.