// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(); // []
// const moreNumbers = new Array("Hi", "Welcome"); // ["Hi", "Welcome"]
// const moreNumbers = new Array(5); // [] of length 5
// const moreNumbers = Array(1);
// const moreNumbers = Array(5, 2);
// const moreNumbers = Array.of(1, 2);
// console.log(moreNumbers);

// const separatedString = Array.from("Hi");

// const listItems = document.querySelectorAll("li");
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["Cooking", "Sports"];
// const personalData = [23, "Jarne", {moreDetails: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// hobbies.push("Reading");
// hobbies.unshift("Coding");
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = "Coding";
// // hobbies[5] = "Reading";
// console.log(hobbies);

// hobbies.splice(1, 0, "Good Food");
// console.log(hobbies);

// hobbies.splice(0, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResults = testResults.slice();
// // const storedResults = testResults.slice(0, 2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5))

// console.log(testResults.includes(10.99));

// const personData = [{name: "Max"}, {name: "Manuel"}];
// console.log(personData.indexOf({name: "Manuel"}));

// const manuel = personData.find((person, index, persons) => {
//     return person.name === "Manuel";
// });

// manuel.name = "Anna";

// console.log(manuel);

// const maxIndex = personData.findIndex((person, index, persons) => {
//     return person.name === "Max";
// });

// console.log(maxIndex)

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, index, prices) => {
//     const priceObj = {index: index, taxAdjustedPrice: price * (1 + tax)};
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// const taxAdjustedPricesMapped = prices.map((price, index, prices) => {
//     const priceObj = {index: index, taxAdjustedPrice: price * (1 + tax)};
//     return priceObj;
// });

// console.log(taxAdjustedPricesMapped);

// const sortedPrices = prices.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     }
//     else if (a === b) {
//         return 0;
//     }
//     else {
//         return -1;
//     }
// });
// console.log(sortedPrices.reverse());

// // const filteredArray = prices.filter((price, index, prices) => {
// //     return price > 6;
// // });
// const filteredArray = prices.filter(price => price > 6);

// console.log(filteredArray);

// // let sum = 0;
// // prices.forEach(price => sum += price);
// // console.log(sum);

// // const sum = prices.reduce((previousValue, currentValue, currentIndex, prices) => {
// //     return previousValue + currentValue;
// // }, 0);

// const sum = prices.reduce((previousValue, currentValue) => previousValue + currentValue);
// console.log(sum);

// const data = "new york;10.99;2000";
// const transformedData = data.split(";");
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ["Jarne", "Vermant"];
// const name = nameFragments.join(" ");
// console.log(name);

// const copiedNameFragments = [...nameFragments]
// nameFragments.push("Mr");
// nameFragments[0] = "JARNE";
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [{name: "Max", age: 30}, {name: "Manuel", age: 31}];
// // const copiedPersons = [...persons];
// const copiedPersons = persons.map(person => ({
//     name: person.name,
//     age: person.age
// }));

// persons.push({name: "Anna", age: 29});
// persons[0].age = 31;

// console.log(persons, copiedPersons);

const nameData = ["Jarne", "Vermant", "Mr", 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);