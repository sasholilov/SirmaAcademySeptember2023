import TableData from "../tableData/TableData";
import TeableHead from "../tableHead/TeableHead";
import { pointsPerSecond } from "../../utils/dataUtils";

const TablePointsPerTime = ({ data }) => {
  const newDataPoints = pointsPerSecond(data);

  return (
    <div>
      <h2 className="title">
        Вкарани точки на база игрово време във всички мачове
      </h2>
      <table>
        <TeableHead showColumnPtsPerSec={true} showRankingHead={true} />
        <TableData
          data={newDataPoints}
          showDataPtsPerSec={true}
          showDataRanking={true}
        />
      </table>
    </div>
  );
};

export default TablePointsPerTime;
