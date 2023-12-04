import { useEffect, useState } from "react";
import "./App.css";

const reader = new FileReader();

function App() {
  const [data, setdata] = useState([]);

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
      //const sorterdArray = newDataArrayWithObj.sort(
      //  (a, b) => b.score - a.score
      //);
      //console.log("sortirano", sorterdArray);
      console.log(newDataArrayWithObj);
    };
  }

  return (
    <div>
      {data.length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>{data[0].playerName}</th>
                <th>{data[0].team}</th>
                <th>{data[0].timePlayed}</th>
                <th>{data[0].score}</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((e, index) => index > 0)
                .map((e, index) => (
                  <tr key={index}>
                    <td>
                      {index + 1}. {e.playerName}
                    </td>
                    <td>{e.team}</td>
                    <td>{e.timePlayed}</td>
                    <td>{e.score}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      <input type="file" onChange={handleFileChange} />
    </div>
  );
}
export default App;
