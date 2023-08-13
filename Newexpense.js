import "./Newexpense.css"
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
const New_expense = () =>{
    return (
    <div className="new-expense">
    <ExpenseForm></ExpenseForm>
    </div>
    );
}
export default New_expense;
