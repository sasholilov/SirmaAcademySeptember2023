import("./tableHead.css");
const TeableHead = ({ data }) => {
  return (
    <thead>
      <tr>
        <th>{data[0].playerName}</th>
        <th>{data[0].team}</th>
        <th>{data[0].timePlayed}</th>
        <th>{data[0].score}</th>
      </tr>
    </thead>
  );
};
export default TeableHead;
