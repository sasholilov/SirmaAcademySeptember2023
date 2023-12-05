import TableData from "../tableData/tableData";
import TeableHead from "../tableHead/teableHead";
import { pointsPerSecond } from "../../utils/dataUtils";

const TablePointsPerTime = ({ data }) => {
  const newData = pointsPerSecond(data);

  return (
    <div>
      <h2>Вкарани точки на база игрово време във всички мачове</h2>
      <table>
        <TeableHead showColumnPtsPerSec={true} showRankingHead={true} />
        <TableData
          data={newData}
          showDataPtsPerSec={true}
          showDataRanking={true}
        />
      </table>
    </div>
  );
};

export default TablePointsPerTime;
