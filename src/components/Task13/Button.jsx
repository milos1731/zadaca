import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { color, size, primary } = this.props;

    return <button className={`btn ${color} ${size} ${primary}`}>Hello</button>;
  }
}

export default Button;
