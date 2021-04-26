import React, { Component } from "react";
import "./WorkSpaceHeader.css";
import "./lato.ttf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faInfoCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

class WorkSpaceHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="work-space-header">
        <div className="work-space-header-left">
          <div className="header-icon">
            <FontAwesomeIcon icon={faCircle} />
          </div>
          <div onClick={this.props.handleDetails} className="header-name">
            {this.props.current}
          </div>
          <div className="header-star-icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className="header-info-icon">
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
      </div>
    );
  }
}

export default WorkSpaceHeader;
