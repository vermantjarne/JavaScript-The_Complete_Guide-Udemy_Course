class AgedPerson {
    printAge() {
        console.log(this.age);
    }
}

class Person extends AgedPerson {
    name = "Jarne";

    constructor() {
        super();
        this.age = 23;
    }

    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    }
    
    // greet = function() {
    //     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    // }
    
    // greet = () => {
    //     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    // }
}

// function Person() {
//     this.name = "Jarne";
//     this.age = 23;
//     this.greet = function() {
//         console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
//     };
// }

// function Person() {
//     this.name = "Jarne";
//     this.age = 23;
// }

// Person.prototype.greet = function() {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
// };

// Person.describe = function() {
//     console.log("Creating persons...");
// }

// // Person.prototype = {
// //     printAge() {
// //         console.log(this.age);
// //     }
// // }

// Person.prototype.printAge = function() {
//     console.log(this.age);
// }

// console.dir(Person);
// console.dir(Object);

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.toString());
// console.log(person.__proto__);
// console.log(person.__proto__ === Person.prototype);

// const person2 = new person.__proto__.constructor();
// console.log(person2);

// const person = new Person();
// const person2 = new Person();
// console.log(person);
// console.log(person.__proto__ === person2.__proto__);

// const button = document.getElementById("btn");
// button.addEventListener("click", person.greet.bind(person));

const course = {
    title: "English I",
    rating: 5
};

// console.log(course.__proto__);
// console.log(Object.getPrototypeOf(course));
// console.log(course.__proto__ === Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
    // ...Object.getPrototypeOf(course),
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({
    printProgress: function() {
        console.log(this.progress);
    }
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: "Jarne",
        writable: true
    }
});

// student.name = "Jarne";
Object.defineProperty(student, "progress", {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
});

console.log(course.__proto__);
course.printRating();
console.log(student);
student.printProgress();