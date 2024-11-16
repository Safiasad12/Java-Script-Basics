let a = {
    ename: "safi",
    age: 21,
    // loc: "karnataka"
}

let p = {
    loc : "MP"
}

a.__proto__ = p;

console.log(a.loc); 