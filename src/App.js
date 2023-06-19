import React, {useState} from 'react'; // We have included this from package.json as we will use this later for props and state ... props can be used without including this ... and for state is necessary to include... and it should be included in every file.js i.e. in every component





import Expenseitem from './components/Expenses/Expenseitem'; // used for third example
import Expenses from './components/Expenses/Expenses';

import Newexpenses from './components/NewExpenses/Newexpenses';

function App() {

  // data bejege props ke through

  /* let expensedata = new Date(2022, 3, 28); 
     let expensetitle = "school fee"
     let expenseamount = "$300"
    

     to pass this write in return 
     <Expenseitem
      data={expensedate}
      title={expensetitle}  also write like title="school fee" instead of passing variable
      amount={expenseamount}/>

     </Expenseitem>
     

    receive in props ....function function_name(props)... props object banega ...access through dot operator
    
      {props.date} ye error denga because ye object hai data ka... usko direct print nahi kar skate ... ek method hai {props.data.toIOString()} it will written object in string format which also includes second miliseconds 
    
    Alag- Alag kar ne ke liye... data object ko... 
      const month = props.data.toLocalString('en-US', {month:long});
      const year = props.data.getFullYear();
      const date = props.data.toLocalString('en-Us', {day:'2-digit'});
      Now, we can access it as variable
    
      {props.title}
    
      {props.amount}
     
      */




      // similar data bana se acha usko array mein rakhte hai 
      /* 
      let expense = [
        {
           id :'e1',
           title : "school-fee",
            amount : 200,
            data : new Date(2022, 3, 28)

        },
        {
          id :'e2',
          title : "school-fee",
           amount : 300,
           data : new Date(2022, 3, 28)

       },
       {
        id :'e3',
        title : "school-fee",
         amount : 400,
         data : new Date(2022, 3, 28)

     },
     {
      id :'e4',
      title : "school-fee",
       amount : 500,
       data : new Date(2022, 3, 28)

   }
      ]


      now to access it means to pass for all 

      <Expenseitem>
        date = {expense[i].date}
        title = {expense[i].title}
      amount = {expense[i].amount}
      </Expenseitem>

      */




    // we want to create multiple component so we make a new component for date...Expensedate.js and Expense.css


// Example 3


    /* 
    let expenses = [ 
      {
        id :'e1',
        title : "school-fee",
        amount : 200,
        date : new Date(2022, 3, 28)

      },
      {
        id :'e2',
        title : "Books",
        amount : 300,
        date : new Date(2022, 4, 28)

      },
      {
        id :'e3',
        title : "Services",
        amount : 500,
        date : new Date(2022, 5, 28)

      },
      {
        id :'e1',
        title : "Electronics",
        amount : 600,
        date : new Date(2022, 6, 28)

      },
    ];


    return (

      <div>
        <h2>Let's get started </h2>
        <Expenseitem 
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount} />
       
       <Expenseitem 
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount} />

<Expenseitem 
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount} />

<Expenseitem 
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount} />
      </div>
        
        );
        
      */
 

        // now, we will make App.js more clean ... as we here repeat this Expenseitem much more time ... usko alag component mein rakege 
        //make Expenes.js and Expenses.css

 // Example 4


 /*
 let expenses = [ 
  {
    id :'e1',
    title : "school-fee",
    amount : 200,
    date : new Date(2022, 3, 28)

  },
  {
    id :'e2',
    title : "Books",
    amount : 300,
    date : new Date(2022, 4, 28)

  },
  {
    id :'e3',
    title : "Services",
    amount : 500,
    date : new Date(2022, 5, 28)

  },
  {
    id :'e1',
    title : "Electronics",
    amount : 600,
    date : new Date(2022, 6, 28)

  },
];

const addExpenseHandler = (expense) => {
  console.log(expense);
};

 return(

  <div>
       <h2>Let's get started </h2> 

      <Newexpenses onAddExpense={addExpenseHandler}/>
      <Expenses item = {expenses}>

      </Expenses>

  </div>
 )
 */
 




  
   
 // Example 4


// Now, How to use nested component 
/* 
<component1>
  <component2></component2>
</component1>
*/

/*example 4 ka result jo hai ... usme ke black container hai bada jisme apne sare ke sare expenses hai total 4 ... vo bade box ko
 aur date wale box ko shadow and rounded css laga honga

 rounded and shadow wala jo css hai usko ek div mein denge ... phir us div ko ek component bana denge aur phir us div ke andar ek item ya container bhi pass kar sakte hai 

 ye kam karna ke need hai just to understand as chote chote chizo ke liye component nahi bana na hai

 make Card.js and Card.css
 */

// After Example 4 we make file structure more clean 
// UI folder me Card.js and Card.css and baki Expenses folder  mein
// after that change the path of all import lines for App.js and other component also 
// also we use react from package.json as same we have used for react-dom
// we will make function as arrow function as in ES6 and for easy understanding of code



// for form data to be added
let dummy_Expense = [ 
  {
    id :'e1',
    title : "school-fee",
    amount : 200,
    date : new Date(2022, 3, 28)

  },
  {
    id :'e2',
    title : "Books",
    amount : 300,
    date : new Date(2022, 4, 28)

  },
  {
    id :'e3',
    title : "Services",
    amount : 500,
    date : new Date(2022, 5, 28)

  },
  {
    id :'e1',
    title : "Electronics",
    amount : 600,
    date : new Date(2022, 6, 28)

  },
];
const [expenses, setExpenses] = useState(dummy_Expense);
const addExpenseHandler = (expense) => {
  // console.log(expense);
  const updateExpense = [expense, ...expenses];
  setExpenses(updateExpense); // direct array bhi pass kar sakte hai 
 

};

 return(

  <div>
       <h2>Let's get started </h2> 

      <Newexpenses onAddExpense={addExpenseHandler}/>
      <Expenses item = {expenses}>

      </Expenses>

  </div>
 );

}


export default App;