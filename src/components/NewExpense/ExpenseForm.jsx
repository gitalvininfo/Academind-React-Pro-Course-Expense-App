import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense___control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense___control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense___control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-01-01"
            max="2023-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
