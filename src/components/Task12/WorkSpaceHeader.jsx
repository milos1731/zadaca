import React from "react";
import "./WorkSpaceHeader.css";
import "./lato.ttf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faInfo,
  faInfoCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStrava } from "@fortawesome/free-brands-svg-icons";
const WorkSpaceHeader = () => {
  return (
    <div className="work-space-header">
      <div className="work-space-header-left">
        <div className="header-icon">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="header-name">Miloš Bučevac</div>
        <div className="header-star-icon">
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <div className="header-info-icon">
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>
    </div>
  );
};

export default WorkSpaceHeader;
