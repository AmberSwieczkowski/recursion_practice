/* Write a JavaScript program to get the first n Fibonacci numbers.
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .
Each subsequent number is the sum of the previous two. */

//Prints fibonacci value at given position n 
const sum_fibonacci = (n) => {
  if (n <= 2) {
    return 1;
  }
    return sum_fibonacci(n-2) + sum_fibonacci(n-1);     
        
};

console.log(sum_fibonacci(10));


//Prints array of fibonacci sequence up to given length k
const print_fibonacci_series = (k) => {
  if (k===2) {
    return [1, 1];
  } 
  else {
    const s = print_fibonacci_series(k - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(print_fibonacci_series(10));
 