import("./tableHead.css");
const TeableHead = ({ showColumnPtsPerSec, showRankingHead }) => {
  return (
    <thead>
      <tr>
        {showRankingHead && <th>Класиране</th>}
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
