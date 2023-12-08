import { useEffect, useState } from "react";
import "./App.css";
import TableOverAllStat from "./components/tableOverallStat/TableOverAllStat";
import TableTheMostScoredInAGame from "./components/tableTheMostScoredInAGame/TableTheMostScoredInAGame";
import TableTheMostScoredInAllGames from "./components/tableTheMostScoredInAllGames/TableTheMostScoredInAllGames";
import TablePointsPerTime from "./components/tablePointsPerTime/TablePointsPerTime";
import TablePointsByTeam from "./components/tablePointsByTeam/TablePointsByTeam";
import TableBestPlayerInTeam from "./components/tableBestPlayerInTeam/TableBestPlayeInTeam";
import ErrorTextComponent from "./components/errorTextComponent/ErrorTextComponent";
import {
  splitStringToArray,
  formatArrayToArrayWithObjects,
} from "./utils/dataUtils";
import Buttons from "./components/buttons/ButtonFile";
import { validationFileData } from "./utils/validations";
import { showHideTables } from "./utils/showHideTables";

function App() {
  const [data, setdata] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);
  const [showTable, setShowTable] = useState({
    showOverll: true,
    showMstScInGame: false,
    showMstScInAllGames: false,
    showPtsPerTime: false,
    showPtsByTeam: false,
    showBestPlayer: false,
  });

  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      const data = splitStringToArray(reader.result);
      const newDataArray = formatArrayToArrayWithObjects(data);
      const errorMessages = validationFileData(newDataArray);
      setdata(newDataArray);
      setErrorMsg(errorMessages);
    };
  }

  function showHideTablesHandler(e) {
    setShowTable((prev) => {
      const newState = {
        showOverll: false,
        showMstScInGame: false,
        showMstScInAllGames: false,
        showPtsPerTime: false,
        showPtsByTeam: false,
        showBestPlayer: false,
      };
      newState[e.target.value] = true;
      return newState;
    });
  }

  return (
    <div>
      {data.length > 0 && errorMsg.length === 0 && (
        <div>
          <button value="showOverll" onClick={(e) => showHideTablesHandler(e)}>
            Overall
          </button>
          <button
            value="showMstScInGame"
            onClick={(e) => showHideTablesHandler(e)}
          >
            Most scored points in a game
          </button>
          <button
            value="showMstScInAllGames"
            onClick={(e) => showHideTablesHandler(e)}
          >
            Most scored points in all games
          </button>
          <button
            value="showPtsPerTime"
            onClick={(e) => showHideTablesHandler(e)}
          >
            Points per time
          </button>
          <button
            value="showPtsByTeam"
            onClick={(e) => showHideTablesHandler(e)}
          >
            Points by Team
          </button>
          <button
            value="showBestPlayer"
            onClick={(e) => showHideTablesHandler(e)}
          >
            Best player in team
          </button>
          {showTable.showOverll && <TableOverAllStat data={data} />}
          {showTable.showMstScInGame && (
            <TableTheMostScoredInAGame data={data} />
          )}
          {showTable.showMstScInAllGames && (
            <TableTheMostScoredInAllGames data={data} />
          )}
          {showTable.showPtsPerTime && <TablePointsPerTime data={data} />}
          {showTable.showPtsByTeam && <TablePointsByTeam data={data} />}
          {showTable.showBestPlayer && <TableBestPlayerInTeam data={data} />}
        </div>
      )}
      {errorMsg.length > 0 && <ErrorTextComponent errorArray={errorMsg} />}
      <Buttons type="file" onHandleChange={handleFileChange} />
    </div>
  );
}

export default App;
