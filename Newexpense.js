import "./Newexpense.css"
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const Newexpense = (props) =>{
    const [init, updatedState]=useState(true);
    const addFormHandler =(exp)=>{
        props.getData(exp);
        updatedState(true);
    }
    
    const onClick=()=>{
        updatedState(false);
    }
    const cancelhandled=()=>{
        updatedState(true);
    }
    
    return (
    <div className="new-expense">
        {
            (init)?
            (<button onClick={onClick}>Add Expense</button>):
            (<ExpenseForm addForm={addFormHandler} cancelhandler={cancelhandled}/>)
          
        }
    
    </div>
    );
}
export default Newexpense;
