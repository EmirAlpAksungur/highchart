import axios from 'axios';
import React, { useState,useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import series from './series';

const SplineChartAxios = () => {
    const [options, setOptions] = useState({
        chart:{
            type:"spline"
        },
        credits: { 
            text: 'data',
            href: 'https://api.worldbank.org/v2/countries/NOR/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json' ,
        },
        subtitle:{
            text:"Source: World Bank Data"
        },
        series: [{
            name: ["sad"],
            data: [] 
        }],
        title: {
            text: "GDP growth (annual%)"
        },
        xAxis:{
            categories: []
        }
    });
  
    useEffect(() => {
        async function fetchData(){
            await axios("https://api.worldbank.org/v2/countries/NOR/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json")
                .then((data)=>{
                    data.data[1].slice(0).reverse().map((e)=>{
                        options.series[0].data.push(e.value)
                        options.xAxis.categories.push(e.date)
                    })
                    options.series[0].name = data.data[1][0].country.value;
                    setOptions({...options})
                });    
        }
        fetchData()
    }, []);
  
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  };

export default SplineChartAxios