import("./buttonFile.css");

const Buttons = ({ type, onHandleChange }) => {
  if (type === "file")
    return <input className="btn-file" type="file" onChange={onHandleChange} />;
};

export default Buttons;
