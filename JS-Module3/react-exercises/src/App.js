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
import { showHideTablesProp } from "./utils/showHideTablesProp";
import ButtonTabs from "./components/buttons/ButtonTabs";

function App() {
  const [data, setdata] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);
  const [showTable, setShowTable] = useState({
    showOverAll: true,
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
    setShowTable(() => {
      return showHideTablesProp(e);
    });
  }
  return (
    <div className="container">
      {data.length > 0 && errorMsg.length === 0 && (
        <div>
          <ButtonTabs
            text="Overall"
            value="showOverAll"
            clickFunction={showHideTablesHandler}
          />
          <ButtonTabs
            text="Most scored points in a game"
            value="showMstScInGame"
            clickFunction={showHideTablesHandler}
          />
          <ButtonTabs
            value="showMstScInAllGames"
            text="Most scored points in all games"
            clickFunction={showHideTablesHandler}
          />
          <ButtonTabs
            value="showPtsPerTime"
            text="Points per time"
            clickFunction={showHideTablesHandler}
          />
          <ButtonTabs
            value="showPtsByTeam"
            text="Points by Team"
            clickFunction={showHideTablesHandler}
          />
          <ButtonTabs
            value="showBestPlayer"
            text="Best player in team"
            clickFunction={showHideTablesHandler}
          />
          {showTable.showOverAll && <TableOverAllStat data={data} />}
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
