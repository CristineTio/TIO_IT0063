const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
    changeBackgroundColor();
}

function clearDisplay() {
    display.value = '';
    changeBackgroundColor();
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
    changeBackgroundColor();
}

function changeBackgroundColor() {
    const colors = [
        "linear-gradient(45deg, #FF5733, #FFC300)",
        "linear-gradient(45deg, #33FF57, #57FFCC)",
        "linear-gradient(45deg, #3357FF, #A133FF)",
        "linear-gradient(45deg, #F3FF33, #FF9633)",
        "linear-gradient(45deg, #FF33A1, #33D4FF)"
    ];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}
