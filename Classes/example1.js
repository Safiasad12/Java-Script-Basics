// class -> is a template(blue print) of an object

// object is a collection of key value pair in js. in genral, anythis which physcally present are objects

// .this refers to current invoking object, allows different values to different objects 
// eg. we are having two different objects 'this' keyword used to identify each object uniquely in this example student1 data and student2 data should be stored uniquely 


// classes and object are stored in heap memory where as primitive variable store in stack

// constructor -> special methods use to initialize states of an object


class Student{
    constructor(id, name){
        this.id=id;
        this.name=name;
    }
}

const student1=new Student(101, "safi") 
const student2=new Student(102, "vinith") 

console.log(student1)
console.log(student2) 