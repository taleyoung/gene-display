import React from "react";
import echarts from "echarts";
import "./main.scss";
import Radar from "../../components/radar";
import Graduateyear from "../../components/graduateyear";
import PieLine from "../../components/pieLine";
import Table from "../../components/table";
import BarRow from "../../components/barRow";
import BarColumn from "../../components/barColumn";
import Login from "../login/login";
export default class Main extends React.Component {
  componentDidMount() {
    this.myscroll("header");
  }
  handleBack = () => {
    this.props.islogined(false);
  };
  myscroll = anchorId => {
    if (anchorId) {
      let anchorElement = document.getElementById(anchorId);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };
  render() {
    return (
      <div className="show">
        <div className="header" id="header">
          <a href="javascript:;" className="a-access">
            <button className="button type1" onClick={this.handleBack}>
              返回
            </button>
          </a>
          已为您生成基因检测报告
        </div>
        <div className="row-wrap1">
          <div className="radar perwrap">
            <Radar />
          </div>
          <div className="mytable perwrap">
            <Table />
          </div>
        </div>
        <div className="row-wrap2">
          <div className="gradu perwrap">
            <Graduateyear />
          </div>
          <div className="pieline perwrap">
            <PieLine />
          </div>
          <div className="column-wrap1 mybar">
            <div className="barrow perwrap">
              <BarRow />
            </div>
            <div className="barcolumn perwrap">
              <BarColumn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
