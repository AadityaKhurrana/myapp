import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm=(props)=>{
    const [mytitle,setTitle]=useState('');
    const [myamount,setAmount]=useState('');
    const [mydate,setDate]=useState('');

    const titleHandler=(event)=>{
        setTitle(event.target.value);
    }

    const amountHandler=(event)=>{
        setAmount(event.target.value);
    }

    const dateHandler=(event)=>{
        setDate(event.target.value);
    }

    const handleSubmit=(event)=>
    {
        event.preventDefault();

        const expenseData={
            title:mytitle,
            amount:myamount,
            date:new Date(mydate)
        }

        
        props.onSaveData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');


    }
    
    return(
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text"  
                    value={mytitle}
                    onChange={titleHandler}/>
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min='0.01' step='0.01'
                    value={myamount}
                    onChange={amountHandler} />
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' 
                    value={mydate}
                    onChange={dateHandler} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};
export default ExpenseForm;