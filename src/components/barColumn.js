import React, { Component } from "react";
import echarts from "echarts";
export default class BarColumn extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.barBalance();
  }
  barBalance() {
    let edubalance = echarts.init(document.getElementById("edubalance"));
    let optionEdubalance = {
      // tooltip: {
      //   trigger: "axis",
      //   formatter:
      //     "{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}"
      // },
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
        data: ["test1", "test2", "test3", "test4", "test5"],
        right: "15%",
        textStyle: {
          color: "#fff"
        },
        show: false
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
          data: ["", "", "", ""],
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
          max: 100,
          interval: 20,
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
          name: "test1",
          type: "bar",
          data: [14, 17, 21, 25],
          itemStyle: {
            normal: {
              color: "#76da91"
            },
            label: {
              show: true,
              position: "top",
              formatter: "{c}"
            }
          }
        },
        {
          name: "test2",
          type: "bar",
          data: [12, 18, 23, 26],
          itemStyle: {
            normal: {
              color: "#f8cb7f"
            },
            label: {
              show: true,
              position: "top",
              formatter: "{c}"
            }
          }
        },
        {
          name: "test3",
          type: "bar",
          data: [11, 14, 17, 25],
          itemStyle: {
            normal: {
              color: "#f89588"
            },
            label: {
              show: true,
              position: "top",
              formatter: "{c}"
            }
          }
        },
        // {
        //   name: "test4",
        //   type: "bar",
        //   data: [2, 4, 7, 3],
        //   itemStyle: {
        //     normal: {
        //       color: "#7cd6cf"
        //     },
        //     label: {
        //       show: true,
        //       position: "top",
        //       formatter: "{c}"
        //     }
        //   }
        // },
        {
          name: "test5",
          type: "line",
          yAxisIndex: 1,
          lineStyle: {
            normal: {
              color: "#c39705"
            }
          },
          data: [30, 40, 90, 75]
        }
      ]
    };
    edubalance.setOption(optionEdubalance);
  }
  render() {
    return (
      <div className="border-container">
        <div className="name-title">高血压风险和代谢水平</div>
        <div id="edubalance" />
        <span className="top-left border-span" />
        <span className="top-right border-span" />
        <span className="bottom-left border-span" />
        <span className="bottom-right border-span" />
      </div>
    );
  }
}
