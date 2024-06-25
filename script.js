let selectedColor = '';

function addR() {
    console.log("Adding row");
    const table = document.getElementById('grid');
    const row = table.insertRow();
    const cols = table.rows[0] ? table.rows[0].cells.length : 1;
    for (let i = 0; i < cols; i++) {
        const cell = row.insertCell();
        cell.onclick = () => colorCell(cell);
    }
}

function addC() {
    console.log("Adding column");
    const table = document.getElementById('grid');
    const rows = table.rows.length;
    for (let i = 0; i < rows; i++) {
        const cell = table.rows[i].insertCell();
        cell.onclick = () => colorCell(cell);
    }
    if (rows === 0) {
        addR();
    }
}

function removeR() {
    console.log("Removing row");
    const table = document.getElementById('grid');
    if (table.rows.length > 0) {
        table.deleteRow(-1);
    }
}

function removeC() {
    console.log("Removing column");
    const table = document.getElementById('grid');
    const rows = table.rows.length;
    if (rows > 0) {
        for (let i = 0; i < rows; i++) {
            table.rows[i].deleteCell(-1);
        }
    }
}

function fillU() {
    console.log("Filling uncolored cells");
    const cells = document.querySelectorAll('.grid-item, td');
    cells.forEach(cell => {
        if (cell.style.backgroundColor === 'white' || cell.style.backgroundColor === '') {
            cell.style.backgroundColor = selectedColor;
        }
    });
}

function fill() {
    console.log("Filling all cells");
    const cells = document.querySelectorAll('.grid-item, td');
    cells.forEach(cell => {
        cell.style.backgroundColor = selectedColor;
    });
}

function clearAll() {
    console.log("Clearing all cells");
    const cells = document.querySelectorAll('.grid-item, td');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

function selected() {
    const select = document.getElementById('selectedID');
    selectedColor = select.value;
    console.log("Selected color:", selectedColor);
}

function colorCell(cell) {
    cell.style.backgroundColor = selectedColor;
}
