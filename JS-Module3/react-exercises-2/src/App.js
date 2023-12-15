import { act } from "react-dom/test-utils";
import "./App.css";
import ButtonCheck from "./components/buttons/ButtonCheck";
import ButtonFile from "./components/buttons/ButtonFile";
import { splitStringToArray } from "./utils/dataUtils";
import { useState } from "react";

function App() {
  const [orderIds, setOrderIds] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [cart, setCart] = useState([]);

  function handleFileOrdersChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      const data = splitStringToArray(reader.result);
      const newArray = data.map((e) => e.split(";"));
      newArray.shift();
      const arrayWithOrders = newArray.map((o) => o);
      console.log(arrayWithOrders);
      setOrderIds(arrayWithOrders);
    };
  }

  const handleOnCheck = function () {
    setClicked(true);
  };

  return (
    <div>
      <ButtonFile
        text="Качете CSV файл с поръчките от сайта"
        type="file"
        onHandleChange={handleFileOrdersChange}
      />
      <ButtonCheck onCheck={handleOnCheck} />
      {clicked && orderIds.length > 0 && (
        <div className="result container">
          <h2>Каталог</h2>
          <div className="product-wrapper">
            {orderIds.map((e) => (
              <div className="product">
                <h4>{e[2].slice(1).slice(0, -1)}</h4>
                <img src={e[1]} />
                <div className="footer-product">
                  <span className="price">{Number(e[5]).toFixed(2)}лв.</span>
                  <button>Добави в количката</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
