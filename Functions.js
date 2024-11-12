// these are the reuseable block of code or a set of instructions which are used to perform some specific task

// there are 3 types of functions : 

// 1. regular function : defined using function keyword, must have a name, hoisting is possible

// 2. anonymus function : defined using function keyword, no name, hoisting is not possible

// 3. arrow function : function keyword is not needed for its declaration, may or may not have name, hoisting is not possible

// hoisting : function call before its declaration


// Example of higher order function : 
// .map, .filter etc...



// based on use cases function are further clasified into 2 types these are: 
// 1. higher order function : functions which takes argument as function
// 2. calback functions : function which passed as argument to another function

// ****************************************


// Eg. of regular function

// function add(a, b){
//     return a+b
// }

// console.log(add(4, 5))


// **************************

// Eg. of hoisting in regular function

// mul(3, 5)

// function mul(a, b){
//     console.log(a*b)
// }


// *****************************

// Eg. of anonymus function 

// const greet = function(name){
//     console.log(`hello ! ${name}`)
// }

// greet("safi") //this variable behaves like a function


// ************************

// Eg. of anonymus function used as calback function 

// let numbers = [1,2,3,4,5]

// let squareNumbers= numbers.map(function(num){
//     return num*num
// })

// console.log(squareNumbers)


// ****************************************


// const add = (a, b) =>{
//     return a+b
// }

// console.log(add(10, 30))






