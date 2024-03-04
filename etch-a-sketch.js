"use strict";

const container = document.createElement("div");
const customGridBtn = document.querySelector(".custom-grid-btn");

customGridBtn.addEventListener("click", () => {
    let userInput = prompt("Please enter a number between 1 and 100 for the grid size:");

    userInput = parseInt(userInput);

    while (isNaN(userInput) || userInput < 1 || userInput > 100) {
        alert("Invalid input!");
        userInput = prompt("Please enter a number between 1 and 100 for the grid size:");
        if (userInput === null) {
            return;
        }
        userInput = parseInt(userInput);
    }

    // remove current grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid(userInput);
});

function createGrid(size = 16) {    
    const TOTAL_ROWS = size;
    const TOTAL_SQUARES_PER_ROW = size;    

    // Calculate square size to fit within the window
    const squareSize = Math.min(
        Math.floor((window.innerHeight - 50) / TOTAL_ROWS), // Adjusted for header/footer
        Math.floor((window.innerWidth - 50) / TOTAL_SQUARES_PER_ROW)
    );

    for (let rowCnt = 0; rowCnt < TOTAL_ROWS; rowCnt++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let squareCnt = 0; squareCnt < TOTAL_SQUARES_PER_ROW; squareCnt++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.style.width = `${squareSize}px`; // Set square size dynamically
            square.style.height = `${squareSize}px`; // Set square size dynamically

            square.addEventListener("mouseover", changeColor);
            row.appendChild(square);
        }

        container.appendChild(row);
        container.setAttribute("class", "container");
    }

    document.body.appendChild(container);
}

// adds a random color to the square when the mouse hovers over it
function changeColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// create default 16x16 grid
createGrid();
