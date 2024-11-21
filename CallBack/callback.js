function getData(data, getNextData){
    setTimeout(()=>{
        console.log("data->", data);
        if(getNextData){
            getNextData(data);
        }
    }, 2000);
}

getData(1, ()=>{
    return getData(2, ()=>{
        return getData(3, ()=>{
            getData(4);
        });
    });
});