function starFighterFormation(input, commands) {
  const starfightersArr = [];
  const commandsArr = [];
  let resultArr = [];
  for (let data of input) {
    starfightersArr.push(data);
  }
  for (let data of commands) {
    commandsArr.push(data);
  }
  for (let i = 0; i < commandsArr.length; i++) {
    if (commandsArr[i].split(" ")[0] === "destroy") {
      input.splice(commandsArr[i].split(" ")[1], 1);
      console.log(input.join(" "));
    } else if (commandsArr[i].split(" ")[0] === "swap") {
      if (commandsArr[i].split(" ")[2] > input.length) {
        continue;
      }
      if (commandsArr[i].split(" ")[2] === commandsArr[i].split(" ")[1]) {
        continue;
      }
      let temp = input[commandsArr[i].split(" ")[1]];
      input[commandsArr[i].split(" ")[1]] = input[commandsArr[i].split(" ")[2]];
      input[commandsArr[i].split(" ")[2]] = temp;
      console.log(input.join(" "));
    } else if (commandsArr[i].split(" ")[0] === "add") {
      input.push(commandsArr[i].split(" ")[1]);
      console.log(input.join(" "));
    } else if (commandsArr[i].split(" ")[0] === "insert") {
      input.splice(
        commandsArr[i].split(" ")[2],
        0,
        commandsArr[i].split(" ")[1]
      );
      console.log(input.join(" "));
    } else if (commandsArr[i] === "center") {
      if (input.length % 2 !== 0) {
        console.log(input[parseInt(input.length / 2)]);
      } else {
        if (input.length > 2) {
          const tempArr = [
            input[input.length / 2 - 1],
            input[input.length / 2],
          ];
          console.log(tempArr.join(" "));
        }
      }
    }
  }
}
starFighterFormation(
  [1, 2, 3, 4, 5],
  ["destroy 3", "swap 0 1", "add 6", "center"]
);
console.log("---------------------");
starFighterFormation(
  [1, 2, 3, 4, 5],
  [
    "add 6",
    "swap 0 5",
    "swap 1 4",
    "swap 2 3",
    "swap 2 100",
    "swap 2 2",
    "center",
  ]
);
console.log("---------------------");
starFighterFormation(
  [1, 2],
  ["insert 3 2", "center", "destroy 1", "destroy 2", "center"]
);
