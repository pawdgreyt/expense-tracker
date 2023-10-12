import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  { id:'e1', title: 'Groceries', amount: 5000, date: new Date(2023, 3, 19) },
  { id:'e2', title: 'Car Insurance', amount: 1000, date: new Date(2023, 3, 9) },
  { id:'e3', title: 'House Rent', amount: 8000, date: new Date(2023, 3, 29) },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler}/>
      <Expenses items={expenses}  />
    </div>
  );
}

export default App;
