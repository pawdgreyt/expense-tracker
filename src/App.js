import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id:'e1', title: 'Groceries', amount: 5000, date: new Date(2023, 3, 19) },
    { id:'e2', title: 'Car Insurance', amount: 1000, date: new Date(2023, 3, 9) },
    { id:'e3', title: 'House Rent', amount: 8000, date: new Date(2023, 3, 29) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
