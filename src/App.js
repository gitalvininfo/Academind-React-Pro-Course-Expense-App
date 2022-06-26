import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  { id: 1, title: "Book 1", amount: 291.17, date: new Date(2022, 2, 28) },
  { id: 2, title: "Book 2", amount: 292.17, date: new Date(2022, 3, 28) },
  { id: 3, title: "Book 3", amount: 293.17, date: new Date(2022, 4, 28) },
  { id: 4, title: "Book 4", amount: 294.17, date: new Date(2022, 5, 28) },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    console.log(expense)
    setExpenses(prev => {
      return [expense, ...prev];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App;
