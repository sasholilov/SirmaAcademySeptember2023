//1.Sum First and Last Array Element
console.log("--------Sum First and Last Array Element---------");
function sumFirstLast(arr) {
  console.log(arr[0] + arr[arr.length - 1]);
}
sumFirstLast([20, 30, 40]);
sumFirstLast([10, 17, 22, 33]);
sumFirstLast([11, 58, 69]);

//2. Day of week
console.log("-----------Day of week-----------");
function dayOfWeek(day) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (day < 1 || day > 7) {
    console.log("Invalid day");
  } else {
    console.log(daysOfWeek[day - 1]);
  }
}

dayOfWeek(2);
dayOfWeek(5);
dayOfWeek(0);
dayOfWeek(11);
dayOfWeek(7);

//3.Reverse an Array of Numbers
console.log("-----------Reverse an Array of Numbers-----------");
function reverseAnArrayOfNumbers(number, array) {
  const newArr = [];
  const reverseArr = [];
  for (let i = 0; i < number; i++) {
    newArr.push(array[i]);
  }
  for (let j = newArr.length - 1; j >= 0; j--) {
    reverseArr.push(newArr[j]);
  }
  console.log(reverseArr.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);

//4. Reverse an Array of Strings
console.log("--------Reverse an Array of Strings---------");
function reverseStrings(arr) {
  const reverseArr = [];
  for (let j = arr.length - 1; j >= 0; j--) {
    reverseArr.push(arr[j]);
  }
  console.log(reverseArr.join(" "));
}

reverseStrings(["a", "b", "c", "d", "e"]);
reverseStrings(["abc", "def", "hig", "klm", "nop"]);

//5. Sum Even Numbers
console.log("-------Sum Even Numbers-----------");
function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (Number(arr[i]) % 2 === 0) {
      sum += Number(arr[i]);
    }
  }
  console.log(sum);
}

sumOfEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumOfEvenNumbers(["3", "5", "7", "9"]);
sumOfEvenNumbers(["2", "4", "6", "8", "10"]);

//6. Even and Odd Subtraction
console.log("--------Even and Odd Subtraction----------");
function evenAndOddSub(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (Number(arr[i]) % 2 === 0) {
      sumEven += Number(arr[i]);
    } else {
      sumOdd += Number(arr[i]);
    }
  }
  console.log(Math.abs(sumEven - sumOdd));
}
evenAndOddSub([1, 2, 3, 4, 5, 6]);
evenAndOddSub([3, 5, 7, 9]);
evenAndOddSub([2, 4, 6, 8, 10]);

//7. Equal Arrays
console.log("-------Equal Arrays--------");
function equalArrays(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  let diff = 0;
  for (let i = 0; i <= arr1.length - 1; i++) {
    sum1 += Number(arr1[i]);
    for (let j = i; j <= i; j++) {
      sum2 += Number(arr2[j]);
      if (arr1[i] != arr2[j]) {
        diff = i;
      }
    }
  }
  if (sum1 === sum2) console.log(`Arrays are identical. Sum: ${sum1}`);
  else
    console.log(`Arrays are not identical. Found difference at ${diff} index`);
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);

//8.Condense Array to Number
console.log("---------Condense Array to Number---------");
function condense(arr) {
  while (arr.length > 1) {
    const condensed = [];
    for (let i = 0; i < arr.length - 1; i++) {
      condensed.push(arr[i] + arr[i + 1]);
    }
    arr = condensed;
  }
  console.log(arr[0]);
}

condense([5, 0, 4, 1, 2]);

//9. Print every N-th Element from an Array
console.log(
  "--------------Print every N-th Element from an Array -------------"
);
function printNElement(arr, n) {
  const newArr = [];
  newArr.push(arr[0]);
  for (let i = 0; i <= arr.length; i++) {
    newArr.push(arr[i + n]);
    n++;
  }
  console.log(newArr.join(" "));
}

printNElement(["5", "15", "31", "14", "20"], 2);
printNElement(["dsa", "asd", "demo", "test"], 2);

//10. Add and Remove Elements from Array
console.log("------------Add and Remove Elements from Array-------------");
function addAndRemoveElements(commands) {
  let count = 1;
  const arr = [];
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "add") {
      arr.push(count);
      count++;
    } else if (commands[i] === "remove") {
      arr.pop();
    }
  }
  if (arr.length === 0) console.log("empty");
  console.log(arr.join(" "));
}
addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove", "remove", "remove"]);

//11. Rotate Array
console.log("-------------Rotate Array-------------");
function rotateArray(arr, n) {
  count = 0;
  while (count < n) {
    for (let i = 0; i <= arr.length - 1; i++) {
      let oldElement = arr[i];
      arr[i] = arr[arr.length - 1];
      arr[arr.length - 1] = oldElement;
    }
    count++;
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);

//12. Extract a Non-Decreasing Subsequence from an Array
console.log(
  "--------Extract a Non - Decreasing Subsequence from an Array------------"
);
function extractNonDecreasing(arr) {
  const newArr = [];
  let max = arr[0];
  newArr.push(arr[0]);
  for (let j = 1; j <= arr.length; j++) {
    if (arr[j] > max) {
      newArr.push(arr[j]);
      max = arr[j];
    }
  }
  console.log(newArr.join(" "));
}

extractNonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractNonDecreasing([20, 3, 2, 15, 6, 1]);

//13. Negative / Positive Numbers
console.log("-------Negative / Positive Numbers---------");
function negativePositiveNumbers(arr) {
  const minArr = [];
  const maxArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
      minArr.push(arr[i]);
    } else maxArr.push(arr[i]);
  }
  const mergeArr = minArr.concat(maxArr);
  console.log(mergeArr.join("\n"));
}

//negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
negativePositiveNumbers([7, -2, 8, 9]);

//14. First and Last K Numbers
console.log("-------First and Last K Numbers---------");
function firstAndLastKNumbers(n, arr) {
  const firstArr = arr.slice(0, n);
  const lastArr = arr.slice(arr.length - n, n + 1);
  console.log(firstArr.join(" "));
  console.log(lastArr.join(" "));
}
firstAndLastKNumbers(2, [7, 8, 9]);
firstAndLastKNumbers(3, [6, 7, 8, 9]);

//15. Last K Numbers Sequence
console.log("----Last K Numbers Sequence----------");
function lastKnumbers(n, k) {
  const arr = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i <= 2) {
      arr[0] = 1;
      arr[1] = 1;
      arr[2] = 2;
    } else if (arr.length < k) {
      arr[i] = i + 1;
    } else {
      arr[i] = sumOfRestElements(i);
    }
    function sumOfRestElements(index) {
      const newArrSlice = arr.slice(index - k, index);
      const sum = newArrSlice.reduce((acc, el) => acc + el, 0);
      console.log(sum);
      return sum;
    }
    console.log(arr);
  }
}

lastKnumbers(6, 3);
lastKnumbers(8, 2);

//16. Process Odd Numbers
console.log("------------Process Odd Numbers-----------");
function processOddNumber(arr) {
  const newArr = arr
    .filter((el) => el % 2 != 0)
    .map((el) => el * 2)
    .sort((a, b) => b - a);
  console.log(newArr);
}
processOddNumber([10, 15, 20, 25]);

//17. Smallest Two Numbers
console.log("--------Smallest Two Numbers--------");
function smallestTwoNumbers(arr) {
  const newArr = [];
  let min1 = arr[1];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < min1) {
      min1 = arr[i];
    }
  }
  const min1Index = arr.indexOf(min1);
  arr.splice(min1Index, 1);
  let min2 = arr[1];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < min2) {
      min2 = arr[i];
    }
  }
  newArr.push(min1, min2);
  console.log(newArr.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

//18. List of Products
console.log("--------List of Products----------");
function listOfProducts(arr) {
  const newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    newArr.push(`${i + 1}.${arr[i]}`);
  }
  newArr.sort();
  console.log(newArr.join("\n"));
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);

//19. Array Manipulations
function arrayMan(arr) {
  console.log("-------------Array Manipulations------------");
  let arrFrom = arr[0].split(/\s+/);
  let addCmd = arr[1].split(" ")[1];
  let removeCmd = arr[2].split(" ")[1];
  let removeAtCmd = arr[3].split(" ")[1];
  let insertNumberCmd = arr[4].split(" ")[1];
  let insertindexCmd = arr[4].split(" ")[2];
  arrFrom.push(addCmd);
  arrFrom.splice(arrFrom.indexOf(removeCmd), 1);
  arrFrom.splice(removeAtCmd, 1);
  arrFrom.splice(insertindexCmd, 0, insertNumberCmd);
  console.log(arrFrom);
}

arrayMan(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);

//20. Longest sequence of identical elements
console.log("-----------Longest sequence of identical elements----------");
function logestSequence(string) {
  const arr = string.split(/\s+/);
  let currentElement = arr[0];
  let currentCount = 1;
  let maxElement = arr[0];
  let maxCount = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currentElement) {
      currentCount++;
    } else {
      currentElement = arr[i];
      currentCount = 1;
    }

    if (currentCount >= maxCount) {
      maxElement = currentElement;
      maxCount = currentCount;
    }
  }
  console.log(maxElement.repeat(maxCount));
}
logestSequence("2 2 2 3 4 4 2 2 2 1");
logestSequence("1 1 1 2 3 1 3 3 1 1 ");
