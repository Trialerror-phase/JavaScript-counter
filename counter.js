let count = 0;

function updateDisplay() {
    document.getElementById("count").innerText = count;
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}
