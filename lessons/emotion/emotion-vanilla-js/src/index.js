// Create a heading (h1 tag)
const heading = document.createElement("h1");
heading.innerText = "Using emotion with vanilla JavaScript!";

// Get the div where the app is injected
const app = document.getElementById("app");

// Appending the heading to the app
app.appendChild(heading);
