let employee = {
    eName: "safi",
    eCompany: "Wipro",
    phNo: 13425356547647
}

console.log({...employee, eName: "puja"}); //this will change the eName from safi to puja where as all other object specifications would be same

