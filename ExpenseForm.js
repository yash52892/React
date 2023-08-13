import "./ExpenseForm.css"
import React, { useState } from "react";    
const ExpenseForm = (props) =>{
    const [t,udpate_t]= useState('');
    const [a,udpate_a]= useState('');
    const [d,udpate_d]= useState('');

     const enteredtitle = (event) =>{
      udpate_t(event.target.value);
     };
     
     const enteredamount = (event) =>{
      udpate_a(event.target.value);
     };
     
     const entereddate = (event) =>{
        udpate_d(event.target.value);
     };
      
     const getsinput =(e) =>{
        e.preventDefault();
        const props={
            title:t,
            amount:a,
            date:new Date(d)
        };
        console.log(props);
    };
return(
        <form onSubmit={getsinput}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label className="new-expense__control label">Expense Title</label>
                    <input type="text" onChange={enteredtitle} className="new-expense__control input"/>
                </div>
                <div className="new-expense__control">
                    <label className="new-expense__control label">Expense Amount</label>
                    <input type="number" onChange={enteredamount} className="new-expense__control input"/>
                </div>
                <div className="new-expense__control">
                    <label className="new-expense__control label">Expense Date</label>
                    <input type="date" onChange={entereddate} className="new-expense__control input"/>
                </div>
                <div className="new-expense__actions"> 
                <button type="submit">Add Expense</button>
                </div>
            </div>
    </form>  
);
}

export default ExpenseForm;
