import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react'

const subtitle = () => {
    const options = {
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        subtitle: {
            text: '* Footnote aligned right',
            align: 'right',
            x: -10
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default subtitle