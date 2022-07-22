import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

require("highcharts/modules/accessibility")(Highcharts);

class LineChart extends Component {
    constructor(props) {
      super(props);
      var colors = Highcharts.getOptions().colors;
  
      this.state = {
        chartOptions: {
          chart: {
            //zoomType: 'x',zoom in x-axis 
            //zoomType: 'y', zoom in y-axis  
            //zoomType: 'xy',zoom
            type: "spline"// makes our chart a line chart
          },
          credits: { 
            //enabled: false  Highchart by default puts a credits label in the lower right corner of the chart. This can be changed using these options.
            text: 'github.com',
            href: 'http://www.github.com' ,
            position: {
              align: 'left',
              x: 15
          }
          },
          legend: {
            symbolWidth: 40 //Specifies the size of the defined symbols
          },
  
          title: {
            text: "Most common desktop screen readers" //main titele
          },
  
          subtitle: {
            text:
              "Source: WebAIM. Click on points to visit official screen reader website"// subtitele
          },
  
          yAxis: {
            title: {
              text: "Percentage usage" //y axis title
            },

          },
  
          xAxis: {
            title: {
              text: "Time"//x axis title
            },
            accessibility: { // look again
              description: "Time from December 2010 to September 2019"
            },
            categories: [//Determines the categories on the x-axis
              "December 2010",
              "May 2012",
              "January 2014",
              "July 2015",
              "October 2017",
              "September 2019"
            ]
          },
  
          tooltip: {
            valueSuffix: "%"//Specifies the type of y axis value in the tooltip that appears when the chart is hovered. exp. cm,kg,%,$
          },
  
          plotOptions: {
            series: {
              point: {
                events: {
                  click: function(e) {
                    console.log(e);//Returns information about the clicked point
                    window.location.href = this.series.options.website; //When the lines on the graph are clicked, it directs us to the link.
                  }
                }
              },
              cursor: "pointer"
            }
          },
  
          series: [//our data
            {
              name: "NVDA",
              data: [34.8, 43.0, 51.2, 41.4, 64.9, 72.4],
              website: "https://www.nvaccess.org",
              color: colors[2],
              accessibility: {
                description: "This is the most used screen reader in 2019"
              }
            },
            {
              name: "JAWS",
              data: [69.6, 63.7, 63.9, 43.7, 66.0, 61.7],
              website:
                "https://www.freedomscientific.com/Products/Blindness/JAWS",
              dashStyle: "ShortDashDot",
              color: colors[0]
            },
            {
              name: "VoiceOver",
              data: [20.2, 30.7, 36.8, 30.9, 39.6, 47.1],
              website: "http://www.apple.com/accessibility/osx/voiceover",
              dashStyle: "ShortDot",
              color: colors[1]
            },
            {
              name: "Narrator",
              data: [null, null, null, null, 21.4, 30.3],
              website:
                "https://support.microsoft.com/en-us/help/22798/windows-10-complete-guide-to-narrator",
              dashStyle: "Dash",
              color: colors[9]
            },
            {
              name: "ZoomText/Fusion",
              data: [6.1, 6.8, 5.3, 27.5, 6.0, 5.5],
              website:
                "http://www.zoomtext.com/products/zoomtext-magnifierreader",
              dashStyle: "ShortDot",
              color: colors[5]
            },
            {
              name: "Other",
              data: [42.6, 51.5, 54.2, 45.8, 20.2, 15.4],
              website:
                "http://www.disabled-world.com/assistivedevices/computer/screen-readers.php",
              dashStyle: "ShortDash",
              color: colors[3]
            }
          ],
  
          responsive: {
            rules: [
              {
                condition: {
                  maxWidth: 550
                },
                chartOptions: {
                  legend: {
                    itemWidth: 150
                  },
                  xAxis: {
                    categories: [
                      "Dec. 2010",
                      "May 2012",
                      "Jan. 2014",
                      "July 2015",
                      "Oct. 2017",
                      "Sep. 2019",
                    ]
                  },
                  yAxis: {
                    title: {
                      enabled: false
                    },
                    labels: {
                      format: "{value}%"
                    }
                  }
                }
              }
            ]
          }
        }
      };
    }
  
    render() {
      const { chartOptions } = this.state;
  
      return (
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      );
    }
  }

  export default LineChart;
