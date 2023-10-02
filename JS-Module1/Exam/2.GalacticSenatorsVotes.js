function galacticSenatorsVotes(input) {
  const yesArr = [];
  const noArr = [];
  const abstainArr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "Yes") {
      yesArr.push(input[i]);
    } else if (input[i] === "No") {
      noArr.push(input[i]);
    } else abstainArr.push(input[i]);
  }
  if (yesArr.length > noArr.length) console.log("Yes");
  else if (noArr.length > yesArr.length) console.log("No");
  else if (yesArr.length === 0 && noArr.length === 0) console.log("Abstain");
  else if (yesArr.length === noArr.length) console.log("Tie");
}

galacticSenatorsVotes(["Yes", "No", "Yes", "Abstain", "Yes"]);
galacticSenatorsVotes(["No", "No", "Abstain", "Abstain"]);
galacticSenatorsVotes(["Yes", "No"]);
galacticSenatorsVotes(["Abstain"]);
galacticSenatorsVotes(["No", "No", "Abstain", "Abstain", "Yes", "Yes"]);
