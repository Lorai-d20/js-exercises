// Create a variable that holds your full name as a string
const fullName = 'Wendy de Kock';

// Replace your last name with 'the js master'
/** The replace function does not mutate the original  */
const title = fullName.replace('de Kock', 'the JS master');

// In the log function, log out 'Hi' and then the variable that holds the replaced message
console.log(title);

// Create a new variable that uses the title variable and creates an array that looks like this [ 'Wendy', 'the', 'JS', 'master' ]
/** Seperate the string on spaces */
const titleArr = title.split(' ');

// log out the word 'JS'
console.log(titleArr[2]);