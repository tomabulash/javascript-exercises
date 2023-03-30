# Exercise 11 - Get the Titles!

You are given an array of objects that represent books with an author and a title that looks like this:

```javascript
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
```

Your job is to write a function that takes the array and returns an array of titles:

```javascript
getTheTitles(books) // ['Book','Book2']
```

## Hints

- You should use a built-in javascript method to do most of the work for you!


preperation

- the join method creates and return a new string by concatenating all of the strings in an array, separated by a specified separator
- the split method splits a string into an array of substrings:
  text.split(" ") splits the words
- the map method:
  - const titles = books.map(({ title }) => ({title}));
