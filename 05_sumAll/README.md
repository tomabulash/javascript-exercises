# Exercise 05 - sumAll

Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop


planning

two numbers as arguments
- no problem

how to get all the numbers between these numbers
- a loop, first iteration is i = first number, last iteration is i = last number

how to add the numbers
- adding the counter of the loop (i) to a sum variable

what to return
- the sum variable


pseudo code

- get two numbers
- create a variable named 'sum' and give it an empty value
- create a loop ( let i = first; i <= last; i++)
    - add the value of i to sum
- return sum



