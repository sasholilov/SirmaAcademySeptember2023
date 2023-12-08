import("./TableData.css");
const TableData = ({ data, showDataPtsPerSec, showDataRanking }) => {
  return (
    <tbody>
      {data.map((e, index) => (
        <tr key={index}>
          {showDataRanking && <td>{index + 1}</td>}
          <td>{e.playerName}</td>
          <td>{e.team}</td>
          <td>{e.timePlayed}</td>
          <td>{e.score}</td>
          {showDataPtsPerSec && <td>{e.pointsPerSecond}</td>}
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
