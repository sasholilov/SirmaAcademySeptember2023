const validationFileData = function (array) {
  const msgArray = [];
  let errText = "";

  array.forEach((element, index) => {
    let hasError = Object.values(element).some((e) => e === "");
    if (hasError) {
      errText = `There is ivalid data in row ${index}`;
      msgArray.push(errText);
    }
  });
  return msgArray;
};

export { validationFileData };
