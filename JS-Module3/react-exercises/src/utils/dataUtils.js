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

function pointsPerSecond(data) {
  let newArray = [];
  data.forEach((player) => {
    const index = newArray.findIndex((e) => e.playerName === player.playerName);
    if (index !== -1) {
      newArray[index].score += +player.score;
      newArray[index].timePlayed += +player.timePlayed;
    } else {
      newArray.push({
        playerName: player.playerName,
        team: player.team,
        timePlayed: +player.timePlayed,
        score: +player.score,
        pointsPerSecond: (player.score / player.timePlayed).toFixed(5),
      });
    }
  });
  return newArray.sort((a, b) => b.pointsPerSecond - a.pointsPerSecond);
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
};
