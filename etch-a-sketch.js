"use strict";

// create a container for the grid
// create 16x16 grid
function create16x16Grid() {
    const TOTAL_ROWS = 16;
    const TOTAL_SQUARES_PER_ROW = 16;
    const container = document.createElement("div");

    // each row will have 16 squarees
    for (let rowCnt = 0; rowCnt < TOTAL_ROWS; rowCnt++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let squareCnt = 0; squareCnt < TOTAL_SQUARES_PER_ROW; squareCnt++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            row.appendChild(square);
        }

        // add the newly created row to the container
        container.appendChild(row);
        container.setAttribute("class", "container");
    }

    document.body.appendChild(container);
}

create16x16Grid();