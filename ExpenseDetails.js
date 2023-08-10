import React, { useState } from "react";

const ExpenseDetails = (props)=>{
    const clickHandler2 = (propsid) =>{
      document.getElementById(propsid).remove();
     }
    const [p,udpate]= useState(props.amount);
     const clickHandler1 = () =>{
      udpate('100');
      console.log(p)
     };

    return (
      <div className="expense-item__description">
      <h2 className="expense-item">{props.title}</h2>
        <div className="expense-item__price">Rs.{p}</div>
        <div className="expense-item">{props.location}</div>
        <button className="expense-item" onClick={()=>clickHandler1()}>Add</button>
        <button className="expense-item" onClick={()=>clickHandler2(props.id)}>Delete</button>
      </div>
    )
  }

  export default ExpenseDetails;
