import { useEffect, useState } from "react";
import "./App.css";
import TableOverAllStat from "./components/tableOverallStat/tableOverAllStat";
import {
  splitStringToArray,
  formatArrayToArrayWithObjects,
} from "./utils/dataUtils";
import Buttons from "./components/buttons/buttonFile";

function App() {
  const [data, setdata] = useState([]);
  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      const data = splitStringToArray(reader.result);
      const newDataArray = formatArrayToArrayWithObjects(data);
      setdata(newDataArray);
    };
  }
  return (
    <div>
      {data.length > 0 && (
        <div>
          <TableOverAllStat data={data} />
        </div>
      )}
      <Buttons type="file" onHandleChange={handleFileChange} />
    </div>
  );
}
export default App;
