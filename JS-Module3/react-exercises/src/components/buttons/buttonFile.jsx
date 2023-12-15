import "./ButtonFile.css";

const Buttons = ({ type, onHandleChange }) => {
  if (type === "file")
    return (
      <div className="btn-file container">
        <h2>Качете CSV или JSON файл с данни</h2>
        <input type="file" onChange={onHandleChange} />
      </div>
    );
};

export default Buttons;
