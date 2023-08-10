  const ExpenseDetails = (props)=>{
    const clickHandler = (propsid) =>{
      document.getElementById(propsid).remove();
      
     }
    return (
      <div className="expense-item__description">
      <h2 className="expense-item">{props.title}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
        <div className="expense-item">{props.location}</div>
        <button className="expense-item" onClick={()=>clickHandler(props.id)}>Delete</button>
      </div>
    )
  }

  export default ExpenseDetails;
