import ExpenseItem from "./components/Expense/ExpenseItem"
import New_expense from "./components/New_expense/Newexpense.js";
import "./components/New_expense/ExpenseForm.css"


const App = () =>{
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Mysuru'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
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
    <div id="List">
    <New_expense></New_expense>
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} location={expenses[0].location} id={expenses[0].id}></ExpenseItem>
    <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} location={expenses[1].location} id={expenses[1].id}></ExpenseItem>
    <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} location={expenses[2].location} id={expenses[2].id}></ExpenseItem>
    </div>
  );
}

export default App;
