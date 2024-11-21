function getData(data) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data->", data);
            resolve("data fetched successfully")
        }, 2000);   
    });
}

getData(1)
    .then((res)=>{
        return getData(2);
    })
    .then((res)=>{
        return getData(3);
    })
    .then((res)=>{
        return getData(4);
    });

