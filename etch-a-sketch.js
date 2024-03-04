"use strict";

const customGridBtn = document.querySelector(".custom-grid-btn");
customGridBtn.addEventListener("click", () => {
    let userInput = prompt("Please enter a number between 1 and 100 for the grid size:");

    while (userInput < 0 || userInput > 100) {
        alert("Invalid input!");
        userInput = prompt("Please enter a number between 1 and 100 for the grid size:");
    }

    createGrid(userInput);
});

function createGrid(size = 16) {
    const TOTAL_ROWS = size;
    const TOTAL_SQUARES_PER_ROW = size;
    const container = document.createElement("div");
    
    for (let rowCnt = 0; rowCnt < TOTAL_ROWS; rowCnt++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let squareCnt = 0; squareCnt < TOTAL_SQUARES_PER_ROW; squareCnt++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.addEventListener("mouseover", changeColor);
            row.appendChild(square);
        }

        // add the newly created row to the container
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