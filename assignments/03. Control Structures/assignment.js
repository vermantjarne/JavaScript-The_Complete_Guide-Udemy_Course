const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
    alert("The number is greater than 0.7!");
}

const numbers = [1, 2, 3];

for (i = numbers.length; i > 0; i--) {
    console.log(numbers[i]);
}

for (const numbersItem of numbers) {
    console.log(numbersItem);
}

const otherRandomNumber = Math.random();

if ((randomNumber > 0.7 && otherRandomNumber > 0.7) || randomNumber <= 0.2 || otherRandomNumber <= 0.2) {
    alert("Both numbers are greater than 0.7 OR at least one of the numbers is below 0.2!");
}