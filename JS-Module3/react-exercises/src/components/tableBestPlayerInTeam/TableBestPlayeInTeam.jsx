import { bestPlayerInTeamData } from "../../utils/dataUtils";

const TableBestPlayerInTeam = ({ data }) => {
  const newData = bestPlayerInTeamData(data);

  return (
    <div>
      <h2 className="title">Най-добър играч в отбор</h2>
      <table>
        <thead>
          <tr>
            <th>Класиране</th>
            <th>Име на играча</th>
            <th>Отбор</th>
            <th>Отбелязани точки</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.playerName}</td>
              <td>{e.team}</td>
              <td>{e.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBestPlayerInTeam;
