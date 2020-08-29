function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    // loop rows
    for (let r=0; r < height; r++) {
        grid += '<tr class="row-'+r+'">';
        // loop cells
        for (let c=0; c < width; c++) {
            grid += '<td class="cell" id="row-'+r+'_cell-'+c+'"></td>';
        }
        grid += '</tr>';
    }
    // add table grid
    table.innerHTML = grid;

    // add click event to table grid cells
    addClickEventToCells();
}

// gets height + width values and calls makrGrid()
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// add click events to all cells in grid
function addClickEventToCells() {
    // on color selection return color:
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let r=0; r < cells.length; r++) {
        cells[r].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}



// submit form #sizePicker:
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};

// load default 15x15 grid.
makeGrid(15, 15);