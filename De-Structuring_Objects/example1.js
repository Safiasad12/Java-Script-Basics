
// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };

  console.log(person.firstName) // normal way
  
  // Destructuring
  let {firstName, lastName} = person;

  console.log(firstName) // can directy access using destructuring concept

  