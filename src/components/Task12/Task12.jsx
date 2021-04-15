import React, { Component } from "react";
import "./Task12.css";
import Header from "./Header";
import SideBar from "./SideBar";
import MessageInput from "./MessageInput";
import WorkSpaceHeader from "./WorkSpaceHeader";
import "./lato.ttf";
import WorkSpace from "./WorkSpace";

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

        <div className="sidebar-workspace">
          <SideBar />
          <div className="right">
            {/* <WorkSpaceHeader /> */}
            <WorkSpace />
          </div>
        </div>

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
