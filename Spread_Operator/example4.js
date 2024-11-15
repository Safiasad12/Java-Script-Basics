let obj={
    objId:101,
    objName: "safi"
};

console.log({objId:102, objName:"piyush", ...obj}); //this will reflect no change in my object as the updated values are assigned first and then i am opening the object which overrides these updated values again into orignal values
