import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import TransActionForm from "./TransActionForm";
const Overview = ({ income, expense, addTransactions }) => {
  const [isShow, setIsshow] = useState(false);
  return (
    <div>
      <div className="top-section">
        <p>Balance: {income - expense}$</p>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => setIsshow(!isShow)}>
            {isShow ? "Cancel" : "Add"}
          </Button>
        </Stack>
      </div>
      {isShow && (
        // Form transactions
        <TransActionForm addTransactions={addTransactions} />
      )}
      <div className="expenseIncome-section">
        <div className="expens-section">Expense: {expense}</div>
        <div className="income-section">Income: {income}</div>
      </div>
    </div>
  );
};

export default Overview;
