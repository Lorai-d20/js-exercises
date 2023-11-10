// Create a variable that holds your full name as a string
const fullName = 'Wendy de Kock';

// Replace your last name with 'the js master'
/** The replace function does not mutate the original variable */
const title = fullName.replace('de Kock', 'the JS master');

// Create a new variable that uses the title variable and creates an array that looks like this [ 'Wendy', 'the', 'JS', 'master' ]
/** Seperate the string on spaces */
const words = title.split(' ');

// Log out the word 'JS'
console.log(words[2]);
