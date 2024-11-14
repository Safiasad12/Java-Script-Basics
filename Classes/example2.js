class Employee{
    constructor(empId, empName, desig){
        this.empId=empId;
        this.empName=empName;
        this.desig=desig;
    }
}

const employee1= new Employee(101, "safi", "MEAN")
const employee2= new Employee(102, "puja", "MERN")
const employee3= new Employee(103, "piyush", "devops")

console.log(employee1)
console.log(employee2)
console.log(employee3)
