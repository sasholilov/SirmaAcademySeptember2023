import { act } from "react-dom/test-utils";
import "./App.css";
import ButtonCheck from "./components/buttons/ButtonCheck";
import ButtonFile from "./components/buttons/ButtonFile";
import { splitStringToArray } from "./utils/dataUtils";
import { useState } from "react";

function App() {
  const [orderIds, setOrderIds] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [cartArr, setCartArr] = useState([]);
  const [orderComplete, setOrderComplete] = useState([]);

  function handleAddToCart(product) {
    const cartObj = {
      productId: product[0],
      productImage: product[1],
      productName: product[2],
      productRef: product[3],
      productPrice: product[6],
      quantity: 1,
    };

    const index = cartArr.findIndex((q) => q.productId === product[0]);

    if (index === -1) {
      setCartArr((prevCart) => [...prevCart, cartObj]);
    } else {
      const updatedCart = cartArr.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartArr(updatedCart);
    }
    console.log(cartArr);
  }

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

  function handleOrder() {
    const completeOrderArr = cartArr.map((e) => e);
    setCartArr([]);
    console.log(completeOrderArr);
    setOrderComplete(completeOrderArr);
  }

  const handleOnCheck = function () {
    setClicked(true);
  };

  const handleDecreaseCart = function (product, index) {
    const updatedCart = cartArr
      .map((item, i) =>
        i === index ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((e) => e.quantity > 0);
    setCartArr(updatedCart);
  };

  const handleIncreaseCart = function (product, index) {
    const updatedCart = cartArr.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartArr(updatedCart);
  };

  return (
    <div>
      <ButtonFile
        text="Качете CSV файл с продукти от сайта"
        type="file"
        onHandleChange={handleFileOrdersChange}
      />
      <ButtonCheck onCheck={handleOnCheck} />
      {clicked && orderIds.length > 0 && (
        <div className="result container">
          <h2>Каталог</h2>
          <div className="product-wrapper">
            {orderIds.map((pr) => (
              <div key={pr[0]} className="product">
                <h4>{pr[2].slice(1).slice(0, -1)}</h4>
                <img src={pr[1]} />
                <div className="footer-product">
                  <span className="price">{Number(pr[5]).toFixed(2)}лв.</span>
                  <button onClick={() => handleAddToCart(pr)}>
                    Добави в количката
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {cartArr.length > 0 && (
        <div className="cart-items container">
          <h2>
            Брой продукти:{" "}
            {cartArr.reduce((acc, item) => {
              return acc + item.quantity;
            }, 0)}
          </h2>
          {cartArr.map((e, index) => (
            <div className="product-list">
              <span>{index + 1}</span>
              <img src={e.productImage} />
              <p>{e.productName}</p>
              <p className="qty">
                <span onClick={() => handleDecreaseCart(e, index)}>-</span>
                <span>{e.quantity}</span>
                <span onClick={() => handleIncreaseCart(e, index)}>+</span>
              </p>
              <p>{(e.productPrice * e.quantity).toFixed(2)}лв</p>
            </div>
          ))}
          <h2>
            Обща сума:{" "}
            {cartArr
              .reduce((acc, item) => {
                return acc + +item.productPrice * item.quantity;
              }, 0)
              .toFixed(2)}
            лв
          </h2>
          <button onClick={handleOrder}>ПОРЪЧАЙ</button>
        </div>
      )}
      {cartArr.length === 0 && (
        <div className="cart-items container">
          <h2>Нямате добавени продукти в количката</h2>
        </div>
      )}
      {orderComplete.length > 0 && (
        <div className="order-confirm container">
          <h2>Успешно завършена поръчка</h2>
        </div>
      )}
    </div>
  );
}

export default App;
