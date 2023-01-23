let words = ["happy", "joyful", "content", "disappointed", "sad", "angry"];

let matrix = [];

for (let i = 0; i < words.length; i++) {
  matrix[i] = [];
  for (let j = 0; j < words.length; j++) {
    matrix[i][j] = "";
  }
}

for (let i = 0; i < words.length; i++) {
  let topWord = words[i];
  console.log(`Comparing ${topWord} against:`);
  for (let j = 0; j < words.length; j++) {
    let leftWord = words[j];
    console.log(leftWord);
    // Compare topWord against leftWord
    // If topWord is more positive or less negative than leftWord, put a "+" in the box
    // If less positive or more negative, give it a "-"
    let comparison = "+";
    if (topWord == "disappointed" || topWord == "sad" || topWord == "angry") {
      comparison = "-";
    }
    if (leftWord == "disappointed" || leftWord == "sad" || leftWord == "angry") {
      if (comparison == "-") {
        comparison = "0";
      }
      else {
        comparison = "-";
      }
    }
    matrix[i][j] = comparison;
  }
}

console.log(matrix);

