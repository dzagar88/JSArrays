function matrixBuilder(n) {
  // Create an empty array to hold the rows of the matrix
  const matrix = [];

  // Loop through n rows
  for (let i = 0; i < n; i++) {
    // Create an empty row array to hold the columns of the current row
    const row = [];

    // Loop through n columns
    for (let j = 0; j < n; j++) {
      // If i is equal to j, or i+j is equal to n-1, push a 1 to the row array, otherwise push a 0
      if (i === j || i + j === n - 1) {
        row.push(1);
      } else {
        row.push(0);
      }
    }

    // Push the completed row array to the matrix array
    matrix.push(row);
  }

  // Return the completed matrix array
  return matrix;
}