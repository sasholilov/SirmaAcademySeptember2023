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
