// data types -> this describes what kind of data is to be stored in a variable

// types of data types :

// 1. primitive : 
// store single value eg. number, String, boolean values 
// can create a copy as it stores actual data
// immutable 

// 2. non-primitive : 
// store multiple values eg. Arrays and objects with
// can not create a copy as it stores refrence/address
// mutable 


let a=5 // primitive
let b=a // new copy gets created
a=3 // update
console.log(b) // 5 wont effect because another copy was created

let arr1=[1,2,3,4]
let arr2=arr1 // new copy wont get created 
arr1.push(21) // updating
console.log(arr2); // will effect arr2 as will because storing same address






