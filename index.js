let values = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

let matrix = [];

for (let i = 0; i < values.length; i++) {
  matrix[i] = [];
  for (let j = 0; j < values.length; j++) {
    matrix[i][j] = "";
  }
}

for (let i = 0; i < values.length; i++) {
  let topValue = values[i];
  console.log(`Comparing ${topValue} against:`);
  for (let j = 0; j < values.length; j++) {
    let leftValue = values[j];
    console.log(leftValue);
    // Compare topValue against leftValue
    // If topValue is more important for you to have in your life, put a "+" in the box
    // If less important, give it a "-"
    let comparison = "+";
    matrix[i][j] = comparison;
  }
}

console.log(matrix);

