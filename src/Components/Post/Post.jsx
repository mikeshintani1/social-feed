import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const PostTracker = (props) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        let tempChartData = props.parentPost.map(entry => {
            return [entry.name, entry.post];
        });
        setChartData(tempChartData);
    }, [props.parentPost])

    return (

    
        <Chart 
        chartType = "LineChart"
        data={[["Name", "Post"], ...chartData]}
        width="100%"
        height="400px"
        options={{legend: {position: 'bottom'}}}
        legendToggle
        />
    );
}
 
export default PostTracker;