import './ExpenseContent.css';
import ExpenseItem from './ExpenseItem';
function ExpenseContent(props){
 
      if(props.item.length===0)
      {
          return <h2 className="expenses-list__fallback">Item Not Found</h2>
      }
   
    return(
     <ul className="expenses-list">
      {
          props.item.map(
          (data)=> (<ExpenseItem 
          key={data.id}
          title={data.title} 
          amount={data.amount} 
          date={data.date}/>))
      }
     </ul>
      );

}
export default ExpenseContent;