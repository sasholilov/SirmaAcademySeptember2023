import { pointsByTeamData } from "../../utils/dataUtils";

const TablePointsByTeam = ({ data }) => {
  const newData = pointsByTeamData(data);

  return (
    <table>
      <thead>
        <tr>
          <th>Класиране</th>
          <th>Отбор</th>
          <th>Отбелязани точки</th>
        </tr>
      </thead>
      <tbody>
        {newData.map((e, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{e.team}</td>
            <td>{e.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablePointsByTeam;
