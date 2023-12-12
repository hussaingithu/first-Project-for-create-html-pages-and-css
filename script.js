// script.js

// Function to greet the user
function greetUser() {
    let name = prompt("Enter your name:");
    if (name) {
        alert(`Hello, ${name}! Welcome to our website.`);
    } else {
        alert("Hello, visitor! Welcome to our website.");
    }
}

// Function to change background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}
