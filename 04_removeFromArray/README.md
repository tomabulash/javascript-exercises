# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator. - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
  

Planning
first argument is an array
- first argument is arguments[0]
- it would be a nested array that is accessed through arguments[0][x] where x is the number of the element inside the nested array

second arguement can be anything
- no problem

there can be more than one argument to find
- using a loop...

only removes same type
- using === strict equality

be able to remove multiple values
- creating a loop from i=0 that ends when i < arguments.length is reached. 
- https://levelup.gitconnected.com/how-to-write-function-with-n-number-of-parameters-in-javascript-a916de1be7a2
- the arguments object is not an array, so first you have to convert it into an array using the Array.from(arguments) method
- You can, instead, use:
  function name(...args) that creates an array called 'args' that is accessibly inside the function


how to find an argument in the array? 
- using arguments[i] to call any arguments given to the function

remove a single element from an array without making a hole: 
- splice(x,1), where x is the position of the element to be removed, and 1 is the number of elements to be removed from that position (1)

pseudo code:
- use (...args) to create an arguments array
- possible create a constant
- create a constant nestLength that equals the length of the nested array args[0].length or 
- create a loop from i=1 (skipping 0 which is the array argument) to i < args.length (containing all other arguments)
  - create another loop from j=0 (first element in nested array) to j < args[0].length or nestLength
  - check if args[i] (strict) equals args[0][j], and if so do splice(args[0][j], 1), maybe the splice is a problem if errors occur
- return args[0] 