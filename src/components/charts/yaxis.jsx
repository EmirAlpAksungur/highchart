import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react'
require("highcharts/modules/accessibility")(Highcharts);
const yaxis = () => {
    const options = {
        chart: {
            marginTop: 5
        },
        title: {
            text: 'Flats sold per month'
        },
    
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
    
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Flats'
            }
        },
    
        series: [{
            data: [1, 3, 5, 2, 3, 9, 6, 7, 3, 5, 4, 3]
        }]
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default yaxis