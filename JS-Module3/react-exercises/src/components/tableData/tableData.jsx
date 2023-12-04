const TableData = ({ data }) => {
  return (
    <tbody>
      {data
        .filter((e, index) => index > 0)
        .map((e, index) => (
          <tr key={index}>
            <td>
              {index + 1}. {e.playerName}
            </td>
            <td>{e.team}</td>
            <td>{e.timePlayed}</td>
            <td>{e.score}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableData;
