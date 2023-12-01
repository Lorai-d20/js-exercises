const people = [
  { name: 'John', age: 35 },
  { name: 'Susan', age: 20 },
  { name: 'Mike', age: 45 },
  { name: 'Peter', age: 81 },
];

// Can you use map and sort to give back an array of ages that is sorted from youngest to oldest?
const sortedAges = people
  .map(person => person.age)
  .sort((a, b) => a - b)
;

// Log out the sorted array of ages
console.log(sortedAges);
