import React from 'react'; // We have included this from package.json as we will use this later for props and state ... props can be used without including this ... and for state is necessary to include... and it should be included in every file.js i.e. in every component


import './Expenses.css';
import Expenseitem from './Expenseitem';
import Card from '../UI/Card';

/*
function Expenses(props) 
 we will make it arrow function...const bana sakte isko as change nahi honga par late bhi chalega 
 */
const Expenses = (props) => {

   /* return (

   /* apne pass 4 expense props.item hai so usko div mein wrap karenge */
   /*
   <div className="expenses">

<Expenseitem 
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].amount} />
       
       <Expenseitem 
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount} />

<Expenseitem 
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount} />

<Expenseitem 
        date={props.item[3].date}
        title={props.item[3].title}
        amount={props.item[3].amount} />

   </div>

    );
    */

    return (

    /*
        // for Example 4 
        
        <Card className="expenses">
     
     <Expenseitem 
             date={props.item[0].date}
             title={props.item[0].title}
             amount={props.item[0].amount} />
            
            <Expenseitem 
             date={props.item[1].date}
             title={props.item[1].title}
             amount={props.item[1].amount} />
     
     <Expenseitem 
             date={props.item[2].date}
             title={props.item[2].title}
             amount={props.item[2].amount} />
     
     <Expenseitem 
             date={props.item[3].date}
             title={props.item[3].title}
             amount={props.item[3].amount} />
     
        </Card> */



        // form ke data ko lane ke liye array and loop ka use karenge... using map funtion

        <Card className="expenses">

                {
                        props.item.map(
                                expense => (
                                        // arrow funtion and bar bar use nahi karna so variable mein store nahi karenge
                                        <Expenseitem 
                                        date={expense.date}
                                        title={expense.title}
                                        amount={expense.amount} />

                                
                        )
                        )
                }
        </Card>


    );

}

export default Expenses;