import TableData from "../tableData/TableData";
import TeableHead from "../tableHead/TeableHead";
import { mostScoredInAGame } from "../../utils/dataUtils";

const TableTheMostScoredInAGame = ({ data }) => {
  const sortedArray = mostScoredInAGame(data);
  return (
    <div>
      <h2>Най много вкарани точки в един мач</h2>
      <table>
        <TeableHead showRankingHead={true} />
        <TableData data={sortedArray} showDataRanking={true} />
      </table>
    </div>
  );
};

export default TableTheMostScoredInAGame;
