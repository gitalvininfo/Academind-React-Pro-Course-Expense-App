import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
  ]

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App;
