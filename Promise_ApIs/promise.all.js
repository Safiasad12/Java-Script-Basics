let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value: 1");
    }, 1000);
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value: 2");
    }, 2000);
});

let myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value : 3");
    }, 3000);
});


let promiseAll = Promise.all([myPromise1, myPromise2, myPromise3]);

promiseAll.then((value) => {
    console.log(value);
});