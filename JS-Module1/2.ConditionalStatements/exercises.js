//2.Check for an excellent rating
function checkExcellentRating(rating) {
  if (rating >= 5.5) {
    console.log("Excellent");
  } else console.log("no output");
}
checkExcellentRating(5.51);
checkExcellentRating(4);

//3. Larger number
function largerNumber(numOne, numTwo) {
  if (numOne > numTwo) {
    console.log(numOne);
  } else {
    console.log(numTwo);
  }
}

largerNumber(2, 4);
largerNumber(7, 12);
largerNumber(-1, -5);

//4. Number from 0 to 9 with words
function numberWithWords(number) {
  if (number === 0) {
    console.log("zero");
  } else if (number === 1) {
    console.log("one");
  } else if (number === 2) {
    console.log("two");
  } else if (number === 3) {
    console.log("three");
  } else if (number === 4) {
    console.log("four");
  } else if (number === 5) {
    console.log("five");
  } else if (number === 6) {
    console.log("six");
  } else if (number === 7) {
    console.log("seven");
  } else if (number === 8) {
    console.log("eight");
  } else if (number === 9) {
    console.log("nine");
  } else if (number > 9) {
    console.log("too big");
  }
}
numberWithWords(7);
numberWithWords(5);
numberWithWords(10);

//5.Face of figures
function faceF(figure, a, b) {
  let area = 0;
  switch (figure) {
    case "square":
      area = a * a;
      console.log(area.toFixed(2));
      break;
    case "rectangle":
      area = a * b;
      console.log(area.toFixed(2));
      break;
    case "triangle":
      area = (a * b) / 2;
      console.log(area.toFixed(2));
      break;
    case "circle":
      let radius = a;
      area = Math.PI * radius * radius;
      console.log(area.toFixed(2));
      break;
  }
}
faceF("square", 5);
faceF("rectangle", 10, 3.5);
faceF("triangle", 4.5, 20);
faceF("circle", 10);
