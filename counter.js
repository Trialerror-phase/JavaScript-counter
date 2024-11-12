let count = 0;
let step = 1;  // Default step value

// Check if there's a saved count in local storage
if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"), 10);
}
updateDisplay();

// Function to update the display
function updateDisplay() {
    document.getElementById("count").innerText = count;
}

// Increment function
function increment() {
    if (count < 100) {  // Example of a maximum limit
        count += step;
        saveCount();
        updateDisplay();
    }
}

// Decrement function
function decrement() {
    if (count > 0) {  // Example of a minimum limit
        count -= step;
        saveCount();
        updateDisplay();
    }
}

// Reset function to set count back to zero
function reset() {
    count = 0;
    saveCount();
    updateDisplay();
}

// Save count to local storage
function saveCount() {
    localStorage.setItem("count", count);
}

// Update the step increment based on user input
function updateStep() {
    const stepInput = document.getElementById("step").value;
    step = parseInt(stepInput, 10) || 1;
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
