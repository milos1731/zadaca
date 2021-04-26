import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { color } = this.props;
    return <button className={`btn ${color}`}>Hello</button>;
  }
}

export default Button;
