import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { id:'e1', title: 'Groceries', amount: 5000, date: new Date(2023, 3, 19) },
    { id:'e2', title: 'Car Insurance', amount: 1000, date: new Date(2023, 3, 9) },
    { id:'e3', title: 'House Rent', amount: 8000, date: new Date(2023, 3, 29) },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
