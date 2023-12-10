const validationFileData = function (array) {
  const msgArray = [];
  let errText = "";

  array.map((element, index) => {
    let hasError = Object.values(element).some((e) => e === "");
    if (hasError) {
      errText = `Невалидни данни на ред: ${index}`;
      msgArray.push(errText);
    }
  });
  return msgArray;
};

export { validationFileData };
