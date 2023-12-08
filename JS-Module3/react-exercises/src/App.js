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

function App() {
  const [data, setdata] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);

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

  return (
    <div>
      {data.length > 0 && errorMsg.length === 0 && (
        <div>
          <TableOverAllStat data={data} />
          <TableTheMostScoredInAGame data={data} />
          <TableTheMostScoredInAllGames data={data} />
          <TablePointsPerTime data={data} />
          <TablePointsByTeam data={data} />
          <TableBestPlayerInTeam data={data} />
        </div>
      )}
      {errorMsg.length > 0 && <ErrorTextComponent errorArray={errorMsg} />}
      <Buttons type="file" onHandleChange={handleFileChange} />
    </div>
  );
}

export default App;
