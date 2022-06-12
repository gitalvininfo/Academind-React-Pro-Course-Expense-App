import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
  ]

  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date.toISOString()} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date.toISOString()} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date.toISOString()} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date.toISOString()} />
    </div>
  )
}

export default App;
