import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const [isEditing, setIsEditing] = useState(false);
    const saveExpenses=(Expenses)=>
    {

        const ExpenseData={
            ...Expenses,
            id:Math.random().toString()
        };
        props.onNewExpense(ExpenseData);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
    const stopEditingHandler = () => {
        setIsEditing(false);
      };

    return(
        <div className="new-expense">

        {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
        )}

        {isEditing && (
                <ExpenseForm
                onSaveData={saveExpenses}
                onCancel={stopEditingHandler}
                />
            )}
        </div>
    );

};
export default NewExpense;
