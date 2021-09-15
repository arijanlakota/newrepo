// function Dog(name,numOfLegs){
//     this.name = name
//     this.numOfLegs = numOfLegs
//     this.wauf = function(){
//         console.log("auf")
//     }
// }
// Dog.prototype.greet = function(){
//     console.log("Hello I am " + this.name)
// }
// const dog1 = new Dog("Kira",6)
// const dog2 = new Dog('Para',8)
// console.log(dog1,dog2)
// class Animal{
//     constructor(name,numOfLegs){
//         this.name = name
//         this.numOfLegs = numOfLegs
//     }
//     greet(){
//         console.log(`${this.name} do something` )
//     }
//     goodbye(){
        
//         console.log(`${this.name} bye bye` )
//     }
// }
// class Cat extends Animal{
//     constructor(name,numOfLegs,color,eyes){
//         super(name,numOfLegs)
//         this.color = color
//         this.eyes  = eyes
//     }
//     greet(){
//         super.greet()
//         console.log(`${this.name} mjau`)
//     }
//     goodbye(){
//         super.goodbye()
//         console.log( `${this.name} vidimo se` )
//     }
// }
// const cat1 = new Cat("ela",27,"black","open")
// // cat1.goodbye()
// // cat1.greet()
// console.log(cat1.color)
// console.log(cat1.eyes)
class Person {
    constructor(name,nickname,age){
        this.name = name
        this.nickname = nickname
        this.age = age
    }
    coversation(){
        console.log("I am having coversation")
    }
    hi(){
        console.log("hi")
    }
}
class Teacher extends Person{
    constructor(name,nickname,age){
        super(name,nickname,age)
    }
    Subject(){
        console.log("Math")
    }
}
class Student extends Person{
    constructor(name,nickname,age){
        super(name,nickname,age)
    }
    grade(){
        console.log("A++")
    }
}
const person1 = new Person("Nile","Niko",55)
const student1 = new Student("Sara","sar",16)
const teacher1 = new Teacher("Ivan","Ivke",33)
person1.hi()
student1.grade()
teacher1.Subject()
