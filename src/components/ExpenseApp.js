// main js app

import { useEffect, useState } from "react";
import Overview from "./OverView";
import TransActionsComponent from "./TransActionsComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransactions = (formValues) => {
    const DateId = { ...formValues, id: Date.now() };
    setTransactions([...transactions, DateId]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "Expense"
        ? (exp += parseFloat(t.amount))
        : (inc += parseFloat(t.amount));
      setExpense(exp);
      setIncome(inc);
    });
  }, [transactions]);
  return (
    <section className="container">
      <div>
        <Overview
          income={income}
          expense={expense}
          addTransactions={addTransactions}
        />
      </div>
      <div>
        <TransActionsComponent transactions={transactions} />
      </div>
    </section>
  );
};

export default ExpenseApp;
