// scope : determines the accessibility (visibility) of a variable



// block scope : if a variable decleared using let or const inside the block connot be accessed outside the block

{
    let a=10
    const b=20
    var c= 30
}

console.log(a) // error 
console.log(b) // error
console.log(c) // 30


// local scope : variable decleared inside the function are local to the function can not access them outside the function

function func(){
    var a=10
    let b=20
    const c=30
}

console.log(a) // error 
console.log(b) // error 
console.log(c) // error





// functional scope : variable decleared inside the function can not access them outside the function


function func(){
    var a=10
    let b=20
    const c=30
}

console.log(a) // error 
console.log(b) // error 
console.log(c) // error


// global scope:  if we decleared any variable outside any block as well as function it is considered as global scope and we can assess it throughout the Program


var a=10
let b=20 
const c=30 

// all the above 3 are global variable