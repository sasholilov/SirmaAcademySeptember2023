//2. Hello World
console.log("Hello World");

//3.Different data types
function hello() {
  let num = 100;
  console.log(num);
  let num2 = 3.15;
  console.log(num2);
}
hello();

//4. Read User Input - Name
function printName(name) {
  console.log(name);
}

printName("Alex");
printName("Pesho");
printName("Ivan");

//5. Read different data
function readDifferentData(text, integer, realNumber) {
  console.log(text, integer, realNumber);
}
readDifferentData("Alex", 500, 3.14);

//6. Printing
function printing(text, integer, realNumber) {
  console.log(text);
  console.log(integer);
  console.log(realNumber);
}
printing("Ivan Petrov", 512, 11.22);

//7. Weather Forecast
function weatherForecast(city, degree) {
  console.log("Today in " + city + " is " + degree + " degrees.");
}
weatherForecast("Sofia", 25);
weatherForecast("Varna", 12);
weatherForecast("Burgas", 35);

//8. Kilometers in miles
function kmInMiles(kilometers) {
  let miles = kilometers * 0.621371;
  console.log(miles);
}
kmInMiles(5);
kmInMiles(10.5);
kmInMiles(42);
kmInMiles(123.5);

//9. Calculate
function calculate(numOne, numTwo) {
  console.log("Sum: " + (numOne + numTwo));
  console.log("Difference: " + (numOne - numTwo));
  console.log("Product: " + numOne * numTwo);
  console.log("Average: " + (numOne + numTwo) / 2);
}
calculate(25, 5);

//10. Square Face
function squareFace(num) {
  console.log(num * num);
}
squareFace(5);
squareFace(10);

//11. Time
function time(minutes) {
  let hour = Math.floor(minutes / 60);
  let minutesConv = minutes % 60;
  console.log(hour + ":" + minutesConv);
}
time(60);
time(90);
time(325);

//12. Time v2
function timeV2(minutes) {
  function leadingZero(num) {
    if (num <= 9) {
      return `0${num}`;
    } else return num;
  }
  let hour = Math.floor(minutes / 60);
  let minutesConv = minutes % 60;
  console.log(leadingZero(hour) + ":" + leadingZero(minutesConv));
}

timeV2(60);
timeV2(90);
timeV2(325);

//13. Painting
function painting(yellowLitters) {
  let red = yellowLitters / 4;
  let white = yellowLitters * 2;
  let yellow = yellowLitters;
  let total = red + white + yellow;
  console.log("Red:", red);
  console.log("White:", white);
  console.log("Yellow:", yellow);
  console.log("Total:", total);
}

painting(10);
painting(17);
painting(42);

//14. Console converter: EUR to BGN
function eurToBgn(eur) {
  let bgn = eur * 1.95583;
  console.log(bgn.toFixed(2));
}

eurToBgn(1);
eurToBgn(15);
eurToBgn(123);
eurToBgn(0.5);
eurToBgn(0.51);

//15. Speed
function speed(distance, hours, minutes, seconds) {
  let time = seconds + minutes * 60 + hours * 3600;
  let calculatedSpeed = distance / time;
  console.log(calculatedSpeed.toFixed(6));
}
speed(100, 1, 20, 20);
speed(2500, 5, 56, 23);
speed(600, 7, 35, 55);

//16. Office
function office(firstCabinetCost) {
  let firstCabinet = firstCabinetCost;
  let secondCabinet = firstCabinet * 0.8;
  let thirdCabinet = (firstCabinet + secondCabinet) * 1.15;
  console.log((firstCabinet + secondCabinet + thirdCabinet).toFixed(3));
}
office(380);
office(720.5);
office(455.3);

function journey(firstCarSpeed, secondCarSpeed) {
  let firstCarDistance = firstCarSpeed * 5;
  let secondCarDistance = secondCarSpeed * 3;
  let distanceBetweenCars = firstCarDistance - secondCarDistance;
  console.log(distanceBetweenCars);
}
journey(81, 120);
journey(100, 90);
journey(75, 90);

//18. Body Mass Index (BMI)
function bodyMassIndex(weight, height) {
  let result = weight / Math.pow(height, 2);
  console.log(result.toFixed(2));
}
bodyMassIndex(70, 1.73);
bodyMassIndex(60, 1.75);
bodyMassIndex(85, 1.8);

//19. Water Consumption
function waterConsumption(water, people) {
  let result = water / (7 * people);
  console.log(result.toFixed(2));
}

waterConsumption(2450, 7);
waterConsumption(3150, 10);
waterConsumption(980, 7);

//20. Electricity Bill
function electricityBill(consumed, rate) {
  let totalBill = consumed * rate + 10 * rate;
  console.log(totalBill.toFixed(2));
}
electricityBill(100, 1.0);
electricityBill(200, 1.0);
electricityBill(150, 1.1);

//21. Average Speed
function averageSpeed(distane, time) {
  let averageSpeedResult = distane / time;
  console.log(averageSpeedResult.toFixed(2));
}
averageSpeed(200, 2);
averageSpeed(150, 3);
averageSpeed(300, 5);

//22. Fuel Efficiency
function fuelEfficiency(distance, fuelConsumed) {
  let fuelEfficiencyResult = distance / fuelConsumed;
  console.log(fuelEfficiencyResult.toFixed(2));
}
fuelEfficiency(500, 40);
fuelEfficiency(600, 40);
fuelEfficiency(750, 40);

//23. Circle Circumference
function circleCircumference(radius) {
  let circumreference = 2 * Math.PI * radius;
  console.log(circumreference.toFixed(2));
}
circleCircumference(5);
circleCircumference(7);
circleCircumference(10);
