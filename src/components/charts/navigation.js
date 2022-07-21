import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react'

require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/annotations")(Highcharts);

const navigation = () => {

    const options = {
        navigation: {
            // Informs chart about the HTML elements responsible for adding annotations etc.
            bindingsClassName: 'tools-container'
        },
        series: [{
            data: [2, 5, 1, 6, 7, 8, 5]
        }]
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default navigation