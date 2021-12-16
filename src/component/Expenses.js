import React, { useState } from 'react';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';
import ExpenseContent from './ExpenseContent';
import Expensechart from './Expensechart';
function Expenses(props)
{
      const [filteredYear, setFilteredYear] = useState('2020');

      const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);};

      const filteredExpense= props.item.filter(expenses=>{
        return expenses.date.getFullYear().toString() === filteredYear;
      });

return(
      <div className="expenses">

        <ExpenseFilter   selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <Expensechart    expenses={filteredExpense} />
        <ExpenseContent  item={filteredExpense}/>
      
{/* 
conditioning output */}
        {/* {filteredExpense.length===0 && <p>No item found</p>}
        {filteredExpense.length>0 &&   filteredExpense.map(
            (data)=> (<ExpenseItem 
            key={data.id}
            title={data.title} 
            amount={data.amount} 
            date={data.date}/>))} */}
{/* or */}

        {/* {
          filteredExpense.length===0?(<p>No Item Found</p>):(filteredExpense.map(
            (data)=> (<ExpenseItem 
            key={data.id}
            title={data.title} 
            amount={data.amount} 
            date={data.date}/>))
          )
        } */}

{/* or */}

      {/* {
        filteredExpense.map(
          (data)=> (<ExpenseItem 
          key={data.id}
          title={data.title} 
          amount={data.amount} 
          date={data.date}/>)
        )
      } */}
    </div>
    );

};
export default Expenses;