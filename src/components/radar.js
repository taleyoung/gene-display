import React, { Component } from "react";
import echarts from "echarts";
export default class Radar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let radar = echarts.init(document.getElementById("radar"));
    let optionRadar = {
      title: {
        text: ""
      },
      tooltip: {},
      legend: {
        data: ["儿童", "青年", "老年"],
        x: "center",
        y: "bottom",
        textStyle: {
          color: "#fff"
        }
      },
      color: ["#4c95d9", "#f6731b", "#8cd43f"],
      radar: {
        name: {
          textStyle: {
            //设置颜色
            color: "#fff"
          }
        },
        indicator: [
          { name: "高血压患病风险", max: 6500 },
          { name: "Na元素通道耐受度", max: 16000 },
          { name: "Ca元素通道耐受度", max: 30000 },
          { name: "RASI拮抗剂耐受度", max: 38000 },
          { name: "α,β受体加权含量", max: 52000 },
          { name: "代谢水平", max: 25000 }
        ],
        center: ["50%", "50%"],
        radius: "58%"
      },
      series: [
        {
          name: "",
          type: "radar",
          itemStyle: {
            normal: {
              splitLine: {
                lineStyle: {}
              },
              label: {
                show: false,
                textStyle: {},
                formatter: function(params) {
                  return params.value;
                }
              }
            }
          },
          data: [
            {
              value: [2400, 10000, 28000, 35000, 50000, 19000],
              name: "儿童"
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: "青年"
            },
            {
              value: [6000, 14000, 18000, 21000, 32000, 11000],
              name: "老年"
            }
          ]
        }
      ]
    };
    radar.setOption(optionRadar);
  }
  render() {
    return (
      <div className="border-container">
        <div>
          <div className="name-title">数据独立变量分析</div>
          <div id="radar" />
        </div>
        <span className="top-left border-span" />
        <span className="top-right border-span" />
        <span className="bottom-left border-span" />
        <span className="bottom-right border-span" />
      </div>
    );
  }
}
