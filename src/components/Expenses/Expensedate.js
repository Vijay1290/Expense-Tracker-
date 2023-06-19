import React from 'react'; // We have included this from package.json as we will use this later for props and state ... props can be used without including this ... and for state is necessary to include... and it should be included in every file.js i.e. in every component


import './Expensedate.css';  

/* 
function Expenseitem(props)
we will make it arrow function...const bana sakte isko as change nahi honga par late bhi chalega 
 */
const Expensedate=(props)=>{

    const month = props.date.toLocaleString('en-US',{ month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{ day: '2-digit' });

    return (

      <div className="expenser-date">
            <div className="expense-date__month">{ month }</div>
            <div className="expense-date__year">{ year }</div>
            <div className="expense-date__day">{ day }</div>
    </div>
    );

}

export default Expensedate;







