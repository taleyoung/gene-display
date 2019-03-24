import React, { Component } from "react";
import Login from "./login/login";
import Main from "./main/main";
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      logined: false
    };
  }
  changeLogin = logined => {
    this.setState({
      logined
    });
  };
  render() {
    const { logined } = this.state;
    return (
      <div>
        {logined ? (
          <Main islogined={this.changeLogin} />
        ) : (
          <Login islogined={this.changeLogin} />
        )}
      </div>
    );
  }
}
