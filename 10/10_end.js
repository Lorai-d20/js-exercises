const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 35,
  address: {
    street: '123 fake st',
    city: 'New York',
    state: 'NY'
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 35,
};

const getStreet = (person) => {
  // 1. Can you return the street property of the address object
  // When the function is called with person1, it should not throw an error.
  return person.address?.street;
};

console.log(getStreet(person));
console.log(getStreet(person1));

// 2. Can you create a new object with the same properties as person, but without the address property?
const { address, ...personWithoutAddress} = person;
console.log(personWithoutAddress);
