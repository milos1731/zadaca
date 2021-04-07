import React, { Component } from "react";
import "./Task12.css";

class Task12 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areChannelsOpen: false,
      areMessagesOpen: false,
    };
  }

  render() {
    const { areChannelsOpen, areMessagesOpen } = this.state;
    return (
      <div className="entire">
        <div className="side-bar">
          <div
            onClick={() => this.setState({ areChannelsOpen: !areChannelsOpen })}
            className="channels"
          >
            Channels
          </div>
          {areChannelsOpen && (
            <div className="content">
              <div># General</div>
              <div># Random</div>
              <div># Meetup</div>
            </div>
          )}
          <div
            onClick={() => this.setState({ areMessagesOpen: !areMessagesOpen })}
            className="direct-messages"
          >
            Direct messages
          </div>
          {areMessagesOpen && (
            <div className="content">
              <div>ivorjugo</div>
              <div>filipjovakaric</div>
              <div>peraivacic</div>
            </div>
          )}
        </div>
        <div className="chat-area">
          <div className="top-bar">~name</div>
          <div className="messages"></div>
          <input className="text-input" type="text" placeholder="Message" />
        </div>
      </div>
    );
  }
}

export default Task12;
