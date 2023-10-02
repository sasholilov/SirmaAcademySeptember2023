function sitCodeCipher(string, n) {
  let newStr = "";
  let newCharIndex = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      (string[i].charCodeAt(0) > 31 && string[i].charCodeAt(0) < 48) ||
      (string[i].charCodeAt(0) > 57 && string[i].charCodeAt(0) < 65) ||
      (string[i].charCodeAt(0) > 90 && string[i].charCodeAt(0) < 97) ||
      (string[i].charCodeAt(0) > 122 && string[i].charCodeAt(0) < 128)
    ) {
      newCharIndex = string[i].charCodeAt(0);
      newStr += String.fromCharCode(newCharIndex);
      console.log(newCharIndex);
    } else {
      newCharIndex = string[i].charCodeAt(0) + n;
      newStr += String.fromCharCode(newCharIndex);
      console.log(newCharIndex);
    }
  }
  console.log(newStr);
}

sitCodeCipher("Uifsf jt b tdifsu", 1);
sitCodeCipher("Dagobah", 3);
sitCodeCipher("R2-D2", 5);
