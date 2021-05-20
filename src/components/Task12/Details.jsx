import React, { Component } from "react";
import "./Details.css";
import filip from "./filip.jpeg";

import slackbot from "./slackbot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faEllipsisH,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

class Details extends Component {
  state = {};
  render() {
    return (
      <div className="details">
        <div className="budjo">
          <div className="details-top">
            <div className="details-details">Details</div>
            <div className="details-name">{this.props.current}</div>
          </div>
          <div onClick={this.props.handleX} className="close-details">
            X
          </div>
        </div>
        <div onClick={this.props.handleImage} className="details-center">
          <img className="details-image" src={this.props.currentImage} />
          <div className="details-name-center">
            {this.props.current}
            <FontAwesomeIcon className="details-circle" icon={faCircle} />
          </div>
          <div className="detail-icons">
            <div className="find-call-more">
              <FontAwesomeIcon className="details-icon" icon={faSearch} />
              <div className="icon-text">Find</div>
            </div>
            <div className="find-call-more">
              <FontAwesomeIcon className="details-icon" icon={faPhone} />
              <div className="icon-text">Call</div>
            </div>
            <div className="find-call-more">
              <FontAwesomeIcon className="details-icon" icon={faEllipsisH} />
              <div className="icon-text">More</div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="details-bottom">About</div>
          <div className="details-bottom">Pinned</div>
          <div className="details-bottom">Files</div>
        </div>
      </div>
    );
  }
}

export default Details;
