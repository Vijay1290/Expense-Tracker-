import React from "react";

import './Newexpenses.css'

import Expensesform
 from "./Expenseform";
const Newexpenses = (props) => { // This props is to send data to parent App.js


    const saveExpeneseDataHandler = (enteredExpenseData)=> {
        // ye parameter mein child ka data ayega
        // console.log(enteredExpenseData); To see child's data

        // id bana na hai sabke liye 
        const expenseData = {
           ...enteredExpenseData,
           id : Math.random().toString()
        }
        // console.log(expenseData) to see expenseData in console
        
        props.onAddExpense(expenseData);
    };
    return(
       
        <div className="new-expense">
                
                <Expensesform onSaveExpenseData={saveExpeneseDataHandler}/>

        </div>
    );
    // ye abhi output mein nahi dikega ... app.js mein dal na padega
}

export default Newexpenses;