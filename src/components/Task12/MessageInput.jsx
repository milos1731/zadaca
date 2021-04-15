import React from "react";
import "./MessageInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faFont,
  faAt,
  faSmileBeam,
  faSmileWink,
  faPaperclip,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const MessageInput = () => {
  return (
    <div>
      <div className="input-div">
        <div className="input-left">
          <div className="input-icon">
            <FontAwesomeIcon icon={faBolt} /> |
          </div>
          <div type="text" className="input-message">
            <input
              className="real-input"
              type="text"
              placeholder="Jot something down"
            />
          </div>
        </div>

        <div className="input-right">
          <div className="input-icon">
            <FontAwesomeIcon className="input-right-icons" icon={faFont} />
          </div>
          <div className="input-icon">
            <FontAwesomeIcon className="input-right-icons" icon={faAt} />
          </div>
          <div className="input-icon">
            <FontAwesomeIcon className="input-right-icons" icon={faSmileWink} />
          </div>
          <div className="input-icon">
            <FontAwesomeIcon className="input-right-icons" icon={faPaperclip} />
          </div>
          <div className="input-icon">
            <FontAwesomeIcon
              className="input-right-icons"
              icon={faLocationArrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
