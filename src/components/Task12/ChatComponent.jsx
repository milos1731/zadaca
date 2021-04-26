import React, { Component } from "react";
import "./ChatComponent.css";

class ChatComponent extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="chat-comp">
        <div className="chat-data">
          <div className="avatar">
            <img className="avatar-chat" src={item.image} />
          </div>
          <div>
            <div className="name-message">
              <div className="slack-name">{item.name} </div>
              <div className="message-time">{item.time}</div>
            </div>
            <div className="slack-message">{item.message}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatComponent;
