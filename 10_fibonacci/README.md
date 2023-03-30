# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```

planning

this function:
- requires an array
    - the array always start with 1, 1
- returns a number, not array element
- return the element in the actual number inputted, as if the first element is 1
- use push to add elements to the array
- stop when element pos is x-1


pseudocode

fibonacci(x) // x is a number

if (x < 3) return 1 // 1st and 2nd always 1

const fib = [1, 1] //create array

let pos = 2;

for(;pos < x; pos++) {

    fib.push(fib[pos-2] + fib[pos-1])

} 

return fib[pos]



