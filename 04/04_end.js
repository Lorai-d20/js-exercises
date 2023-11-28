const animals = ['cat', 'cow'];

const noAnimals = [];

// Create a function that takes in an array and returns that array when there are entries in the array.
// Return the string 'no animals' when there are no entries in the array
const animalContext = animals => animals.length > 0 ? animals : 'no animals';

// Log the function with animals and with noAnimals
console.log(animalContext(animals));
console.log(animalContext(noAnimals));
