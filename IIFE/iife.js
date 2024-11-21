// iife-> imidiatly invoked function expression

function getData(data) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data->", data);
            resolve("data fetched successfully")
        }, 2000);   
    });
};

(async function(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();

