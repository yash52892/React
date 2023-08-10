import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) =>{
  return (
    <div id={props.id} className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>    
      <ExpenseDetails amount={props.amount} location={props.location} title={props.title} id={props.id}></ExpenseDetails>
    </div>
  )
}
export default ExpenseItem;
