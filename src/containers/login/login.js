import React, { Component } from "react";
import { Upload, Icon, message, Button, Steps } from "antd";
import "./login.scss";

export default class Login extends Component {
  constructor() {
    super();
  }
  myscroll = anchorId => {
    if (anchorId) {
      // 找到锚点 id
      let anchorElement = document.getElementById(anchorId);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };
  handleLogin = () => {
    this.props.islogined(true);
  };
  handleChange = info => {
    const status = info.file.status;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} 文件上传成功`);
      this.handleLogin();
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  render() {
    const Dragger = Upload.Dragger;
    const Step = Steps.Step;
    return (
      <div className="login" id="login">
        <div className="bg">
          <div className="content">
            <h1 className="title">高血压基因诊断系统</h1>
            <h5 className="detail">
              为病人提供更加精准的病症确诊，并为病患制定个性化的治疗方案，实现精准医疗个体化、专一化
            </h5>
            <div className="mybutton">
              <Button
                type="primary"
                id="button"
                onClick={this.myscroll.bind(this, "brief")}
                shape="round"
                size="large">
                继续了解
              </Button>
            </div>
          </div>
        </div>
        <h2 className="sys-brief" id="brief">
          <Icon type="message" theme="twoTone" style={{ fontSize: "30px" }} />
          &nbsp;基因诊断系统简介
        </h2>
        <div className="card-wrap">
          <div className="card">
            <div className="title">
              <Icon type="book" theme="twoTone" style={{ fontSize: "24px" }} />
              研究意义
            </div>
            <div className="card-content">
              &nbsp;&nbsp;&nbsp;&nbsp;以基因检测为出发点，对现有的高血压诊断与治疗的方法进行了深入的调查与分析。据分析结果得出，通过大数据及团队自主研发的深度学习算法，可以有效通过患者的基因数据，预测及分析该患者的高血压风险及类型，实时量化动态参数，为患者个性化定制医疗方案，力求计算机科学在医疗领域的创新应用，也与国家政策相契合。
            </div>
          </div>
          <div className="card">
            <div className="title">
              <Icon type="alert" theme="twoTone" style={{ fontSize: "24px" }} />
              设计理念
            </div>
            <div className="card-content">
              &nbsp;&nbsp;&nbsp;&nbsp;基于基因检测与深度学习算法，设计了高血压诊断系统。该系统主要用于存储高血压
              患者的基因序列数据，以及通过特征选择技术对各种数据进行筛选、分析，从高血压患者数据集选出特征子集，学习训练出一个高血压辅助诊断模型，用于对高血压患者进行诊断预测，以供医护人员进行参考和诊断，该系统在高血压的定制化治疗解决方案设计、高血压潜在患病风险预防中有较为出色的表现。
            </div>
          </div>
          <div className="card">
            <div className="title">
              <Icon
                type="thunderbolt"
                theme="twoTone"
                style={{ fontSize: "24px" }}
              />
              主要功能
            </div>
            <div className="card-content">
              &nbsp;&nbsp;&nbsp;&nbsp;借助数学和信息技术实现对疾病早发现早治疗的功能，通过对医学知识进行量化处理，对疾病的临床数据进行诊断分析，CADS在提高诊断准确率、减少漏诊、提供客观的诊断决策等方面发挥了巨大作用；深度学习（Deep
              Learning）是由多个处理层构成的计算模型，可以通过多层的抽象来学习数据的特征。在语音识别、视觉识别、目标检测和其他如药物鉴定，基因检测等领域，深度学习被广泛应用。
            </div>
          </div>
        </div>
        <div className="step" id="step">
          {/* <Divider /> */}
          <Steps current={-1}>
            <Step
              title="提交基因数据"
              description="选择已得到的基因标准格式数据"
            />
            <Step
              title="基因检测算法分析"
              description="系统开始对算法进行分类及运行分析"
            />
            <Step title="展示分析报告" description="得到分析报告并可视化展示" />
          </Steps>
        </div>
        <div className="upload-wrap">
          <div className="card-intro">
            <h3 className="title">提交基因数据，进行检测</h3>
            <Button
              type="primary"
              id="button"
              onClick={this.handleLogin}
              shape="round"
              size="default">
              查看分析报告样例
            </Button>
            <h5 className="detail">
              系统主要用于通过特征选择技术对各种数据进行筛选、分析，学习训练出一个高血压辅助诊断模型，将基因检测、诊断预测、用药指导、定制化医疗辅助等多个功能集合于一体，借助本平台，医生可以为患者提供更加精准的治疗解决方案，降低高血压用药可能带来的不良反应风险。
            </h5>
          </div>
          <div className="right-arrow">
            <Icon
              type="right-circle"
              theme="twoTone"
              style={{ fontSize: "80px" }}
            />
          </div>
          <div className="upload" id="upload">
            <Dragger
              name="file"
              multiple="true"
              action="//jsonplaceholder.typicode.com/posts/"
              onChange={this.handleChange.bind(this)}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">点击上传基因数据进行检测</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </div>
        </div>
        <div className="blank" />
        <div className="footer">
          <div>© Designed By 本团队. All rights reserved.</div>
        </div>
      </div>
    );
  }
}
