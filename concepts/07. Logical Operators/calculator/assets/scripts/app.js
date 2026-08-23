const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

/**
 * Retrieves the user's input from the calculator as a number.
 * @returns The user input
*/
function getUserInputAsNumber() {
    return parseInt(userInput.value);
}

/**
 * Writes the output to the calculator, filling in the description and the result.
 * @param {*} operator The operator used in the calculation (+, -, *, /)
 * @param {*} resultBeforeCalculation The result before the calculation
 * @param {*} resultAfterCalculation The result after the calculation
 */
function writeOutput(operator, resultBeforeCalculation, resultAfterCalculation) {
    const description = `${resultBeforeCalculation} ${operator} ${resultAfterCalculation}`;
    outputResult(currentResult, description);
}

function writeToLog(operation, leftOperand, rightOperand, result) {
    const logEntry = {
        operation: operation,
        leftOperand: leftOperand,
        rightOperand: rightOperand,
        result: result
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    // if (
    //     calculationType !== "addition" &&
    //     calculationType !== "subtraction" &&
    //     calculationType !== "multiplication" &&
    //     calculationType !== "division"
    // ) {
    //     return;
    // }

    const inputValue = getUserInputAsNumber();

    if (!inputValue) {
        return;
    }

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === "addition") {
        currentResult += inputValue;
        mathOperator = "+";
    }
    else if (calculationType === "subtraction") {
        currentResult -= inputValue;
        mathOperator = "-";
    }
    else if (calculationType === "multiplication") {
        currentResult *= inputValue;
        mathOperator = "*";
    }
    else if (calculationType === "division") {
        currentResult /= inputValue;
        mathOperator = "/";
    }
    else {
        return;
    }

    writeOutput(mathOperator, initialResult, inputValue);
    writeToLog(calculationType, initialResult, inputValue, currentResult);
}

function add() {
    calculateResult("addition");
}

function subtract() {
    calculateResult("subtraction");
}

function multiply() {
    calculateResult("multiplication");
}

function divide() {
    calculateResult("division");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);