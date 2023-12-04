import TableData from "../tableData/tableData";
import TeableHead from "../tableHead/teableHead";

const TableOverAllStat = ({ data }) => {
  return (
    <div className="overall-stat">
      <h2>Обща статистика</h2>
      <table>
        <TeableHead data={data} />
        <TableData data={data} />
      </table>
    </div>
  );
};

export default TableOverAllStat;
