import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css';

const Expenses = (props) => {

console.log(props);
  return (
    <div>
      <Card className='expenses'>
        {
            Object.keys(props.items).map(keys=>{
            return(
            <ExpenseItem id={props.items[keys].id} title={props.items[keys].title} amount={props.items[keys].amount} date={props.items[keys].date} location={props.items[keys].location}/>
            )
            })
        }
        </Card>
    </div>
  );
};

export default Expenses;