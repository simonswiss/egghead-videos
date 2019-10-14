import { css } from "emotion";

const headingStyles = css`
  font-family: sans-serif;
  background-color: rebeccapurple;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 2px;
  transition: color 0.2s, background-color 0.2s;

  :hover {
    color: rebeccapurple;
    background-color: #f2f2f2;
  }
`;

// Create a heading (h1 tag)
const heading = document.createElement("h1");
heading.innerText = "Using emotion with vanilla JavaScript!";
heading.classList.add(headingStyles);

// Append said heading to our app
const app = document.getElementById("app");
app.appendChild(heading);
