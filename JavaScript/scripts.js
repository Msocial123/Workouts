// Function to change the text content of the paragraph
function changeText() {
    document.getElementById("text").innerHTML = "The text has been changed!";
}

// Function to change the color of the header and paragraph
function changeColor() {
    document.getElementById("header").style.color = "blue";
    document.getElementById("text").style.color = "red";
}

// Function to reset the text and color to their original states
function reset() {
    document.getElementById("text").innerHTML = "This text will change when you click the button.";
    document.getElementById("header").style.color = "#333";
    document.getElementById("text").style.color = "#555";
}
