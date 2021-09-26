/* Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. */


function gcd(highNum, lowNum) {
    if (lowNum == 0) {
        return highNum;
    } else {
        console.log(highNum);
        console.log(lowNum);
        console.log(highNum % lowNum);
        return gcd(lowNum, highNum % lowNum);
        
    }
}

console.log(gcd(21, 7));