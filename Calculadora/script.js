function insertNumber(element) {
    let display = document.getElementById("display-calculator");
    display.value += element.value;
}

function clearDisplay() {
    document.getElementById("display-calculator").innerHTML = " "
}