// Create table element
let table = document.createElement("table");

// Create rows and cells
for (let i = 0; i < matrix.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matrix[i].length; j++) {
        let cell = document.createElement("td");
        cell.innerHTML = matrix[i][j];
        row.appendChild(cell);
    }
    table.appendChild(row);
}

// Insert table into the document
document.body.appendChild(table);

