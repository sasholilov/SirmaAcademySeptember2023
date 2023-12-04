import TableData from "../tableData/tableData";
import TeableHead from "../tableHead/teableHead";
import { mostScoredInAGame } from "../../utils/dataUtils";

const TableTheMostScoredInAGame = ({ data }) => {
  const sortedArray = mostScoredInAGame(data);
  return (
    <div className="overall-stat">
      <h2>Най много вкарани точки в един мач</h2>
      <table>
        <TeableHead data={sortedArray} />
        <TableData data={sortedArray} />
      </table>
    </div>
  );
};

export default TableTheMostScoredInAGame;
