import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react'

require("highcharts/modules/boost")(Highcharts);

const boost = () => {
    var n = 500000
    var arr = [],
        i,
        a,
        b,
        c,
        spike;
    for (i = 0; i < n; i = i + 1) {
        if (i % 100 === 0) {
            a = 2 * Math.random();
        }
        if (i % 1000 === 0) {
            b = 2 * Math.random();
        }
        if (i % 10000 === 0) {
            c = 2 * Math.random();
        }
        if (i % 50000 === 0) {
            spike = 10;
        } else {
            spike = 0;
        }
        arr.push([
            i,
            2 * Math.sin(i / 100) + a + b + c + spike + Math.random()
        ]);
    }
    

    const options = {
        chart: {
            zoomType: 'x',
            panning: true,
            panKey: 'shift'
        },
    
        boost: {
            useGPUTranslations: true
        },
    
        title: {
            text: 'Highcharts drawing ' + n + ' points'
        },
    
        subtitle: {
            text: 'Using the Boost module'
        },
    
        tooltip: {
            valueDecimals: 2
        },
    
        series: [{
            data: arr,
            lineWidth: 0.5
        }]
    
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default boost