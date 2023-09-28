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

//6. Extract File
console.log("--------Extract File--------");

function extractFile(text) {
  let indexSlash = text.lastIndexOf("\\") + 1;
  let fileNameWithExtension = text.slice(indexSlash);
  let filename = fileNameWithExtension.slice(
    0,
    fileNameWithExtension.lastIndexOf(".")
  );
  let extension = fileNameWithExtension.slice(
    fileNameWithExtension.lastIndexOf(".") + 1
  );
  console.log(fileNameWithExtension);
  console.log(`File name: ${filename}`);
  console.log(`File extension: ${extension}`);
}

extractFile("C:\\desktop\\academy\\template.pptx");
extractFile("C:\\Projects\\website.folder\\file.name.js");

//7. Substring
console.log("---------Substring----------");
function mySubstringFunc(word, text) {
  const isFound = text
    .toLowerCase()
    .split(" ")
    .some((e) => e === word);
  if (!isFound) console.log(`${word} is not found!`);
  else console.log(`${word} is not found!`);
}

mySubstringFunc("javascript", "JavaScript is the best programming language");
mySubstringFunc("python", "JavaScript is the best programming language");

//8. Replace Repeating Symbols
console.log("---------Replace Repeating Symbols-----------");
function replaceRepaetingSymbols(text) {
  let newStr = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== text[i + 1]) {
      newStr += text[i];
    }
  }
  console.log(newStr);
}

replaceRepaetingSymbols("aaaaabbbbbcdddeeeedssaa");
replaceRepaetingSymbols("qqqwerqwecccwd");

//9. Pascal-Case Spliter
console.log("---------Pascal-Case Spliter---------");
function pascalCaseSpliter(text) {
  console.log(text.split(/(?=[A-Z])/));
}
pascalCaseSpliter("SplitMeIfYouCan");

//10. Cunt And Reverse
console.log("--------Cut And Reverse---------");
function cutReverse(text) {
  let str3 = "";
  let str4 = "";
  let str1 = text.slice(0, text.length / 2);
  let str2 = text.slice(text.length / 2);
  for (let i = text.length / 2 - 1; i >= 0; i--) {
    str3 += str1[i];
    str4 += str2[i];
  }
  console.log(str3);
  console.log(str4);
}
cutReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
