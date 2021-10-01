/* Write a JavaScript program to check whether a number is even or not. */

const is_even = (n) => {
    if (n % 2 == 0) {
        console.log(`${n} is even!`);
     } else {
        console.log(`${n} is odd!`);
     }
    }

is_even(41);

//Yes I know this is not recursive but it's better this way
