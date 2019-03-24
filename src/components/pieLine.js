import React, { Component } from "react";
import echarts from "echarts";
export default class PieLine extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.pieCourserate();
    this.pieProfessionrate();
    this.lineChange();
  }

  pieProfessionrate() {
    let professionrate = echarts.init(
      document.getElementById("professionrate")
    );
    let optionProfessionrate = {
      tooltip: {
        // trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        right: "0",
        y: "middle",
        textStyle: {
          color: "#fff"
        },
        data: ["I型高血压", "II型高血压", "III型高血压"]
        // formatter: function(name) {
        //   var oa = optionProfessionrate.series[0].data;
        //   var num = oa[0].value + oa[1].value + oa[2].value;
        //   for (var i = 0; i < optionProfessionrate.series[0].data.length; i++) {
        //     if (name == oa[i].name) {
        //       return name + " " + oa[i].value;
        //     }
        //   }
        // }
      },
      series: [
        {
          name: "FK",
          type: "pie",
          radius: "60%",
          center: ["35%", "50%"],
          data: [
            { value: 329, name: "I型高血压" },
            { value: 472, name: "II型高血压" },
            { value: 234, name: "III型高血压" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                formatter: "  {b}"
              }
            },
            labelLine: { show: true }
          }
        }
      ]
    };
    professionrate.setOption(optionProfessionrate);
  }
  lineChange() {
    let changedetail = echarts.init(document.getElementById("changedetail"));
    let optionChange = {
      tooltip: {
        trigger: "axis",
        formatter: "{b}</br>{a}: {c}</br>{a1}: {c1}"
      },
      toolbox: {
        show: false,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ["患病风险", "代谢水平"],
        textStyle: {
          color: "#fff"
        },
        show: true
      },
      grid: {
        top: "18%",
        right: "5%",
        bottom: "8%",
        left: "5%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: ["0岁", "30岁", "60岁", "90岁", "100岁"],
          splitLine: {
            show: false,
            lineStyle: {
              color: "#3c4452"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            },
            lineStyle: {
              color: "#519cff"
            },
            alignWithLabel: true,
            interval: 0
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "",
          nameTextStyle: {
            color: "#fff"
          },
          interval: 5,
          max: 50,
          min: 0,
          splitLine: {
            show: true,
            lineStyle: {
              color: "#23303f"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#115372"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            },
            alignWithLabel: true,
            interval: 0
          }
        },
        {
          min: 0,
          max: 2.5,
          interval: 0.5,
          type: "value",
          name: "",
          nameTextStyle: {
            color: "#fff"
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#23303f"
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#115372"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            },
            alignWithLabel: true,
            interval: 0
          }
        }
      ],
      color: "yellow",
      series: [
        {
          name: "患病风险",
          type: "bar",
          data: [12, 16, 20, 21, 25],
          boundaryGap: "45%",
          barWidth: "40%",

          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = [
                  "#6bc0fb",
                  "#7fec9d",
                  "#fedd8b",
                  "#ffa597",
                  "#84e4dd"
                ];
                return colorList[params.dataIndex];
              },
              label: {
                show: true,
                position: "top",
                formatter: "{c}"
              }
            }
          }
        },

        {
          name: "代谢水平",
          type: "line",
          yAxisIndex: 1,
          lineStyle: {
            normal: {
              color: "#c39705"
            }
          },
          data: [0.5, 1.8, 2.1, 1.7, 1.2]
        }
      ]
    };
    changedetail.setOption(optionChange);
  }
  render() {
    return (
      <div className="border-container">
        <div className="name-title">高血压患病风险</div>
        <div id="professionrate" />

        <div className="name-title">个体代谢水平与患病风险分析报告</div>
        <div id="changedetail" />
        <span className="top-left border-span" />
        <span className="top-right border-span" />
        <span className="bottom-left border-span" />
        <span className="bottom-right border-span" />
      </div>
    );
  }
}
