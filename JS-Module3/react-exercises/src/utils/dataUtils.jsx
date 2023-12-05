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
  let newArray = [];
  let dataObj = {};

  data.map((e) => {
    if (dataObj[e.playerName] === undefined) {
      dataObj[e.playerName] = {
        playerName: e.playerName,
        team: e.team,
        timePlayed: e.timePlayed,
        score: +e.score,
      };
    } else {
      dataObj[e.playerName].score += +e.score;
      newArray.push(dataObj[e.playerName]);
    }
  });

  return newArray;
}

function pointsPerSecond(data) {
  let newArray = [];
  let dataObj = {};

  data.map((e) => {
    if (dataObj[e.playerName] === undefined) {
      dataObj[e.playerName] = {
        playerName: e.playerName,
        team: e.team,
        timePlayed: +e.timePlayed,
        score: +e.score,
        pointsPerSecond: (e.score / e.timePlayed).toFixed(5),
      };
    } else {
      dataObj[e.playerName].score += +e.score;
      dataObj[e.playerName].timePlayed += +e.timePlayed;
      newArray.push(dataObj[e.playerName]);
    }
  });

  return newArray;
}

export {
  splitStringToArray,
  formatArrayToArrayWithObjects,
  mostScoredInAGame,
  pointsInAllGames,
  pointsPerSecond,
};
