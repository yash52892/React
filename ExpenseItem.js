function ExpenseItem(){
    const ExpItem="Food";
    const ExpPrice=20;
    const LocationOfExpenditure= 'Mysuru';
    return(
        <div>
        <h2>ExpenseItem!</h2>
        <h3>{ExpItem} Rs.{ExpPrice} {LocationOfExpenditure}</h3>
        </div>
    )
}

export default ExpenseItem
