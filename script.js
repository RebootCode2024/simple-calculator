let currentInput = '';
let newOperation = true;
const history = [];

function appendNumber(number) {
    const display = document.getElementById('display');
    if (newOperation) {
        display.value = '';
        newOperation = false;
    }
    display.value += number;
    currentInput = display.value;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);
    if (!isOperator(lastChar)) {
        display.value += operator;
    }
    currentInput = display.value;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    currentInput = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        display.value = result;
        newOperation = true;
        addToHistory(`${currentInput} = ${result}`);
    } catch {
        display.value = 'Error';
        newOperation = true;
    }
}

function addToHistory(entry) {
    history.push(entry);
    if (history.length > 5) {
        history.shift();
    }
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = '';
    history.forEach(entry => {
        const div = document.createElement('div');
        div.textContent = entry;
        historyContainer.appendChild(div);
    });
}

function clearHistory() {
    history.length = 0;
    updateHistoryDisplay();
}
