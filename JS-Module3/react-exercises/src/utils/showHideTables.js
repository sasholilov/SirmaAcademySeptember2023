const showHideTables = function (e) {
  const newState = {
    showOverAll: false,
    showMstScInGame: false,
    showMstScInAllGames: false,
    showPtsPerTime: false,
    showPtsByTeam: false,
    showBestPlayer: false,
  };
  newState[e.target.value] = true;
  return newState;
};

export { showHideTables };
