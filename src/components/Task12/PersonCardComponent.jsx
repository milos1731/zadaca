import React, { Component } from "react";
import "./PersonCardComponent.css";
import ivor from "./ivor.png";
import filip from "./filip.jpeg";
import slackbot from "./slackbot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

class PersonCardComponent extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      time = today.getHours() + ":" + today.getMinutes();
    this.state = {
      currentTime: time,
    };
  }
  render() {
    return (
      <div className="card-component">
        <img className="card-image" src={ivor} />
        <div className="card-name">
          Ivor Jugo
          <FontAwesomeIcon className="card-cirle-icon" icon={faCircle} />
        </div>
        <div className="card-view-profile">View full profile</div>
        <div className="card-local-time">Local time</div>
        <div className="card-clock"> {this.state.currentTime}</div>
        <div className="buttons">
          <div className="button">Message</div>
          <div className="button">Call</div>
        </div>
      </div>
    );
  }
}

export default PersonCardComponent;
