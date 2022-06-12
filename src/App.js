import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.17, date: new Date(2021, 2, 28) },
  ]

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App;
