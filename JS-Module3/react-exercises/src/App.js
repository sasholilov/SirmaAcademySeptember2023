import { useEffect, useState } from "react";
import "./App.css";
import TableOverAllStat from "./components/tableOverallStat/tableOverAllStat";

const reader = new FileReader();

function App() {
  const [data, setdata] = useState([]);
  const sorterdArray = [...data];
  sorterdArray.sort((a, b) => b.score - a.score);

  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      const data = reader.result
        .split(/(\r\n|\r|\n)/g)
        .filter((value) => value.length > 2);
      const newDataArray = data.map((e) => e.split(";"));

      const newDataArrayWithObj = newDataArray.map((row) => {
        return {
          playerName: row[0],
          team: row[1],
          timePlayed: row[2],
          score: row[3],
        };
      });
      setdata(newDataArrayWithObj);

      console.log("sortirano", sorterdArray);
      console.log(newDataArrayWithObj);
    };
  }

  return (
    <div>
      {data.length > 0 && (
        <div>
          <TableOverAllStat data={data} />
        </div>
      )}
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}
export default App;
