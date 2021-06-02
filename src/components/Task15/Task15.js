import React, { Component } from "react";
import "./Task15.css";
// import image from "./image.jpg";
class Task15 extends Component {
  state = {};
  render() {
    return (
      <div className="background">
        <div className="form-center">
          <div className="form-title">EDUCATION APPOINTMENT FORM</div>
          <form className="title-form">
            <input className="title-input" type="text" placeholder="Title" />
            <hr />
            <input
              className="title-input"
              type="text"
              placeholder="Your Name"
            />
            <hr />
            <input className="title-input" type="text" placeholder="Email" />
            <hr />
            <input
              className="title-input"
              type="text"
              placeholder="Phone Number"
            />
            <hr />
            <select className="select-input">
              <option
                className="option-select-input"
                disabled
                selected
                hidden
                value=""
              >
                Course Type
              </option>
              <option className="option-select-input" value="society">
                Society
              </option>
              <option className="option-select-input" value="language">
                Language
              </option>
            </select>
            <hr />
            <p className="p-question">How would you like to be located?</p>
            <select className="select-input">
              <option className="option-select-input" value="email">
                By email
              </option>
              <option className="option-select-input" value="phone">
                By phone
              </option>
            </select>
            <hr />

            <select className="select-input">
              <option className="option-select-input" value="hours">
                9am-11am
              </option>
              <option className="option-select-input" value="hours-2">
                11am-1pm
              </option>
            </select>
            <button className="confirm-button">Request an appointment</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Task15;
