function data(value) {
    document.getElementById('display').value += value;
}

function result() {
    let expression = document.getElementById('display').value;
    let result;
    result = /^[0-9+\-*/.\s]+$/.test(expression) ? eval(expression) : 'Error';
    document.getElementById('display').value = result;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}