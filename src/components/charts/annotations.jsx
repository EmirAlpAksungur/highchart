import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react'

require("highcharts/modules/annotations")(Highcharts);

const annotations = () => {
    const options = {
        title: {
            text: 'Highcharts Annotations - defer options'
        },
    
        plotOptions: {
            series: {
                animation: { //animation draw speed
                    duration: 2000
                }
            }
        },
    
        series: [{
            keys:['y','id'],
            data: [[29.9,'min'], [71.5,'1'], [106.4, '2'], 129.2, 144.0, 176.0, 135.6, 148.5, {
                y: 216.4,
                id: 'max'
            }, 194.1, 95.6, 54.4]
        }],
    
        annotations: [{
            //undefined - delayed value is inherited from plotOptions
            labels: [{
                point: 'max',
                text: 'Max'
            }]
        }, 
        {
            labels: [{
                point: "1",
                text: 'point 1'
            }]
        },
        {
            animation: {
                defer: 0
            },
            labels: [{
                point: 'min',
                text: 'Min'
            }]
        }, {
            animation: {
                defer: 1000
            },
            shapes: [{
                type: 'circle',
                point: {
                    x: 50,
                    y: 50
                },
                r: 10
            }]
        }]
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default annotations