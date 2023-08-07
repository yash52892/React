  function ExpenseDetails(props){
    return (
      <div className="expense-item__description">
      <h2 className="expense-item">{props.title}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
        <div className="expense-item">{props.location}</div>
      </div>
    )
  }

  export default ExpenseDetails;
