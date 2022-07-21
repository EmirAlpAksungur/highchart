import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react'

const time = () => {
    const options = {
        title: {
            text: 'Berlin time'
        },
    
        time: {
            timezone: 'Europe/Berlin'
        },
        xAxis: {
            type: 'datetime'
        },
    
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            pointStart: Date.UTC(2017, 0, 1),
            pointInterval: 36e5
        }]
    
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default time