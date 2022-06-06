import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { AddAlertSharp } from "@mui/icons-material";
const TransActionForm = ({ addTransactions }) => {
  // 3 state
  // 1. amount  value
  // 2. description value
  // 3. radio button
  const [formValues, setformValues] = useState({
    type: "Expense",
    amount: 0,
    description: "",
  });

  const changeHandler = (e) => {
    setformValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const forminput = document.querySelectorAll(".form-input");
    addTransactions(formValues);
    console.log(forminput);
  };
  return (
    <form className="form-transactions" onSubmit={submitHandler}>
      <label className="control-label">Amount</label>
      <input
        className="form-input"
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
      />
      <label className="control-label">Description</label>
      <input
        className="form-input"
        type="text"
        name="description"
        onChange={changeHandler}
        value={formValues.description}
      />
      <h2>Type</h2>
      <div className="form-radio">
        <input
          type="radio"
          value="Expense"
          name="type"
          checked={formValues.type === "Expense"}
          onChange={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          value="Income"
          name="type"
          checked={formValues.type === "Income"}
          onChange={changeHandler}
        />
        <label>Income</label>
      </div>
      <Stack direction="column" spacing={2}>
        <Button type="sumbit" variant="contained" endIcon={<AddAlertSharp />}>
          Add TransAction
        </Button>
      </Stack>
    </form>
  );
};

export default TransActionForm;
