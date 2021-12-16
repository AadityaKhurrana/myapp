import React,{useState} from 'react';
import Expenses from './component/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

const Dummy = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
  title: 'New TV', 
  amount: 799.49, 
  date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

  const [mystate, setmystate] = useState(Dummy);
  const ExpenseAdded=(expense)=>
  {
    setmystate((prevState)=>{
        return [...prevState,expense];
      }
    );
  };
  return (
    <div>
      <NewExpense onNewExpense={ExpenseAdded}></NewExpense>
    
      {/* component can be used as html tag but the only differnce is
      html tag are not capital but component are start with capital
      letter */}
    <Expenses item={mystate} ></Expenses>

    </div>
  );
}

export default App;
