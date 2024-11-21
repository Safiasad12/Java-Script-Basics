function getData(data){
    return new Promise((resolve, reject)=>{
        let success=true;
        if(success){
            resolve("data successfully fetched");
        }
        else{
            console.log("error has occured");
        }
    });
}


getData()
    .then(()=>{
        console.log("this line will execute if task gets resolved");
    })

    .catch((err)=>{
        console.log("this line will execute if task gets rejected");
    })

    .finally(()=>{
        console.log("this line will always execute irrepective of weather task gets fullfilled or not");
    });
