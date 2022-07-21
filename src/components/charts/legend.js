import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

require("highcharts/modules/accessibility")(Highcharts);
const legend = () => {
    const options = {
       
    chart: {
        marginRight: 120
    },

    legend: {
        rtl: true, // pulls the symbol to the right
        align: 'right',
        backgroundColor: '#FCFFC5',
        borderColor: '#C98657',
        borderRadius: 5,
        borderWidth: 1,
        padding: 7,
        itemStyle: {
            color: 'darkblue',
            fontWeight: 'bold'
        },
        itemHoverStyle: {
            color: '#FF0000'
        },
        layout: 'vertical',
        verticalAlign: 'top',
        x: 0,
        y: 100,
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [
        {data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]},
        {data: [148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]},
        {data: [29.9, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 71.5, 106.4, 194.1, 95.6, 54.4]}
        
    ]
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default legend