import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
    <h2>Let's get started!</h2>
    <div>
      {
        Expense.map((Expense) =>(
        <ExpenseItem E_name={Expense.ExpName}E_price={Expense.price}E_location={Expense.location}></ExpenseItem>
        ))
      }
    </div>
  </div>
  );
}

export default App;
