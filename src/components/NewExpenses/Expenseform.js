import React ,{useState} from "react";

// use multiple states

import './Expenseform.css'

const Expensesform = (props) => { // This props is to transfer data from child to parent 


    const [enteredtitle, setenteredtitle] = useState("");

    const [enteredamount, setenteredamount] = useState("");

    const [entereddate, setentereddate] = useState("");

    const titlechangehandler = (event) => {
       // console.log(event.target.value);
        setenteredtitle(event.target.value);

    };

    const amountchangehandler = (event) => {

       // console.log(event.target.value);
       setenteredamount(event.target.value);
    };

    const datechangehandler = (event) => {
       // console.log(event.target.value);
       setentereddate(event.target.value);

    };


    const submitHandler = (event) => {

        // jab data barenge aur submit karenge toh bydefault vo page refresh hota ... but react mein refresh nahi hona chaiye so use
        event.preventDefault();
        const expesnseData = {

            title : enteredtitle,
            amount : enteredamount,
            date: new Date(entereddate) // as enterdate is string so we make it as a date object

        }
       // console.log(expesnseData); To check value

       // click submit karne ke bad bhi change nahi ho raha ... so we use two way binding

       props.onSaveExpenseData(expesnseData);
       setenteredamount("");
       setentereddate("");
       setenteredtitle("");

       // To transfer data form child to parent... we can't transfer data directly to any component ... it is possible only through passing form parent to parent
        
    };

    
    return (


        // Note ki jab data fill karenge form mein toh usko apne ko save karna padega... apply onSubmit event on form tag
        <form onSubmit={submitHandler}>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value = {enteredtitle} onChange={titlechangehandler}/>
                </div>
            </div>

           
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min = "0.01" step="0.01" value = {enteredamount} onChange={amountchangehandler}/>
                </div>
            

            
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value = {entereddate}  onChange={datechangehandler}/>
                </div>
          

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default Expensesform;