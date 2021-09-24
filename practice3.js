/* Write a JavaScript program to get the integers in range (x, y). */

function numrange(min, max) {
    return (min == max) ? [max] : [min, ...numrange(min+1, max)];
}

console.log(numrange(1,5));