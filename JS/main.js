function data(value) {
    clearOnFirstDigit();
    document.getElementById('display').value += value;
}

function result() {
    let expression = document.getElementById('display').value;

    try {
        let result = /^[0-9+\-*/.\s]+$/.test(expression) ? new Function('return ' + expression)() : '0';

        if (!isFinite(result)) {
            throw new Error("Error");
        }

        document.getElementById('display').value = result.toFixed(2);
    } catch (error) {
        document.getElementById('display').value = "Error";
    }
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

function backspace() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}