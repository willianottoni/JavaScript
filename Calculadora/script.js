let flagApaga = false;
let numAux = 0;

function insertNumber(element) {
    const display = document.getElementById("display-calculator")
    if (display.value == 0 || flagApaga == true) {
        display.value = element.value;
    } else {
        display.value += element.value;
    }
    flagApaga = false;
}

function insertOperacion(element) {
    const displayResult = document.getElementById("display-result")
    displayResult.value = element.value
    flagApaga = true;
    numAux = document.getElementById("display-calculator").value
}

function result(){
    let result = 0;
    let parcela = document.getElementById("display-calculator").value
    operacion = document.getElementById("display-result").value
    switch (operacion){
        case "+":
            result = numAux + parcela
            break;
        case "-":
            result = numAux - parcela
            break;
        case "x":
            result = numAux * parcela
            break;
        case "/":
            result = numAux / parcela
            break;
    }
    document.getElementById("display-calculator").value = result
    numAux = 0
    document.getElementById("display-result").value = ""
    flagApaga = true
}

function clearDisplay() {
    document.getElementById("display-calculator").value = ""
    document.getElementById("display-result").value = ""
}

