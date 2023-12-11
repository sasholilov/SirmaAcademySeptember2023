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
  formatJsonFile,
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
    if (file.type === "application/json") {
      reader.readAsText(file);
      reader.onload = function () {
        const data = formatJsonFile(reader.result);
        setdata(data);
      };
    } else if (file.type === "application/vnd.ms-excel") {
      reader.readAsText(file);
      reader.onload = function () {
        const data = splitStringToArray(reader.result);
        const newDataArray = formatArrayToArrayWithObjects(data);
        const errorMessages = validationFileData(newDataArray);
        setdata(newDataArray);
        setErrorMsg(errorMessages);
      };
    } else {
      setErrorMsg(["Ivalid file"]);
    }
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
          <div className="button-tabs">
            <ButtonTabs
              text="Обща статистика"
              value="showOverAll"
              clickFunction={showHideTablesHandler}
            />
            <ButtonTabs
              text="Отбелязани точки в един мач"
              value="showMstScInGame"
              clickFunction={showHideTablesHandler}
            />
            <ButtonTabs
              value="showMstScInAllGames"
              text="Отбелязани точки във всички мачове"
              clickFunction={showHideTablesHandler}
            />
            <ButtonTabs
              value="showPtsPerTime"
              text="Отбелязани точки за игрово време"
              clickFunction={showHideTablesHandler}
            />
            <ButtonTabs
              value="showPtsByTeam"
              text="Точки по отбори"
              clickFunction={showHideTablesHandler}
            />
            <ButtonTabs
              value="showBestPlayer"
              text="Най-добър играч в отбор"
              clickFunction={showHideTablesHandler}
            />
          </div>
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
