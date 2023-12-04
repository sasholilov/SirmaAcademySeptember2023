import TableData from "../tableData/tableData";
import TeableHead from "../tableHead/teableHead";

const TableOverAllStat = ({ data }) => {
  return (
    <table>
      <TeableHead data={data} />
      <TableData data={data} />
    </table>
  );
};

export default TableOverAllStat;
