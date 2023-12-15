import("./ButtonCheck.css");

const ButtonCheck = ({ onCheck }) => {
  return <button onClick={onCheck}>Зареди продуктите</button>;
};

export default ButtonCheck;
