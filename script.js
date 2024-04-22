let displayValue = '';

function appendNumber(number){
    displayValue += number;
    updateDisplay();
}

function clearDisplay(){
    displayValue = '';
    updateDisplay();
}

function appendOperator(operator){
   displayValue += operator;
   updateDisplay();
}

function appendDecimal(){
    displayValue += '.';
    updateDisplay();
}

function calculate(){
    displayValue = eval(displayValue);
    updateDisplay();
}

function updateDisplay(){
    document.getElementById('display').value = displayValue;
}