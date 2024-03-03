"use strict";

// create a container for the grid
// create 16x16 grid
function create16x16Grid() {
    const TOTAL_ROWS = 16;
    const TOTAL_SQUARES_PER_ROW = 16;
    const container = document.createElement("div");

    // each row will have 16 boxes
    for (let rowCnt = 0; rowCnt < TOTAL_ROWS; rowCnt++) {
        const row = document.createElement("div");

        for (let boxCnt = 0; boxCnt < TOTAL_SQUARES_PER_ROW; boxCnt++) {
            const box = document.createElement("div");
            row.appendChild(box);
        }

        // add the newly created row to the container
        container.appendChild(row);
    }

    document.body.appendChild(container);
}

create16x16Grid();