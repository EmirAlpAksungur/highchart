import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useState } from 'react';

require("highcharts/modules/no-data-to-display")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
const Nodata = () => {
    const [data,setData] = useState([]);
    const options = {
        title: {
            text: 'No data in line chart - with custom options'
        },
        series: [{
            type: 'line',
            name: 'Random data',
            data: data
        }],
        lang: {
            noData: "Nothing to show"
        },
        noData: {
            style: {
                fontWeight: 'bold',
                fontSize: '15px',
                color: '#303030'
            }
        }
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts}  options={options} />
            <div>
                <button onClick={()=>{
                    setData([...data,Math.floor(Math.random() * 10 + 1)])
                }}>Add Data</button>
                <button onClick={()=>{
                     if (!(data === [])) {
                        data.pop()
                        setData([...data])
                    }
                }}>Remove Data</button>
            </div>
        </div>
    )
}

export default Nodata