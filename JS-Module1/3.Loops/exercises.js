//1. Numbers from 0 to 100
console.log("-------Numbers from 0 to 100------------");
function zeroTo100() {
  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
}
zeroTo100();

//2. Numbers N to 0 in reverse order
console.log("----------Numbers N to 0 in reverse order----------");
function nToZeroReverse(n) {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
}
nToZeroReverse(10);
nToZeroReverse(5);

//3. Numbers 1 to N through 2
console.log("------------Numbers 1 to N through 2------------");
function oneToNThrough2(n) {
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}
oneToNThrough2(10);
oneToNThrough2(5);

//4. Numbers 1 to N through M
console.log("------------Numbers 1 to N through M------------");
function oneToNThrough2(n, m) {
  for (let i = 1; i <= n; i += m) {
    console.log(i);
  }
}
oneToNThrough2(10, 2);
oneToNThrough2(8, 3);

//5. Letters in a word
console.log("----------Letters in a word---------");
function letters(letters) {
  for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
  }
}
letters("hello");
letters("hi");
letters("bye");
letters("zzzz");

//6. Sum of vowels
console.log("------------------Sun of vowels---------------");
function sumOfVowels(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      sum += 1;
    } else if (string[i] === "e") {
      sum += 2;
    } else if (string[i] === "i") {
      sum += 3;
    } else if (string[i] === "o") {
      sum += 4;
    } else if (string[i] === "uo") {
      sum += 5;
    }
  }
  console.log(sum);
}
sumOfVowels("hello");
sumOfVowels("hi");
sumOfVowels("bye");
sumOfVowels("zzzzz");

//7. Clock
console.log("--------------Clock----------------");
function clock() {
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j++) {
      console.log(`${i}:${j}`);
    }
  }
}

clock();

//8. Multiplication table
console.log("---------------Multiplication table------------------");
function multiplication() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) console.log(`${i} * ${j} = ${i * j}`);
  }
}
multiplication();

//9. Sum of Even Numbers
console.log("---------sum--of-even-numbers----------");
function sumOfEvenNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 2 * i;
  }
  console.log(sum);
}
sumOfEvenNumbers(3);
sumOfEvenNumbers(5);
sumOfEvenNumbers(1);
sumOfEvenNumbers(0);
sumOfEvenNumbers(10);

//10. Factorial Calculation
console.log("------------factorial calc---------------");
function factorialFunc(n) {
  let sum = 1;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    sum = current * i;
    current = sum;
  }
  console.log(sum);
}
factorialFunc(5);
factorialFunc(3);
factorialFunc(0);
factorialFunc(0);
factorialFunc(10);

//11. Number Reversal
console.log("--------------Number Reversal---------------");
function reversal(n) {
  let text = "" + n;
  let textReverse = "";
  for (let i = text.length - 1; i >= 0; i--) {
    textReverse = textReverse + text[i];
  }
  console.log(textReverse);
}

reversal(123);
reversal(9876);
reversal(505);
reversal(10203);

//12. Fibonacci Sequence Sum
console.log("---------Fibonacci Sequence Sum----------");
function fibonacciSequenceSum(n) {
  let fibSum = 0;
  let fibPrev = 0;
  let fibCurr = 1;
  for (let i = 1; i <= n; i++) {
    fibSum += fibCurr;
    const nextFib = fibPrev + fibCurr;
    fibPrev = fibCurr;
    fibCurr = nextFib;
  }
  console.log(fibSum);
}
fibonacciSequenceSum(3);
fibonacciSequenceSum(5);

//13. Palindrome Check
console.log("------------Palindrome Check--------------");
function palindromeCheck(word) {
  let wordReverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    wordReverse = wordReverse + word[i];
  }
  if (word === wordReverse) {
    console.log("true");
  } else console.log("false");
}

palindromeCheck("radar");
palindromeCheck("hello");
palindromeCheck("racecar");
palindromeCheck("java");
palindromeCheck("madam");

//14. Armstrong Number Check
console.log("------Armstrong Number Check-------------");
function armstrongNumber(n) {
  let nToString = "" + n;
  let sum = 0;
  for (let i = 0; i < nToString.length; i++) {
    sum += Math.pow(Number(nToString[i]), Number(nToString.length));
  }
  if (sum === n) {
    console.log("true");
  } else console.log("false");
}
armstrongNumber(153);
armstrongNumber(370);
armstrongNumber(123);
armstrongNumber(407);
armstrongNumber(1634);

//15. Collatz Conjecture
console.log("---------Collatz Conjecture----------");
function collatz(n) {
  let result = n;
  let pattern = "";
  while (result > 1) {
    if (result % 2 === 0) {
      result = result / 2;
      pattern += result + " ";
    } else {
      result = result * 3 + 1;
      pattern += result + " ";
    }
  }
  console.log(n + " " + pattern);
}

collatz(6);
collatz(12);
collatz(9);

//16. Hollow Rectangle Pattern
function hollowRecangle(n, m) {
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      console.log("*".repeat(m));
    } else console.log("*" + " ".repeat(m - 2) + "*");
  }
}
hollowRecangle(4, 6);
hollowRecangle(2, 2);
hollowRecangle(3, 4);

//17. New Building
function building(floors, rooms) {
  let template = "";
  for (let i = 1; i <= floors; i++) {
    if (floors === 1) {
      for (let j = 0; j < rooms; j++) {
        template += `L${i}${j} `;
      }
    } else if (i === floors) {
      for (let j = 0; j < rooms; j++) {
        template += `L${i}${j} `;
      }
    } else {
      if (i % 2 !== 0) {
        for (let j = 0; j < rooms; j++) {
          template += `A${i}${j} `;
        }
      } else if (i % 2 === 0) {
        for (let j = 0; j < rooms; j++) {
          template += `O${i}${j} `;
        }
      }
    }

    template += "\n";
  }

  console.log(template);
}
building(6, 4);

//18. Magic Number
console.log("---------Magic Number--------");
function magicNumber(start, end, number) {
  let flag = true;
  let count = 0;

  for (let i = start; i <= end; i++) {
    if (!flag) {
      break;
    }
    for (let j = start; j <= end; j++) {
      count++;
      if (i + j === number) {
        flag = false;
        break;
      }
    }
  }

  console.log(count);
}

magicNumber(1, 10, 5);
magicNumber(23, 24, 20);
magicNumber(1, 2, 3);

//21. Refactor Sum of Odd Numbers
console.log("--------Refactor Sum of Odd Numbers----------");
function sumOddNumbers(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    console.log(2 * i + 1);
    sum += 2 * i + 1;
  }
  console.log(`Sum: ${sum}`);
}

sumOddNumbers(5);
sumOddNumbers(3);

//22. Numbers up to 1000, ending in 7
console.log("---------Numbers up to 1000, ending in 7------------");
function numbersSeven() {
  for (let i = 1; i <= 1000; i++) {
    if (i < 10) {
      if (i === 7) console.log(i);
    } else {
      if ((i - 7) % 10 === 0) {
        console.log(i);
      }
    }
  }
}
numbersSeven();

//23. Numbers up to 1000, ending in n
console.log("------Numbers up to 1000, ending in n------");
function numbersN(n) {
  for (let i = 1; i <= 1000; i++) {
    if (i < 10) {
      if (i === n) console.log(i);
    } else {
      if ((i - n) % 10 === 0) {
        console.log(i);
      }
    }
  }
}
numbersN(6);
numbersN(8);

//24. Encoding
console.log("----------Encoding----------");
function encoding(n) {
  let stringN = "" + n;
  let template = "";
  let formatedSymbols = 0;
  for (let i = 1; i <= stringN.length; i++) {
    formatedSymbols = String.fromCharCode(
      Number(stringN[stringN.length - i]) + 33
    ).repeat(stringN[stringN.length - i]);
    template += formatedSymbols ? formatedSymbols : "ZERO";

    template += "\n";
  }

  console.log(template);
}

encoding(2049);
encoding(9347439);
