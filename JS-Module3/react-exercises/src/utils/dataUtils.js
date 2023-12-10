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

function formatJsonFile(jsonFile) {
  const array = jsonFile.split("\r\n");
  array.pop();
  array.pop();
  array.shift();
  const cleanedArray = array.map((line) =>
    JSON.parse(
      line
        .replace(/[^{}]*$/, "")
        .replace(/\s+/g, "")
        .trim()
    )
  );

  return cleanedArray;
}

function mostScoredInAGame(data) {
  return data.sort((a, b) => b.score - a.score);
}

function pointsInAllGames(data) {
  const newArray = [];
  data.forEach((e) => {
    const index = newArray.findIndex((el) => el.playerName === e.playerName);
    if (index !== -1) {
      newArray[index].score += +e.score;
      newArray[index].timePlayed += +e.timePlayed;
    } else {
      newArray.push({
        playerName: e.playerName,
        team: e.team,
        timePlayed: +e.timePlayed,
        score: +e.score,
      });
    }
  });
  return newArray.sort((a, b) => b.score - a.score);
}

function pointsPerSecond(dataPoints) {
  console.log(dataPoints);
  let newArrayData = [];
  dataPoints.map((player) => {
    const index = newArrayData.findIndex(
      (e) => e.playerName === player.playerName
    );
    if (index !== -1) {
      newArrayData[index].score += +player.score;
      newArrayData[index].timePlayed += +player.timePlayed;
    } else {
      newArrayData.push({
        playerName: player.playerName,
        team: player.team,
        timePlayed: +player.timePlayed,
        score: +player.score,
        pointsPerSecond: (player.score / player.timePlayed).toFixed(6),
      });
    }
  });
  console.log(newArrayData);
  return newArrayData.sort((a, b) => b.pointsPerSecond - a.pointsPerSecond);
}

function pointsByTeamData(data) {
  let newArray = [];

  data.forEach((e) => {
    const teamIndex = newArray.findIndex((team) => team.team === e.team);
    if (teamIndex !== -1) {
      newArray[teamIndex].score += +e.score;
    } else {
      newArray.push({
        team: e.team,
        score: +e.score,
      });
    }
  });

  return newArray.sort((a, b) => b.score - a.score);
}

function bestPlayerInTeamData(data) {
  let newArray = [];
  const newDataArray = pointsInAllGames(data);

  newDataArray.forEach((e) => {
    const teamIndex = newArray.findIndex((team) => team.team === e.team);
    if (teamIndex !== -1) {
      if (newArray[teamIndex].score < e.score) {
        newArray[teamIndex].score = e.score;
        newArray[teamIndex].playerName = e.playerName;
      }
    } else {
      newArray.push({
        playerName: e.playerName,
        team: e.team,
        score: e.score,
      });
    }
  });

  return newArray.sort((a, b) => b.score - a.score);
}

export {
  splitStringToArray,
  formatArrayToArrayWithObjects,
  mostScoredInAGame,
  pointsInAllGames,
  pointsPerSecond,
  pointsByTeamData,
  bestPlayerInTeamData,
  formatJsonFile,
};
