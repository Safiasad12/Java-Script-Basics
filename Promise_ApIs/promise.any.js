let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value: 1");
    }, 11000);
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("error"));
    }, 2000);
});

let myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value : 3");
    }, 3000);
});

// myPromise1()
//     .then((res)=>{
//         console.log(res);
//     });

// myPromise2()
//     .then((res)=>{
//         console.log(res);
//     });

// myPromise3()
//     .then((res)=>{
//         console.log(res);
//     });


let promiseAll = Promise.any([myPromise1, myPromise2, myPromise3]);

promiseAll.then((value) => {
    console.log(value);
});