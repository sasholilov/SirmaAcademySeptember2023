import TableData from "../tableData/tableData";
import TeableHead from "../tableHead/teableHead";
import { pointsInAllGames } from "../../utils/dataUtils";

const TableTheMostScoredInAllGames = ({ data }) => {
  const newArr = pointsInAllGames(data);
  return (
    <div>
      <h2>Най много вкарани точки във всички мачове</h2>
      <table>
        <TeableHead />
        <TableData data={newArr} />
      </table>
    </div>
  );
};

export default TableTheMostScoredInAllGames;
