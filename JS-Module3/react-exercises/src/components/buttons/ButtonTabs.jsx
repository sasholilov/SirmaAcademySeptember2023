const ButtonTabs = function ({ text, value, clickFunction }) {
  return (
    <button value={value} onClick={(e) => clickFunction(e)}>
      {text}
    </button>
  );
};

export default ButtonTabs;
