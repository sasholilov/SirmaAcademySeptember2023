import { useEffect, useState } from "react";
import "./App.css";

const reader = new FileReader();

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
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then((response) => response.json())
      .then((data) => {
        setFacts(data);
      });
  }, [next]);

  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      const data = reader.result
        .split(/(\r\n|\r|\n)/g)
        .filter((value) => value.length > 4);
      console.log(data);

      const newDataArray = data.map((e) => e.split(";"));
      const newDataArrayWithObj = newDataArray.map((row) => {
        return {
          productId: row[0],
          productName: row[1],
          productModels: row[2],
        };
      });
      console.log(newDataArrayWithObj);
      setText(newDataArrayWithObj);
    };
  }

  return (
    <div>
      <div className="header">
        <div className="data-header">
          <h1>{facts.text}</h1>
          <h2>Source: {facts.source}</h2>
          <Button value={next} setNext={setNext} />
        </div>
      </div>
      {text.length > 0 && (
        <div className="file-exercise">
          <div className="title">
            <p>{text[0].productId}</p>
            <p>{text[0].productName}</p>
            <p>{text[0].productModels}</p>
          </div>
          <div className="title">
            {text
              .map((e) => (
                <div className="title-results">
                  <p>{e.productId}</p>
                  <p>{e.productName}</p>
                  <p>{e.productModels}</p>
                </div>
              ))
              .filter((e, index) => index > 0)}
          </div>
        </div>
      )}
      <input type="file" onChange={handleFileChange}></input>
    </div>
  );
}

export default App;
