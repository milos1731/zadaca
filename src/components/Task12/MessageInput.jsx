import React, { Component } from "react";
import "./MessageInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faFont,
  faAt,
  faSmileWink,
  faPaperclip,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "" };
  }
  onChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addChatProps(this.state.msg);
    this.setState({
      msg: "",
    });
  };
  render() {
    console.log(this.state.msg);
    return (
      <div className="input-ceo">
        <div className="input-div">
          <div className="input-left">
            <div className="input-icon">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <form></form>
            <div type="text" className="input-message">
              <form onSubmit={this.handleSubmit}>
                <input
                  className="real-input"
                  type="text"
                  placeholder="Jot something down"
                  value={this.state.msg}
                  onChange={this.onChange}
                />
              </form>
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
              <FontAwesomeIcon
                className="input-right-icons"
                icon={faSmileWink}
              />
            </div>
            <div className="input-icon">
              <FontAwesomeIcon
                className="input-right-icons"
                icon={faPaperclip}
              />
            </div>
            <div className="input-icon">
              <button className="submit-button">
                <FontAwesomeIcon
                  className="input-right-icons"
                  icon={faLocationArrow}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageInput;
