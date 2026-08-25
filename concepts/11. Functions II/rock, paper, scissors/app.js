const startGameBtn = document.getElementById('start-game-btn');

// const start = function() {
//     console.log("Game is starting...");
// };

// const person = {
//     greet: function greet() {
//         console.log("Hello there!");
//     }
// };

// person.greet();

// console.log(typeof startGame);
// console.dir(startGame);

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN";

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        // return DEFAULT_USER_CHOICE;
        return;
    }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    }
    else if (randomValue < 0.67) {
        return PAPER;
    }
    return SCISSORS;
};

// const add = (a, b) => a + b;

// const add2 = function(a, b) {
//     return a + b;
// };

const getWinner = (computerChoice, playerChoice = DEFAULT_USER_CHOICE) => {
    if (computerChoice === playerChoice) {
        return RESULT_DRAW;
    }
    else if (
        computerChoice === ROCK && playerChoice === PAPER ||
        computerChoice === PAPER && playerChoice === SCISSORS ||
        computerChoice === SCISSORS && playerChoice === ROCK
    ) {
        return RESULT_PLAYER_WIN;
    }
    return RESULT_COMPUTER_WIN;
}

// startGameBtn.addEventListener("click", start);
startGameBtn.addEventListener("click", () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    }
    else {
        winner = getWinner(computerChoice);
    }
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE} and the computer picked ${computerChoice}. `;
    if (winner === RESULT_DRAW) {
        message += `It was a draw.`;
    }
    else if (winner === RESULT_PLAYER_WIN) {
        message += `You won.`;
    }
    else {
        message += `You lost.`;
    }
    alert(message);
    gameIsRunning = false;
});


// Not related to the game

// const combine = (resultHandler, operation, ...numbers) => {
//     const validateNumber = (number) => {
//         return isNaN(number) ? 0 : number;
//     };

//     let sum = 0;
//     for (const num of numbers) {
//         if (operation = "ADD") {
//             sum += validateNumber(num);
//         }
//         else {
//             sum -= validateNumber(num);
//         }
//     }
//     resultHandler(sum);
// };

// // const subtractUp = function(resultHandler, ...numbers) {
// //     let sum = 0;
// //     for (const num of numbers) {
// //         sum += num;
// //     }
// //     resultHandler(sum, "The result after subtracting all numbers is");
// // };

// const showResult = (messageText, result) => {
//     alert(`${messageText} ${result}`);
// };

// // console.log(sumUp([1, 5, 10, -3, 6, 10]));
// combine(showResult.bind(this, "The result after adding all numbers is:"), "ADD", 1, 5, 'not a number', -3, 6, 10);
// combine(showResult.bind(this, "The result after adding all numbers is:"), "ADD", 1, 5, 10, -3, 6, 10, 25, 88);
// combine(showResult.bind(this, "The result after subtracting all numbers is:"), "SUBTRACT", 1, 5, 10, -3, 6, 10);