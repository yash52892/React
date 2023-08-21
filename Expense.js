import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expense.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  };
  const checkItem = props.items.filter(expese =>{
    return expese.date.getFullYear().toString()===filteredYear;
  })
  console.log(checkItem.length);
  return (
    <div id='List'>
      <Card className='expenses'>
          <ExpensesFilter seleted={filteredYear} onChangeFilter={filterChangeHandler}/>
          {
          (checkItem.length>1)?(checkItem.map((item) => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} location={item.location}/>
            )):<div> Only single Expense here. Please add more... </div>
            
          }
      </Card>
    </div>
  );
};

export default Expenses;
