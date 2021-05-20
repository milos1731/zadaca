import Button from "./Button";
import React, { Component } from "react";

class Task13 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="entire">
        <Button color="green" />
        <Button color="red" />
        <Button color="blue" />
        <Button color="yellow" />
        <Button color="gray" />
        <Button color="black" size="big" />

        <Button primary />
      </div>
    );
  }
}

export default Task13;
