let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '') return;
    if (firstOperand === '') {
        firstOperand = currentInput;
        currentOperator = operator;
        currentInput = '';
    } else {
        calculateResult();
        currentOperator = operator;
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    if (currentInput === '' || currentOperator === '') return;
    secondOperand = currentInput;
    let result = 0;
    switch (currentOperator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}
