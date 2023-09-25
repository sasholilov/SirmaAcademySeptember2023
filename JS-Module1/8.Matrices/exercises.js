//1. Compare Matrices
console.log("----------Compare Matrices-----------");

function compareMatrices(arr) {
  let msg = "equal";
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      if (arr[row].length != arr[column].length) {
        msg = "not equal";
      }
    }
  }
  console.log(msg);
}
compareMatrices([
  [2, 3, 1],
  [2, 1, 3],
  [1, 2, 3],
  [2, 1, 3],
]);

//2. Matrix Addition
console.log("--------Matrix Addition---------");
function matrixAddition(matrix1, matrix2) {
  let matrix3 = [];

  for (let row = 0; row < matrix1.length; row++) {
    let tempArray = [];
    for (let column = 0; column < matrix1[row].length; column++) {
      let sum = matrix1[row][column] + matrix2[row][column];
      tempArray.push(sum);
    }
    matrix3.push(tempArray);
  }
  matrix3.forEach((e) => {
    console.log(`${e.join(" ")}`);
  });
}

matrixAddition(
  [
    [1, 2],
    [3, 4],
  ],
  [
    [2, 2],
    [2, 2],
  ]
);

//3. Intersection of Two Matrices
console.log("---------Intersection of Two Matrices-----------");

function intersection(matrix1, matrix2) {
  let matrix3 = [];
  for (let row = 0; row < matrix1.length; row++) {
    let tempArray = [];
    for (let column = 0; column < matrix1[row].length; column++) {
      let str = "";
      if (matrix1[row][column] === matrix2[row][column]) {
        str += matrix1[row][column];
      } else str += "*";
      tempArray.push(str);
    }
    let newTempArray = tempArray.filter((e) => e != " ");
    matrix3.push(newTempArray);
  }
  matrix3.forEach((e) => {
    console.log(e.join(" "));
  });
}

intersection(
  ["a b c d", "a b c d", "a b c d"],
  ["k b c k", "a b g d", "a k c d"]
);

intersection(
  ["1 2", "3 4", "5 6", "7 8", "9 1"],
  ["0 2", "3 1", "1 6", "7 4", "1 1"]
);

//4. Sum Matrix Elements
console.log("----------Sum Matrix Elements----------");
function sumMatrix(matrix) {
  let rowCount = 0;
  let columnCount = 0;
  let sum = 0;

  for (let row = 0; row < matrix.length; row++) {
    rowCount++;
    for (let column = 0; column < matrix[row].length; column++) {
      columnCount = matrix[row].length;
    }
  }

  sum = matrix.reduce((acc, element) => {
    return acc + element.reduce((acc2, el) => acc2 + el);
  }, 0);

  console.log(rowCount);
  console.log(columnCount);
  console.log(sum);
}

sumMatrix([
  [10, 11, 12, 13],
  [14, 15, 16, 17],
]);

//5. Maximum Sum of 2X2 Submatrix
console.log("--------Maximum Sum of 2X2 Submatrix---------");
