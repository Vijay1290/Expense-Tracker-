import React from 'react'; // We have included this from package.json as we will use this later for props and state ... props can be used without including this ... and for state is necessary to include... and it should be included in every file.js i.e. in every component


import './Card.css';

/*
function Card(props) {
// for example 4
// Card component will replace everything so we use props for its child component 
// but replace ka css jayega so use following code
const classes = "card " + props.className; // No curly braces as jsx mein nahi hai variable use ... and also note there is space after card in string format so that it will understand there is two diffrent classes are there 
    return <div className={classes}>{props.children}</div> 
}
*/
// we will make it arrow function...const bana sakte isko as change nahi honga par late bhi chalega 
const Card = (props) => {
    // for example 4
    // Card component will replace everything so we use props for its child component 
    // but replace ka css jayega so use following code
    const classes = "card " + props.className; // No curly braces as jsx mein nahi hai variable use ... and also note there is space after card in string format so that it will understand there is two diffrent classes are there 
        return <div className={classes}>{props.children}</div> 
    }

export default Card;

// Used for Expenseitem.js and Expense.js