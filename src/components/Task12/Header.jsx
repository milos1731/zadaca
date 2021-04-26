import React from "react";
import "./Header.css";
import image from "./budjo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="header-center">
        <input
          className="input-field-header"
          type="text"
          placeholder="Search JS Belgrade"
        />
      </div>
      <div className="header-right">
        <FontAwesomeIcon icon={faQuestionCircle} />
        <img className="header-avatar" src={image} />
      </div>
    </div>
  );
};

export default Header;
