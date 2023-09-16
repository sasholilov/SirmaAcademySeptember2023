//1. Smallest of Three Numbers
console.log("--------Smallest of Three Numbers---------");
function smallestThreeNumbers(n1, n2, n3) {
  if (n1 < n2 && n1 < n3) {
    return n1;
  } else if (n2 < n1 && n2 < n3) {
    return n2;
  } else return n3;
}
console.log(smallestThreeNumbers(2, 5, 3));
console.log(smallestThreeNumbers(600, 342, 123));
console.log(smallestThreeNumbers(25, 21, 4));

//2. AddAndSubtract
console.log("----------Add and Subtract-------");
function addSub(num1, num2, num3) {
  let sum = num1 + num2;
  let subtract = sum - num3;
  return subtract;
}

console.log(addSub(23, 6, 10));

//3. Characters in Range
console.log("------------Characters in Range-----------");
function charactersRange(a, b) {
  let start = a.charCodeAt(0);
  let end = b.charCodeAt(0);
  for (let i = start + 1; i < end; i++) {
    console.log(String.fromCharCode(i));
  }
}

charactersRange("a", "d");
charactersRange("#", ":");

//4. Odd and Even Sum
console.log("---------Odd and Even Sum---------");
function oddAndEvenSum(n) {
  let oddArr = [];
  let evenArr = [];
  for (let i = 0; i <= n.length - 1; i++) {
    if (Number(n[i]) % 2 === 0) {
      evenArr.push(Number(n[i]));
    } else oddArr.push(Number(n[i]));
  }

  let oddSum = oddArr.reduce((acc, el) => acc + el, 0);
  let evenSum = evenArr.reduce((acc, el) => acc + el, 0);
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum("1000435");
oddAndEvenSum("3495892137259234");

//5. Palindrome Numbers
console.log("---------Palindrome Numbers----------");
function palindromeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let reverseString = reverseNumber(arr[i]);
    if (reverseString == arr[i]) {
      console.log("True");
    } else console.log("False");
  }

  function reverseNumber(num) {
    let str = "" + num;
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  }
}

palindromeNumbers([123, 323, 421, 121]);
palindromeNumbers([32, 2, 232, 1010]);
