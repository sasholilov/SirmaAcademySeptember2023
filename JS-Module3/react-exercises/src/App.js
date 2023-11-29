import { useEffect, useState } from "react";
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

function Button({ setNext, value }) {
  return <button onClick={() => setNext(!value)}>Next</button>;
}

function App() {
  const [facts, setFacts] = useState([]);
  const [next, setNext] = useState(false);

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then((response) => response.json())
      .then((data) => {
        setFacts(data);
        console.log(data);
      });
  }, [next]);

  return (
    <div className="header">
      <div className="data-header">
        <h1>{facts.text}</h1>
        <h2>Source: {facts.source}</h2>
        <Button value={next} setNext={setNext} />
      </div>
    </div>
  );
}

export default App;
