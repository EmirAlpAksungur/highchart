import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';

const options = {
    title: {
      text: 'Stock Chart'
    },
    accessibility: {
        enabled: false
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
      }
    ]
  };

const stockChart = () => {
    return (
        <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
        />
    )
}


export default stockChart