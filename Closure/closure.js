// Closures in JavaScript are functions that retain access to variables from their containing scope even after the parent function has finished executing


// "A closure is a function that remembers and has access to variables from its lexical scope, even after the outer function that created those variables has finished executing."


function outerFunction() {
    let counter = 0; // This is a variable in the outer function's scope
  
    function innerFunction() {
      counter++; // The inner function has access to the outer function's variable
      console.log(counter); // It "remembers" the `counter` variable
    }
  
    return innerFunction; // Return the inner function
  }
  
  const myClosure = outerFunction(); // `outerFunction` executes and returns `innerFunction`
  
  myClosure(); // Outputs: 1
  myClosure(); // Outputs: 2
  myClosure(); // Outputs: 3

