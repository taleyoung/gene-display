import React, { Component } from "react";
import echarts from "echarts";
export default class BarRow extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.barJunior();
  }
  barJunior() {
    var juniorservice = echarts.init(document.getElementById("juniorservice"));
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      color: ["#D37438", "#4C93D6"],
      legend: {
        right: "0",
        data: ["血液分析报告"],
        textStyle: {
          color: "#00ffff"
        }
      },
      grid: {
        left: "8%",
        right: "4%",
        bottom: "3%",
        top: "10%",
        containLabel: true
      },
      xAxis: {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            color: "#1e2b43"
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
      dataZoom: [
        {
          type: "slider",
          yAxisIndex: 0,
          filterMode: "empty",
          start: 0,
          x: "0",
          end: 60,
          handleStyle: {
            color: "#519cff",
            backgroundColor: "#519cff"
          },
          textStyle: {
            color: "#fff"
          },
          borderColor: "#519cff"
        }
      ],
      yAxis: {
        type: "category",
        data: [
          "尿素氮",
          "肌队电解质",
          "血脂",
          "血糖",
          "血尿酸",
          "血粘度",
          "钠离子",
          "钾离子"
        ],
        splitLine: {
          show: false,
          lineStyle: {
            color: "#1e2b43"
          }
        },

        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#115372"
          }
        },
        axisLabel: {
          textStyle: {
            color: "#419aff"
          },
          lineStyle: {
            color: "#519cff"
          },
          alignWithLabel: true,
          interval: 0
        }
      },
      series: [
        {
          name: "血液分析",
          type: "bar",
          stack: "比例",
          label: {
            normal: {
              show: true,
              position: "insideRight",
              textStyle: {
                color: "#333"
              }
            }
          },
          data: [53, 76, 86, 74, 56, 77, 97, 84]
        }
        // {
        //   name: "test2",
        //   type: "bar",
        //   stack: "比例",
        //   label: {
        //     normal: {
        //       show: true,
        //       position: "right",
        //       textStyle: {
        //         color: "#00f0ff"
        //       }
        //     }
        //   },
        //   data: [
        //     120,
        //     132,
        //     101,
        //     134,
        //     90,
        //     230,
        //     210,
        //     120,
        //     132,
        //     101,
        //     134,
        //     90,
        //     230,
        //     243
        //   ]
        // }
      ]
    };
    juniorservice.setOption(option);
  }
  render() {
    return (
      <div className="border-container">
        <div className="name-title">血液分析报告</div>
        <div id="juniorservice" />
        <span className="top-left border-span" />
        <span className="top-right border-span" />
        <span className="bottom-left border-span" />
        <span className="bottom-right border-span" />
      </div>
    );
  }
}
