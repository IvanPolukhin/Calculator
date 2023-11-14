function data(value) {
    clearOnFirstDigit();
    document.getElementById('display').value += value;
}

function result() {
    let expression = document.getElementById('display').value;
    let result;
    result = /^[0-9+\-*/.\s]+$/.test(expression) ? eval(expression) : '0';
    document.getElementById('display').value = result;
}

function clearOnFirstDigit() {
    let currentValue = document.getElementById('display').value;
    if (currentValue === '0') {
        document.getElementById('display').value = '';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}