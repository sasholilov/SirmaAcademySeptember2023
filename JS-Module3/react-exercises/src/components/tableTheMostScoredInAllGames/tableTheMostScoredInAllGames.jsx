import TableData from "../tableData/tableData";
import TeableHead from "../tableHead/teableHead";
import { pointsInAllGames } from "../../utils/dataUtils";

const TableTheMostScoredInAllGames = ({ data }) => {
  const newArr = pointsInAllGames(data);
  return (
    <div>
      <h2>Най много вкарани точки във всички мачове</h2>
      <table>
        <TeableHead showRankingHead={true} />
        <TableData data={newArr} showDataRanking={true} />
      </table>
    </div>
  );
};

export default TableTheMostScoredInAllGames;
