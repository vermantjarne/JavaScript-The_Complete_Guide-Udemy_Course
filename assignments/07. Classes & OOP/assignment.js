// #1
class Course {

    // #5
    #price = 0;
    
    // #4
    get price() {
        return `${this.#price}`;
    }
    
    set price(value) {
        if (isNaN(value) || value < 0) {
            return;
        }
        this.#price = (+value).toFixed(2);
    }

    // #1
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.#price = price;
    }

    // #2
    calculateLengthPriceValue() {
        return this.length / this.#price;
    }

    toString() {
        return `The course ${this.title} has a duration of ${this.length} hours and costs \$${this.#price}.`;
    }

}

// #1
const courseMathI = new Course("Math I", 40, 19.99);
const courseScienceIV = new Course("Science IV", 12, 12.99)

console.log(courseMathI);
console.log(courseScienceIV);

// #2
console.log(`Length/price value for ${courseMathI.title}: ${courseMathI.calculateLengthPriceValue()}`);
console.log(`Length/price value for ${courseScienceIV.title}: ${courseScienceIV.calculateLengthPriceValue()}`);
console.log(courseMathI.toString());
console.log(courseScienceIV.toString());

// #3
class PracticalCourse extends Course {

    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }

    toString() {
        return super.toString() + ` The course is a practical course containing ${this.numOfExercises} exercises.`;
    }

}

class TheoreticalCourse extends Course {

    toString() {
        return super.toString() + ` The course is a theoretical course.`;
    }

    publish() {
        console.log("This theoretical course has been officially published.")
    }

}

const practicalCourseEnglishI = new PracticalCourse("English I", 50, 21.99, 24);
console.log(`Length/price value for ${practicalCourseEnglishI.title}: ${practicalCourseEnglishI.calculateLengthPriceValue()}`);
console.log(practicalCourseEnglishI.toString());

const theoreticalCourseBiologyIII = new TheoreticalCourse("Biology III", 23, 17.99);
console.log(`Length/price value for ${theoreticalCourseBiologyIII.title}: ${theoreticalCourseBiologyIII.calculateLengthPriceValue()}`);
console.log(theoreticalCourseBiologyIII.toString());
theoreticalCourseBiologyIII.publish();

// #4 - #5
practicalCourseEnglishI.price = -5.99;
theoreticalCourseBiologyIII.price = 15.99;

console.log(practicalCourseEnglishI.toString());
console.log(theoreticalCourseBiologyIII.toString());