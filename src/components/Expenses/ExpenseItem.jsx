import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, amount }) => {
  const clickHandler = (message) => {
    console.log(message)
  }
  


  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={() => clickHandler('test message')}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
