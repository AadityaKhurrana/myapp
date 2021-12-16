import React from "react";
import chart from "./chart/chart";


function Expensechart(props)
{
    const ExpenseData=
    [
        {label:'jan' , val:0},
        {label:'feb' , val:0},
        {label:'mar' , val:0},
        {label:'apl' , val:0},
        {label:'may' , val:0},
        {label:'jun' , val:0},
        {label:'jul' , val:0},
        {label:'aug' , val:0},
        {label:'sep' , val:0},
        {label:'oct' , val:0},
        {label:'nov' , val:0},
        {label:'dec' , val:0}
    ];

    for(const expense of props.expenses)
    {
        const expenseMonth=expense.date.getMonth();
        ExpenseData[expenseMonth].val += expense.amount;
    }

    return <chart datapoints={ExpenseData} />
}
export default Expensechart;