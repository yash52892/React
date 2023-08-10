const ExpenseForm = () =>{
    const getData = (form)=> {
        var formData = new FormData(form);
        for (var pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }
        console.log(Object.fromEntries(formData));
      }
         const el = document.getElementById('form');
        if (el) 
        {
            el.addEventListener("Submit", function (e) {
                e.preventDefault();
            getData(e.target);
            });
        }
    return (
    <div>
    <form id="form">
        <label>Expense Title</label>
        <input type="text"/>
        <label>Expense Amount</label>
        <input type="number"/>
        <label>Expense Date</label>
        <input type="date"/>
        <input type="submit" value="Submit"></input>
    </form>
    </div>
    );
}
export default ExpenseForm;