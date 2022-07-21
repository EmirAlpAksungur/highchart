import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react'

const splinechart = () => {
    const options = {
        chart: {
            //zoomType: 'x',zoom in x-axis 
            //zoomType: 'y', zoom in y-axis  
            zoomType: 'xy',//zoom
            type: 'spline'
        },
        title: {
            text: 'Spline Chart'
        },
        accessibility: {
            enabled: true//
        },
        series: [
            {
                data: [1, 2, 1, 4, 3, 6, 2, 1, 4, 3, 6]
            }
        ]
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default splinechart