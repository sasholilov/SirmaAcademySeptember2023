import TableData from "../tableData/tableData";
import TeableHead from "../tableHead/teableHead";
import { pointsPerSecond } from "../../utils/dataUtils";

const TablePointsPerTime = ({ data }) => {
  const newData = pointsPerSecond(data);
  newData.sort((a, b) => b.pointsPerSecond - a.pointsPerSecond);

  return (
    <div>
      <h2>Вкарани точки на база игрово време</h2>
      <table>
        <TeableHead showColumnPtsPerSec={true} />
        <TableData data={newData} showDataPtsPerSec={true} />
      </table>
    </div>
  );
};

export default TablePointsPerTime;
