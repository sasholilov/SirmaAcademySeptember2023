import("./tableHead.css");
const TeableHead = ({ showColumnPtsPerSec }) => {
  return (
    <thead>
      <tr>
        <th>Име на играча</th>
        <th>Отбор</th>
        <th>Играно време (секунди)</th>
        <th>Отбелязани точки</th>
        {showColumnPtsPerSec && <th>Отбелязани точки за секунда</th>}
      </tr>
    </thead>
  );
};
export default TeableHead;
