import("./ErrorTextComponent.css");

const ErrorTextComponent = function ({ errorArray }) {
  return (
    <div className="error-container">
      <h2>Общо грешки: {errorArray.length}</h2>
      <ul>
        {errorArray.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorTextComponent;
