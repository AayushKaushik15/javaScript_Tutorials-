class myClass {

    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    sameFunction () {
        console.log(`Hi ${this.name} what is going on? Your age is ${this.age}`)
    }

}


class myClass1 extends myClass{               // child class Extend parent class through EXTENDS Keyword

    constructor (number, str, age, name) {
        super(name, age);
        this.number = number;
        this.str = str;
    }

    display () {
        console.log(`${this.number} - ${this.str} - ${this.name} - ${this.age}`)
    }
}

const person1 = new myClass("ayush", 12);
const person2 = new myClass1("shashank", 15, "ayush", 123)
person2.display();

// person1.sameFunction()
