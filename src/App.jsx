import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, delCustomer } from "./store/customersReducer";

function App() {
  // const [oldCash, setOldCash] = useState(0);
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customersReducer.customers);

  const addCash = () => {
    dispatch({ type: "ADD CASH", payload: 5000000 });
  };
  const minusCash = () => {
    dispatch({ type: "MINUS CASH", payload: 1000000 });
  };

  const handleAddCustomer = () => {
    dispatch(addCustomer(userName));
    // console.table(customers);
    // console.log(customers.length)
  };

  const handleDelCustomer = () => {
    dispatch(delCustomer(userName));
    // debugger;
    // console.table(customers);
    // console.log(customers.length)
  };

  return (
    <>
      <h1>R e d u x (cash)</h1>
      <h2>Cash: {cash}</h2>
      <button onClick={() => addCash()}>Добавить</button>

      {/* <h1>Redux: {cash}</h1> */}
      <button onClick={() => minusCash()}>Отнять</button>

      {/* <h1>oldCash: {oldCash}</h1>
        <button onClick={() => setOldCash(cash + 1)}>Добавить</button> */}

      <div>
        <h1>R e d u x (users)</h1>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
        />

        <button onClick={() => handleAddCustomer()}>
          Добавить юзера
        </button>

        <button onClick={() => handleDelCustomer()}>
          Удалить юзера
        </button>

        {customers.length > 0 &&
          customers.map((customer) => <p key={customer}>{customer}</p>)}
      </div>
    </>
  );
}

export default App;
