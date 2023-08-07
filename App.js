import ExpenseItem from "./components/ExpenseItem"
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper,
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Mysuru'
    },
    {
      id: 'e3',
      title: 'Car Insurance,
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Bengaluru'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Shimoga'
    },
  ];
  return (
    <div>
    <h2>Expense List</h2>
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} location={expenses[0].location}></ExpenseItem>
    <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} location={expenses[1].location}></ExpenseItem>
    <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} location={expenses[2].location}></ExpenseItem>
    </div>
  );
}

export default App;
