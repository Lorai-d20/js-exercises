// Create a variable that holds your full name as a string
const fullName = 'Wendy de Kock';

// Replace your last name with 'the js master'
/** The replace function does not mutate the original variable */
const title = fullName.replace('de Kock', 'the JS master');

// Create a new variable that uses the title variable and creates an array that looks like this [ 'Wendy', 'the', 'JS', 'master' ]
/** Seperate the string on spaces */
const words = title.split(' ');

// Loop through the words and make every word all uppercase
/** You can mutate the values in words directly without using a variable */
for(let i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
}

// or
for (const i in words) {
    words[i] = words[i].toUpperCase();
}

// Log out the words
console.log(words);