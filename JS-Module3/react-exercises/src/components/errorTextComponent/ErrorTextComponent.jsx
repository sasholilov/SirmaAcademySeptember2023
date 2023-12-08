const ErrorTextComponent = function ({ errorArray }) {
  return (
    <ul>
      {errorArray.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  );
};

export default ErrorTextComponent;
