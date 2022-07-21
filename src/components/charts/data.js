import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react'

require("highcharts/modules/data")(Highcharts);

const data = () => {
    const options = {
        data: {
            table: 'datatable',
             /* startRow: 2,
             endRow: 3,*/
            /*csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
            beforeParse: function (csv) {
                return csv.replace(/\n\n/g, '\n');*/
            /*csvURL: 'https://demo-live-data.highcharts.com/vs-load.csv',
            enablePolling: true,
            dataRefreshRate: 1
            */
           
           
        },
        chart: {
            //type: 'line'
            type: 'column'
        },
        title: {
            text: 'Data extracted from a HTML table in the page'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Units'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        }
    };
    return (
        
        <div>
            
             <table id="datatable">
        <thead>
            <tr>
                <th></th>
                <th>Jane</th>
                <th>John</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Apples</th>
                <td>3</td>
                <td>4</td>
            </tr>
            <tr>
                <th>Pears</th>
                <td>2</td>
                <td>0</td>
            </tr>
            <tr>
                <th>Plums</th>
                <td>5</td>
                <td>11</td>
            </tr>
            <tr>
                <th>Bananas</th>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <th>Oranges</th>
                <td>2</td>
                <td>4</td>
            </tr>
        </tbody>
    </table>
            <HighchartsReact highcharts={Highcharts}  options={options} />
        </div>
    )
}

export default data