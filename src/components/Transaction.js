import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction() {
  const [text, setText] = useState(null);
  const [amount, setAmount] = useState(null);
  const { addTransaction } = useContext(GlobalContext);

  const submitTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <div className="transaction">
      <h4>Add new transaction</h4>
      <form onSubmit={submitTransaction}>
        <div className="text">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            id="text"
            required
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text..."
            className="input-field" // Add this class for styling
          />
        </div>
        <div className="text">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            max={1000000}
            name="amount"
            id="amount"
            required
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount..."
            className="input-field" // Add this class for styling
          />
        </div>
        <div
          className="transaction-btn"
          style={{ marginBottom: "0.5rem", marginTop: "1rem" }}
        >
          <button className="buttons" type="submit">
            Add New Transaction
          </button>
        </div>
      </form>
    </div>
  );
}
