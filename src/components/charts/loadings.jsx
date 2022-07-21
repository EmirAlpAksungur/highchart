import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useState } from 'react';

const Loading = () => {
    const [isLoading,setIsLoading] = useState(false);
    const options = {
        loading: {
            hideDuration: 1000,
            showDuration: 1000
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
            <button onClick={()=>{
                options.showLoading();
                setIsLoading(!isLoading)
            }}>Toggle Loading</button>
        </div>
    )
}

export default Loading