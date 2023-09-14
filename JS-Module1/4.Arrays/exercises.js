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
