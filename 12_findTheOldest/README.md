# Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

## Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- this can be done with a couple of chained array methods, or by using `reduce`.
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.



preparation

const newArr = people.map((element) => return age: (element.yearOfDeath - element.yearOfBirth))

chaining filter and map

filter will check 2 conditionals:
- 

check if person still lives:
- let result = person.hasOwnProperty('firstName');
or use with filter:
- 'yearOfDeath' in element


let birth = people[0].yearOfBirth;
let death = people[0].yearOfDeath; //can be a number of underfined

if (death == undefined) death = getFullYear();

for (i = 1; i < people.length; i++) {
if ((death - birth) > (people[i].yearOfBirth - people[i].yearOfDeath))
}