//1. Print Characters
console.log("---------Print Characters--------");
function printChars(string) {
  for (let char of string) {
    console.log(char);
  }
}
printChars("AWord");
printChars("Sentence");

//2. Substring

function substringFoo(string, strIndex, count) {
  let newString = string.substring(strIndex, count + 1);
  console.log(newString);
}
substringFoo("ESentence", 1, 8);
substringFoo("DropWord", 4, 7);

//3. Censor
console.log("---------Censor----------");
function censor(text, word) {
  let censor = "*".repeat(word.length);
  let censoredText = text.replaceAll(word, censor);
  console.log(censoredText);
}

censor("A small sentence with some words", "small");
censor("A small sentence with small words", "small");

//4. Reveal Words
console.log("--------------Reveal Words-------------");
function revalWords(word, text) {
  const words = word.split(", ");
  for (let value of words) {
    text = text.replace("*".repeat(value.length), value);
  }
  console.log(text);
}

revalWords("the, best, learn", "JavaScript is *** **** language to *****");
revalWords("great", "JavaScript* is ***** programming language");

//5.#HashTag
console.log("---------#HashTag---------");
function hashTag(text) {
  const textArr = text.split(" # ").join(" ").split(" ");
  const resultArr = textArr
    .filter((e) => e.startsWith("#"))
    .map((e) => e.slice(1));
  console.log(resultArr.join("\n"));
}

hashTag("Everyone uses # to tag a #special word in #facebook");
hashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
