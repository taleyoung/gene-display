import React, { Component } from "react";
import echarts from "echarts";
export default class Graduateyear extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.lineGraduateyear();
    this.pieSexrate();
    this.pieHouserate();
  }
  lineGraduateyear() {
    let graduateyear = echarts.init(document.getElementById("graduateyear"));
    let optionGraduateyear = {
      title: {
        text: "",
        x: "center",
        y: "top",
        textStyle: {
          color: "#fff",
          fontSize: 13
        }
      },
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "3%",
        right: "8%",
        bottom: "5%",
        top: "13%",
        containLabel: true
      },
      color: ["#72b332", "#35a9e0"],
      legend: {
        data: ["test1", "test2"],
        show: true,

        right: "15%",
        y: "0",
        textStyle: {
          color: "#999",
          fontSize: "13"
        }
      },
      toolbox: {
        show: false,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["0:00", "2:00", "4:00", "6:00", "8:00", "10:00", "12:00"],
          splitLine: {
            show: true,
            lineStyle: {
              color: "#2d3b53"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            },
            alignWithLabel: true,
            interval: 0,
            rotate: "15"
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: "#2d3b53"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#999"
            }
          }
        }
      ],
      series: [
        {
          name: "日间",
          type: "line",
          smooth: true,
          symbol: "roundRect",
          data: [131, 120, 102, 152, 110, 102, 128]
        },
        {
          name: "夜间",
          type: "line",
          smooth: true,
          symbol: "roundRect",
          data: [90, 101, 95, 123, 112, 121, 116]
        }
      ]
    };
    graduateyear.setOption(optionGraduateyear);
  }

  pieSexrate() {
    //饼图一
    let sexrate = echarts.init(document.getElementById("sexrate"));
    let totalSexrate = {
      name: "Ca拮抗剂"
    };
    let optionSexrate = {
      title: [
        {
          text: totalSexrate.name,
          left: "48%",
          top: "34%",
          textAlign: "center",
          textBaseline: "middle",
          textStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 14
          }
        },
        {
          text: totalSexrate.value,
          left: "48%",
          top: "44%",
          textAlign: "center",
          textBaseline: "middle",
          textStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 14
          }
        }
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      color: ["#70a3ff", "#ff7f4e"],
      legend: {
        orient: "vertical",
        x: "center",
        bottom: "5%",
        selectedMode: false,
        // formatter: function(name) {
        //   var oa = optionSexrate.series[0].data;
        //   var num = oa[0].value + oa[1].value;
        //   for (var i = 0; i < optionSexrate.series[0].data.length; i++) {
        //     if (name == oa[i].name) {
        //       return (
        //         name +
        //         "  " +
        //         oa[i].value +
        //         "  " +
        //         ((oa[i].value / num) * 100).toFixed(2) +
        //         "%"
        //       );
        //     }
        //   }
        // },
        data: ["Ca拮抗剂依赖性概率", "Ca拮抗剂无依赖性概率"],
        show: true,
        textStyle: {
          color: "#fff",
          fontWeight: "bold"
        }
      },

      series: [
        {
          name: "PK",
          type: "pie",
          selectedMode: "single",
          radius: ["45%", "55%"],
          center: ["50%", "40%"],
          data: [
            { value: 629, name: "Ca拮抗剂依赖性概率" },
            { value: 2507, name: "Ca拮抗剂无依赖性概率" }
          ],
          label: {
            normal: {
              show: false,
              position: "outer",
              align: "left",
              textStyle: {
                rotate: true
              }
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },
            normal: {
              label: {
                show: true,
                formatter: "{b} {c}"
              }
            }
          }
        }
      ]
    };
    sexrate.setOption(optionSexrate);
  }
  pieHouserate() {
    //饼图二
    let householdrate = echarts.init(document.getElementById("householdrate"));
    let totalHouseholdrate = {
      name: "RASI"
    };
    let optionHouseholdrate = {
      title: [
        {
          text: totalHouseholdrate.name,
          left: "48%",
          top: "34%",
          textAlign: "center",
          textBaseline: "middle",
          textStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 18
          }
        },
        {
          text: totalHouseholdrate.value,
          left: "48%",
          top: "44%",
          textAlign: "center",
          textBaseline: "middle",
          textStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 18
          }
        }
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      color: ["#4f9de7", "#4acf79"],
      legend: {
        orient: "vertical",
        x: "center",
        bottom: "5%",
        selectedMode: false,
        // formatter: function(name) {
        //   var oa = optionHouseholdrate.series[0].data;
        //   var num = oa[0].value + oa[1].value;
        //   for (var i = 0; i < optionHouseholdrate.series[0].data.length; i++) {
        //     if (name == oa[i].name) {
        //       return (
        //         name +
        //         "  " +
        //         oa[i].value +
        //         "  " +
        //         ((oa[i].value / num) * 100).toFixed(2) +
        //         "%"
        //       );
        //     }
        //   }
        // },
        data: ["RASI依赖性概率", "RASI无依赖性概率"],
        show: true,
        textStyle: {
          color: "#fff",
          fontWeight: "bold"
        }
      },
      series: [
        {
          name: "FK",
          type: "pie",
          selectedMode: "single",
          radius: ["45%", "55%"],
          center: ["50%", "40%"],
          data: [
            { value: 1820, name: "RASI依赖性概率" },
            { value: 2507, name: "RASI无依赖性概率" }
          ],
          label: {
            normal: {
              show: false,
              position: "outer",
              align: "left",
              textStyle: {
                rotate: true
              }
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },
            normal: {
              label: {
                show: true,
                formatter: "{b} {c}"
              }
            }
          }
        }
      ]
    };
    householdrate.setOption(optionHouseholdrate);
  }
  render() {
    return (
      <div className="border-container">
        <div className="name-title">日常血压预测分析</div>
        <div id="graduateyear" />
        <ul className="three-pie clearfix">
          <li>
            <div id="sexrate" />
          </li>
          <li>
            <div id="householdrate" />
          </li>
        </ul>
        <span className="top-left border-span" />
        <span className="top-right border-span" />
        <span className="bottom-left border-span" />
        <span className="bottom-right border-span" />
      </div>
    );
  }
}
