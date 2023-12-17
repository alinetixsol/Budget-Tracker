import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function History() {
  const { transactions, deleteTransaction, getTransactions } =
    useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div className="history">
      <h4>History</h4>
      <div className="details">
        {transactions?.map((transaction) => {
          return (
            <div className="li" key={transaction?._id}>
              <span
                className="del-btn"
                onClick={() => deleteTransaction(transaction?._id)}
              >
                Delete
              </span>
              <div
                className={`single-details ${
                  transaction?.amount > 0 ? "plus" : "minus"
                }`}
                key={transaction?.id}
              >
                <div className="item-name">
                  <p>{transaction?.text}</p>
                </div>
                <p>
                  {transaction?.amount < 0 ? "-" : "+"}$
                  {Math.abs(transaction?.amount)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
