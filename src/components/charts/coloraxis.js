import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react'

require("highcharts/modules/accessibility")(Highcharts);

const coloraxis = () => {
    const options = {
        title: {
            text: 'Column chart with color axis'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
        },
        colorAxis: {
            min: 0,
            max: 30
        },
        series: [{
            type: 'column',
            colorKey: 'colorValue',
            name: 'Jane',
            data: [{
                y: 3,
                colorValue: 3
            }, {
                y: 2,
                colorValue: 15
            }, {
                y: 1,
                colorValue: 10
            }, {
                y: 3,
                colorValue: 0
            }, {
                y: 4,
                colorValue: 24
            }]
        }, {
            type: 'column',
            colorKey: 'colorValue',
            name: 'John',
            data: [{
                y: 2,
                colorValue: 11
            }, {
                y: 3,
                colorValue: 29
            }, {
                y: 5,
                colorValue: 16
            }, {
                y: 7,
                colorValue: 23
            }, {
                y: 6,
                colorValue: 5
            }]
        }]
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default coloraxis