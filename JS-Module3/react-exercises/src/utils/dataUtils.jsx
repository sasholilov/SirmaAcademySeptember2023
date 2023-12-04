function splitStringToArray(string) {
  return string.split(/(\r\n|\r|\n)/g).filter((value) => value.length > 2);
}

function formatArrayToArrayWithObjects(array) {
  return array.map((e) => {
    const [playerName, team, timePlayed, score] = e.split(";");
    return {
      playerName,
      team,
      timePlayed,
      score,
    };
  });
}

export { splitStringToArray, formatArrayToArrayWithObjects };
