import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expense.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  };
  
  return (
    <div id='List'>
      <Card className='expenses'>
      <ExpensesFilter seleted={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
          {
            props.items.map(item=>
              (
              <ExpenseItem id={item.id} title={item.title} amount={item.amount} date={item.date} location={item.location}/>
              )
            )
          }
      </Card>
    </div>
  );
};

export default Expenses;
