import React from "react";
import './chart.css';
import chartBar from './chartBar';
function chart(props)
{
    const datapointvalue=props.datapoints.map(datapoint=>datapoint.val);
    const totalMaximum=Math.round(...datapointvalue);
    return (<div>

            {
                props.datapoints.map(datapoint=>
                <chartBar key={datapoint.label} value={datapoint.val} maxValue={totalMaximum} label={datapoint.label}/>)
            }

        </div>);
}
export default chart;