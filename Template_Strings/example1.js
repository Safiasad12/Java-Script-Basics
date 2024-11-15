// template strings uses back-ticks also contains placeholders which ovoid using unnessisory concatination operations

let a=3
let b=5

normalString='the addition of '+a+' and '+ b + ' is ' + (a+b); //this will take unnessesory concatination operations

templateString=`the addition of ${a} and ${b} is ${a+b}`; // cos of placeholeds this makes it more better approch to write code

console.log(normalString)
console.log(templateString)