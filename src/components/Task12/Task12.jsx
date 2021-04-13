import React, { Component } from "react";
import "./Task12.css";
import Header from "./Header";
import SideBar from "./SideBar";

class Task12 extends Component {
  constructor(props) {
    super(props);
  }

  setMessage = (currentMessage) => {
    this.setState({
      currentMessage,
    });
  };

  render() {
    return (
      <div className="entire">
        <Header />
        <SideBar />

        {/* <div className="chat-area">
          <div className="top-bar">{this.state.currentMessage}</div>
          <div className="messages"></div>
          <input className="text-input" type="text" placeholder="Message" />
        </div> */}
      </div>
    );
  }
}

export default Task12;
