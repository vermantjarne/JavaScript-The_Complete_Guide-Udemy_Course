// #1
const taskOneArray = [1, 3, 5, 8, 10];

const taskOneArrayGreaterThanFive = taskOneArray.filter(value => value > 5);
const taskOneArrayMap = taskOneArray.map(value => ({"num": value}));
const taskOneArrayReduced = taskOneArray.reduce((previousValue, currentValue) => previousValue * currentValue, 1);

console.log(taskOneArrayGreaterThanFive);
console.log(taskOneArrayMap);
console.log(taskOneArrayReduced);

// #2
const findMax = (...numbers) => {
    numbers.sort((a, b) => b - a);
    return numbers[0];
};
console.log(findMax(...taskOneArray));

// #3
const findMinAndMax = (...numbers) => {
    numbers.sort((a, b) => a - b);
    return [numbers[0], numbers[numbers.length - 1]];
}
const [min, max] = findMinAndMax(...taskOneArray);
console.log(min, max);

// #4
const taskFourSet = new Set([1, 4, 8, 3]);
console.log(taskFourSet);