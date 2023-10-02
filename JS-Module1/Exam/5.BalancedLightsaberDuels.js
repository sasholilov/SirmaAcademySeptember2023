function balancedLightsaberDuels(string) {
  let countOne = 0;
  let opositeCountOne = 0;
  let countTwo = 0;
  let opositCountTwo = 0;
  let commonCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      countOne++;
    } else if (string[i] === ")") {
      opositeCountOne++;
    } else if (string[i] === "{") {
      countTwo++;
    } else if (string[i] === "}") {
      opositCountTwo++;
    } else if (string[i] === "!") {
      commonCount++;
    }
  }

  if (countOne !== opositeCountOne || countTwo !== opositCountTwo) {
    console.log("Not Legendary");
  } else if (
    countOne == opositeCountOne &&
    countTwo == opositCountTwo &&
    commonCount % 2 === 0
  ) {
    console.log("Legendary");
  }
}

balancedLightsaberDuels("()()(()())");
balancedLightsaberDuels("((!!)(({!!})))");
balancedLightsaberDuels("((())");
balancedLightsaberDuels("{!}!");
balancedLightsaberDuels("({(!!}))");
