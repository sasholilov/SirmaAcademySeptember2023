const Buttons = ({ type, onHandleChange }) => {
  if (type === "file") return <input type="file" onChange={onHandleChange} />;
};

export default Buttons;
