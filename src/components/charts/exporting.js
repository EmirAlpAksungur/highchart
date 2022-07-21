import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react'

require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/accessibility")(Highcharts);

const exporting = () => {
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Data labels only visible on export'
        },
    
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
    
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }],
    
        exporting: {
            chartOptions: {
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                }
            }
        }
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default exporting