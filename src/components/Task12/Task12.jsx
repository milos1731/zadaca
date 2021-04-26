import React, { Component } from "react";
import "./Task12.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Details from "./Details";
import "./lato.ttf";
import WorkSpace from "./WorkSpace";

class Task12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "filipjovakaric",
      showDetails: false,
    };
  }
  handleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  };
  handleX = () => {
    this.setState({
      showDetails: false,
    });
  };

  render() {
    console.log(this.state.showDetails);
    return (
      <div className="entire">
        <Header />

        <div className="sidebar-workspace">
          <SideBar parentCallback={this.callbackFunction} />
          <div className="right">
            <WorkSpace
              handleDetails={this.handleDetails}
              current={this.state.current}
            />
          </div>
          {this.state.showDetails && (
            <Details handleX={this.handleX} current={this.state.current} />
          )}
        </div>
      </div>
    );
  }
}

export default Task12;
