# Exercise 09 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:
acaramanamaraca
### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```


planning

remove all punctuation and word breaks

convert the string to either lowerCase or uppercase

start a loop from the middle of the string to the beginning, storing 'leftString'

start another loop from the middle of the string to the end, storing 'rightString'
- string.slice

option A
check if 'leftString' equals 'rightString' and return the result



pseudo code

- let newString = '';
- for(let i = 0; i < string.length; i++)
- if ((/[a-zA-Z]/).test(string.charAt(i))) newString += string.charAt(i);
- newString = string.toLowerCase();

- if string.length%2 == 0 
  - middlePos = (string.length/2)-1
- else
  - middlePos = ((string.length-1)/2)

- leftString = string.slice(0,middlePos)
- rightString = string.slice(middlePos)

- return (leftString == rightString)

different slicing if string length is odd


