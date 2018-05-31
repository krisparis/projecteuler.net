// Square of the sum of the first hundred natural numbers.
var squareOfSum =  Math.pow((1 + 100)*100/2,2);

// Calculate sum of squares.
// (n+1)^3 = (n+1) (n+1)^2 = n^3 + 3n^2 + 3n +1
//
// Let's SUM [(n+1)^3] be the sum of (n+1)^3 with n from 1 to n
//
//
// SUM [(n+1)^3] = SUM [n^3] + SUM [3n^2] + SUM [3n] + SUM [1]
// SUM [(n+1)^3] = SUM [n^3] + 3*SUM [n^2] + 3*SUM [n] + SUM [1]
// SUM [(n+1)^3] - SUM [n^3] = 3*SUM [n^2] + 3*SUM [n] + SUM [1]
// SUM [(n+1)^3] - SUM [n^3] = 3*SUM [n^2] + 3*SUM [n] + SUM [1]
//
// We know thatSUM [n] = (1+n)*(n/2) and SUM [1] = n
//
//
// SUM [(n+1)^3] - SUM [n^3] = 3*SUM [n^2] + 3*(1+n)*(n/2) + n
//
//
// Also SUM [(n+1)^3] - SUM [n^3] = [(n+1)^3] - 1
// Because SUM [n^3] = 1^3 + 2^3 + ... + n^3 and SUM [(n+1)^3] = 2^3 + ... + n^3 + [(n+1)^3]
//
//
// [(n+1)^3] - 1 = 3*SUM [n^2] + 3*(1+n)*(n/2) + n
//  3*SUM [n^2] = [(n+1)^3] - 1 - 3*(1+n)*(n/2) - n
//  3*SUM [n^2] = [(n+1)^3] - 3*(n+1)*(n/2) - n - 1
//  3*SUM [n^2] = (n+1)(n+1)^2 - 3*(n+1)*(n/2) - (n + 1)
//  3*SUM [n^2] = (n+1)  [(n+1)^2 - 3*(n/2) - 1]
//  3*SUM [n^2] = (n+1)  [n^2 +2n +1 - 3n/2 - 1]
//  3*SUM [n^2] = (n+1)  [n^2 +2n - 3n/2]
//  6*SUM [n^2] = (n+1)  [2n^2 +4n - 3n]
//  6*SUM [n^2] = (n+1)  [2n^2 +n]
//  6*SUM [n^2] = (n+1) *  n (2n+1)
//  SUM [n^2] = (n+1) *  n (2n+1)/6
var n = 100;
var sumOfSquares =  (n+1) * n *(2*n+1)/6;
var result = squareOfSum - sumOfSquares;
alert(result);
