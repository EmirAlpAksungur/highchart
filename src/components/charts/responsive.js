import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react'

const responsive = () => {
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Highcharts responsive chart'
        },
        subtitle: {
            text: 'Resize the frame to see subtitle and legend hide'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Bananas']
        },
        yAxis: {
            title: {
                text: 'Amount'
            }
        },
        series: [{
            name: 'Fruits',
            data: [1, 4, 3]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                        className: 'small-chart'
                    }
                }
            }]
        }
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default responsive