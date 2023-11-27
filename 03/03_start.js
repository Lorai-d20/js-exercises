// Create a variable that holds your full name as a string
const fullName = 'Wendy de Kock';

// Replace your last name with 'the js master'
/** The replace function does not mutate the original variable */
const title = fullName.replace('de Kock', 'the JS master');

// Create a new variable that uses the title variable and creates an array that looks like this [ 'Wendy', 'the', 'JS', 'master' ]
/** Seperate the string on spaces */
const words = title.split(' ');

// create a function that takes in an array and returns a string with all the items concatenated together
/** You can use a for or a for of loop in the function */