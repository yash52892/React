import "./Newexpense.css"
import ExpenseForm from "./ExpenseForm";

const Newexpense = (props) =>{
    const addFormHandler =(exp)=>{
        const newExp={
            id: Math.random(),
            ...exp  
        };
        props.getData(newExp);
    }
    return (
    <div className="new-expense">
    <ExpenseForm addForm={addFormHandler}></ExpenseForm>
    </div>
    );
}
export default Newexpense;
