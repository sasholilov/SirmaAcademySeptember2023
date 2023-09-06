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

//6. Day of the week

function dayOFWeek(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Error");
  }
}
dayOFWeek(1);
dayOFWeek(2);
dayOFWeek(3);
dayOFWeek(4);
dayOFWeek(5);
dayOFWeek(6);
dayOFWeek(7);
dayOFWeek(8);

//7.Even or odd
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else console.log("odd");
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(25);
evenOrOdd(1024);

//8. Speed

function speedCheck(speed) {
  if (speed <= 10) {
    console.log("slow");
  } else if (speed > 10 && speed <= 60) {
    console.log("average");
  } else if (speed > 60 && speed <= 120) {
    console.log("fast");
  } else if (speed > 120 && speed <= 160) {
    console.log("super-fast");
  } else console.log("turbo-fast");
}

speedCheck(10);
speedCheck(59);
speedCheck(120);
speedCheck(121);
speedCheck(183);

//9. Alarm after 15 minutes
function alarmAfter15min(hour, minutes) {
  function leadingZero(num) {
    if (num <= 9) {
      return `0${num}`;
    } else return num;
  }
  if (minutes + 15 > 59) {
    hour = hour + 1;
    if (hour > 23) {
      hour = 0;
    }
    minutes = minutes + 15 - 60;
    console.log(hour + ":" + leadingZero(minutes));
  } else {
    minutes = minutes + 15;
    console.log(hour + ":" + leadingZero(minutes));
  }
}

alarmAfter15min(1, 47);
alarmAfter15min(0, 2);
alarmAfter15min(23, 59);
alarmAfter15min(11, 7);
alarmAfter15min(12, 48);

//10. Address by age and gender
function addressByAgeAndGender(age, gender) {
  if (gender === "m" && age >= 16) {
    console.log("Mr.");
  } else if (gender === "m" && age < 16) {
    console.log("Master");
  } else if (gender === "f" && age >= 16) {
    console.log("Ms.");
  } else console.log("Miss");
}

addressByAgeAndGender(14, "f");
addressByAgeAndGender(17, "m");
addressByAgeAndGender(10, "m");
addressByAgeAndGender(32, "f");

//11. Grocery
function grocery(product, city, quantity) {
  if (city === "Sofia") {
    if (product === "coffee") {
      console.log((quantity * 0.5).toFixed(2));
    } else if (product === "water") {
      console.log((quantity * 0.8).toFixed(2));
    } else if (product === "juice") {
      console.log((quantity * 1.2).toFixed(2));
    } else if (product === "sweets") {
      console.log(quantity * (1.3).toFixed(2));
    } else if (product === "chips") {
      console.log(quantity * (1.6).toFixed(2));
    }
  }
  if (city === "Plovdiv") {
    if (product === "coffee") {
      console.log((quantity * 0.4).toFixed(2));
    } else if (product === "water") {
      console.log((quantity * 0.7).toFixed(2));
    } else if (product === "juice") {
      console.log((quantity * 1.15).toFixed(2));
    } else if (product === "sweets") {
      console.log(quantity * (1.3).toFixed(2));
    } else if (product === "chips") {
      console.log(quantity * (1.5).toFixed(2));
    }
  }
  if (city === "Varna") {
    if (product === "coffee") {
      console.log((quantity * 0.45).toFixed(2));
    } else if (product === "water") {
      console.log((quantity * 0.7).toFixed(2));
    } else if (product === "juice") {
      console.log((quantity * 1.1).toFixed(2));
    } else if (product === "sweets") {
      console.log(quantity * (1.35).toFixed(2));
    } else if (product === "chips") {
      console.log(quantity * (1.55).toFixed(2));
    }
  }
}

grocery("juice", "Sofia", 6);
grocery("chips", "Plovdiv", 1);
grocery("coffee", "Varna", 2);

//12. Number in range

function numberInrange(number) {
  if (number != 0) {
    console.log("Yes");
  } else console.log("No");
}

numberInrange(-25);
numberInrange(0);
numberInrange(25);

//13. Simple Calculator
function simpleCalculator(numOne, numTwo, operator) {
  if (operator === "add") console.log(numOne + numTwo);
  else if (operator === "subtract") console.log(numOne - numTwo);
  else if (operator === "multiply") console.log(numOne * numTwo);
  else if (operator === "devide") console.log(numOne / numTwo);
}

simpleCalculator(5, 5, "add");
simpleCalculator(10, 12, "subtract");
simpleCalculator(9, 3, "devide");
simpleCalculator(5, 2, "devide");
simpleCalculator(3.1, 0.1, "multiply");

//14. Vegetable Market
function vegitableMarket(product, day, quantity) {
  if (
    day !== "Monday" &&
    day !== "Tuesday" &&
    day !== "Wednesday" &&
    day !== "Thursday" &&
    day !== "Friday" &&
    day !== "Saturday" &&
    day !== "Sunday"
  ) {
    console.log("error");
    return;
  }
  if (
    product !== "tomato" &&
    product !== "onion" &&
    product !== "lettuce" &&
    product !== "cucumber" &&
    product !== "pepper"
  ) {
    console.log("error");
    return;
  }
  switch (day) {
    case "Saturday":
      if (product === "tomato") console.log((2.8 * quantity).toFixed(2));
      else if (product === "onion") console.log((1.3 * quantity).toFixed(2));
      else if (product === "lettuce") console.log((0.85 * quantity).toFixed(2));
      else if (product === "cucumber")
        console.log((1.75 * quantity).toFixed(2));
      else if (product === "pepper") console.log((3.5 * quantity).toFixed(2));
      break;
    case "Sunday":
      if (product === "tomato") console.log((2.8 * quantity).toFixed(2));
      else if (product === "onion") console.log((1.3 * quantity).toFixed(2));
      else if (product === "lettuce") console.log((0.85 * quantity).toFixed(2));
      else if (product === "cucumber")
        console.log((1.75 * quantity).toFixed(2));
      else if (product === "pepper") console.log((3.5 * quantity).toFixed(2));
      break;
    default:
      if (product === "tomato") console.log((2.5 * quantity).toFixed(2));
      else if (product === "onion") console.log((1.2 * quantity).toFixed(2));
      else if (product === "lettuce") console.log((0.85 * quantity).toFixed(2));
      else if (product === "cucumber")
        console.log((1.45 * quantity).toFixed(2));
      else if (product === "pepper") console.log((5.5 * quantity).toFixed(2));
  }
}

vegitableMarket("tomato", "Tuesday", 2);
vegitableMarket("onion", "Sunday", 3);
vegitableMarket("pepper", "Monday", 10);
vegitableMarket("banana", "Friday", 5);
vegitableMarket("apple", "April", 5);
vegitableMarket("tomato", "Tuesday", 221);
vegitableMarket("banana", "Tuesday", 221);

//15. Holiday
function holiday(budget, season) {
  if (budget <= 100) {
    if (season === "summer") {
      budget = budget * 0.3;
      console.log("Somewhere in Bulgaria");
      console.log("Camp" + " - " + budget.toFixed(2));
    } else {
      budget = budget * 0.7;
      console.log("Somewhere in Bulgaria");
      console.log("Hotel" + " - " + budget.toFixed(2));
    }
  } else if (budget <= 1000) {
    if (season === "summer") {
      budget = budget * 0.4;
      console.log("Somewhere in Europe");
      console.log("Camp" + " - " + budget.toFixed(2));
    } else {
      budget = budget * 0.8;
      console.log("Somewhere in Europe");
      console.log("Hotel" + " - " + budget.toFixed(2));
    }
  } else if (budget > 1000) {
    if (season === "summer") {
      budget = budget * 0.9;
      console.log("Somewhere in Asia");
      console.log("Camp" + " - " + budget.toFixed(2));
    } else {
      budget = budget * 0.9;
      console.log("Somewhere in Asia");
      console.log("Hotel" + " - " + budget.toFixed(2));
    }
  }
}

holiday(50, "summer");
holiday(75, "winter");
holiday(312, "summer");
holiday(678.53, "winter");
holiday(1500, "summer");

//16. Makeup Shop
function makeupShop(
  priceOfRenovation,
  powders,
  lipsticks,
  spirals,
  shadows,
  correctors
) {
  let totalPriceOfProducts =
    powders * 2.6 +
    lipsticks * 3 +
    spirals * 4.1 +
    shadows * 8.2 +
    correctors * 2;
  let numberOfMakeup = powders + lipsticks + spirals + shadows + correctors;
  if (numberOfMakeup > 50) {
    totalPriceOfProducts = totalPriceOfProducts * 0.75;
  }
  let profit = totalPriceOfProducts * 0.9;
  if (profit > priceOfRenovation) {
    console.log("Yes " + (profit - priceOfRenovation).toFixed(2) + " lv left");
  } else {
    console.log("Not enough money!");
    console.log(Math.abs(profit - priceOfRenovation).toFixed(2) + " lv needed");
  }
}

makeupShop(40.8, 20, 25, 30, 50, 10);
makeupShop(320, 8, 2, 5, 5, 1);

function atSea(days, room, assessment) {
  let totalPrice = 0;
  if (room === "single room") {
    totalPrice = (days - 1) * 25;
    if (assessment === "positive") {
      totalPrice = totalPrice * 1.25;
    } else totalPrice = totalPrice * 0.9;
    console.log(totalPrice.toFixed(2));
  } else if (room === "apartment") {
    if (days < 10) {
      totalPrice = (days - 1) * 50 * 0.7;
      if (assessment === "positive") {
        totalPrice = totalPrice * 1.25;
      } else totalPrice = totalPrice * 0.9;
      console.log(totalPrice.toFixed(2));
    } else if (days >= 10 && days < 15) {
      totalPrice = (days - 1) * 50 * 0.65;
      if (assessment === "positive") totalPrice = totalPrice * 1.25;
      else totalPrice = totalPrice * 0.9;
      console.log(totalPrice.toFixed(2));
    } else if (days > 15) {
      totalPrice = (days - 1) * 50 * 0.5;
      if (assessment === "positive") totalPrice = totalPrice * 1.25;
      else totalPrice = totalPrice * 0.9;
      console.log(totalPrice.toFixed(2));
    }
  } else if (room === "president apartment") {
    if (days < 10) {
      totalPrice = (days - 1) * 100 * 0.9;
      if (assessment === "positive") {
        totalPrice = totalPrice * 1.25;
      } else totalPrice = totalPrice * 0.9;
      console.log(totalPrice.toFixed(2));
    } else if (days >= 10 && days < 15) {
      totalPrice = (days - 1) * 100 * 0.85;
      if (assessment === "positive") {
        totalPrice = totalPrice * 1.25;
      } else totalPrice = totalPrice * 0.9;
      console.log(totalPrice.toFixed(2));
    } else if (days > 15) {
      totalPrice = (days - 1) * 100 * 0.8;
      if (assessment === "positive") {
        totalPrice = totalPrice * 1.25;
      } else totalPrice = totalPrice * 0.9;
      console.log(totalPrice.toFixed(2));
    }
  }
}

atSea(11, "apartment", "positive");
atSea(30, "president apartment", "negative");
atSea(12, "single room", "positive");
atSea(2, "apartment", "positive");

//18. Grade Calculator
function gradeCalculator(score) {
  if (score >= 0 && score <= 59) console.log("F");
  else if (score >= 60 && score <= 69) console.log("D");
  else if (score >= 70 && score <= 79) console.log("C");
  else if (score >= 80 && score <= 89) console.log("B");
  else if (score >= 90 && score <= 100) console.log("A");
}
gradeCalculator(95);
gradeCalculator(82);
gradeCalculator(76);
gradeCalculator(65);
gradeCalculator(45);

//19. Leap Year Checker
function leapYearChecker(year) {
  if (year % 4 === 0 && year % 100 != 0) console.log("Its a leap year");
  else if (year % 100 === 0 && year % 400 === 0) console.log("Its a leap year");
  else console.log("Its not a leap year");
}
leapYearChecker(2020);
leapYearChecker(1900);
leapYearChecker(2000);
leapYearChecker(2023);
leapYearChecker(1600);

//20. Movie Ticket Price
function movieTicketPrice(age) {
  if (age >= 0 && age <= 12) console.log("$5");
  else if (age >= 13 && age <= 19) console.log("$8");
  else if (age >= 20) console.log("$10");
}
movieTicketPrice(10);
movieTicketPrice(16);
movieTicketPrice(25);
movieTicketPrice(13);

//21. Days in a Month
function daysInMonth(month) {
  if (
    month === 1 ||
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    console.log("31");
  } else if (month === 2) console.log("28");
  else console.log("30");
}

daysInMonth(1);
daysInMonth(2);
daysInMonth(4);
daysInMonth(7);
