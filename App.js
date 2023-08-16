import Expenses from "./components/Expense/Expense";
import Newexpense from "./components/New_expense/Newexpense";
import "./components/New_expense/ExpenseForm.css";
import {useState} from "react";
import React from "react";


const App = (props) =>{
  let expenses = [
    {
      id: 1,
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Mysuru'
    },
    {
      id: 2,
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Bengaluru'
    },
    {
      id: 3,
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Shimoga'
    }
  ];
  const [newExp, setSelectedItems] = useState(expenses);
   const add_data = (data)=>{
    setSelectedItems((newExp) => [...expenses, data])
    }; 
  return (
    <div>
    <Newexpense getData={add_data}/>
    <Expenses items={newExp} />
    </div>
  );
}

export default App;
