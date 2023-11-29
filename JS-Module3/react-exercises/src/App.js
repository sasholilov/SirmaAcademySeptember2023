import logo from "./logo.svg";
import "./App.css";

const person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Cityville",
    zip: "12345",
  },
};

const formatedPerson = {
  ...person,
  address: Object.values(person.address).join(", "),
};

function App() {
  return (
    <div className="header">
      <div className="data-header">
        {Object.keys(person).map((e) => (
          <h4>{e}</h4>
        ))}
      </div>
      <div className="data-values">
        {Object.values(formatedPerson).map((value) => (
          <h4>{value}</h4>
        ))}
      </div>
      <h2></h2>
    </div>
  );
}

export default App;
