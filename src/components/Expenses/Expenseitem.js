import React, {useState} from 'react'; // We have included this from package.json as we will use this later for props and state ... props can be used without including this ... and for state is necessary to include... and it should be included in every file.js i.e. in every component

import './Expenseitem.css';
import Expensedate from './Expensedate';
import Card from '../UI/Card';

/* 
function Expenseitem(props)
we will make it arrow function...const bana sakte isko as change nahi honga par late bhi chalega 
 */
const Expenseitem=(props) =>{
    
    // we can directly write content in html tag instead of using variable
    // here... we can declare variable as in javascript and can be use in jsx by {{variable_name}}
    // passing data through props
    // return (

       
    //     <div div className='expense-item' >
    //         <div>March 12th 2022</div>
    //         <div className='expense-item__description'>
    //             <h2>Car Insurance</h2>
    //         </div>
    //         <div className='expense-item__price'>$200</div>
    //     </div>


      

    // );



    // phirse props.date pass kardiya lekin vo Expensedate mein props hi rahega aur date nam se
     
   /* return (

 < div className='expense-item' >
            <div>
                 <Expensedate date = {props.date} /> 
                
            </div>
             <div className='expense-item__description'>
                 <h2>{ props.title }</h2>
             </div>
            <div className='expense-item__price'>${ props.amount }</div>
         </div> 

    ); */

    // Now, we have to use Card here so import Card.js here 
// for example 4
    // return (

    //     < Card className='expense-item' >
    //                <div>
    //                     <Expensedate date = {props.date} /> 
                       
    //                </div>
    //                 <div className='expense-item__description'>
    //                     <h2>{ props.title }</h2>
    //                 </div>
    //                <div className='expense-item__price'>${ props.amount }</div>
    //             </Card> 
       
    //        );










//***States or Event***
// koi bhi action jo website pe use karta hai ... form bharna click karna scroll karna 

// adding button in expense item 
// selecting button ...onclick={funtion_name}... aise hi alag alag hai ... search on internet 
// we have to change title on click of button

//let title = props.title;

 //now import useState from react ... jaha bhi use likha hai vo hook hai


// const [title, settitle] =  useState(props.title); // ye do chiz return karta hai array mein... so use array destructring... ek value and ek function return karta hai
//   // settile will use to change value of title

// // const [newtitle, setnewtitle] = useState("hi"); // yaha error ayega because hamesha newtitle "hi" hi rahega ... so kuch bhi type kare phirse "hi" hi hojayega... so make one more function for it 

// const [newtitle, setnewtitle] = useState("hi");

// const clickHandler = () =>{

//     // alert("clicked");

//     // title = "New title..."   actual ye change nahi honga ... bas console pe honga ... ye change kar ne ke liye element ko tag karna padta ... but we use state for that
//     // console.log(title);


//     //settitle('New title...');


//     // Now to take title from user 
//     // and useState charo ke liye alag honga ... har component ke liye 


    
//     settitle(newtitle);



// }

// const changeHandler = (event) => {  
    
//     //event mein sab event store honga
//     setnewtitle(event.target.value);

// }


    return (

        < Card className='expense-item' >
                   <div>
                        <Expensedate date = {props.date} /> 
                       
                   </div>
                    <div className='expense-item__description'>
                        <h2>{ props.title }</h2> 
                        {/* <h2>{ title }</h2>  if we use states then write this because we have made props.title = title */}
                    </div>
                   <div className='expense-item__price'>${ props.amount }</div>
                   {/* <input type="text" value={ newtitle } onChange={ changeHandler }/>
                   <button onClick={ clickHandler }>Change title</button> */}
                </Card> 
       
           );
       
}

export default Expenseitem;