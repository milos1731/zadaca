import React, {Component} from "react";
import './App.css';
import Task1 from "./components/Task1/Task1"
import Task1_1 from "./components/Task1_1/Task1_1"
import Task2 from "./components/Task2/Task2"
import Task3 from "./components/Task3/Task3"
import Task4 from "./components/Task4/Task4"
import Task5 from "./components/Task5/Task5"
import Task6 from "./components/Task6/Task6"
import Task7 from "./components/Task7/Task7"
import Task8 from "./components/Task8/Task8"
import Task9 from "./components/Task9/Task9"
import Task10 from "./components/Task10/Task10"
import TaskTest from "./components/TaskTest/TaskTest"






class App extends Component {
  constructor() {
    super();
    this.state = {
      screen: "Task10"
    };
  }
  render() {
    const { screen } = this.state;

    let ScreenComponent;
    if (screen === "Task1") ScreenComponent = Task1;
    if (screen === "Task1_1") ScreenComponent = Task1_1;

    if (screen === "Task2") ScreenComponent = Task2;

    if (screen === "Task3") ScreenComponent = Task3;
    if (screen === "Task4") ScreenComponent = Task4;
    if (screen === "Task5") ScreenComponent = Task5;
    if (screen === "Task6") ScreenComponent = Task6;
    if (screen === "Task7") ScreenComponent = Task7;
    if (screen === "Task8") ScreenComponent = Task8;
    if (screen === "Task9") ScreenComponent = Task9;
    if (screen === "Task10") ScreenComponent = Task10;
    if (screen === "TaskTest") ScreenComponent = TaskTest;






    

    return (
      <div className="App">
        <div>
        <button onClick={() => this.setState({ screen: "Task1" })}>
            Task1
          </button>
          <button onClick={() => this.setState({ screen: "Task1_1" })}>
            Task1_1
          </button>
        <button onClick={() => this.setState({ screen: "Task2" })}>
            Task2
          </button>
          <button onClick={() => this.setState({ screen: "Task3" })}>
            Task3
          </button>
          <button
            onClick={() => this.setState({ screen: "Task4" })}
          >
            Task4
          </button>
          <button
            onClick={() => this.setState({ screen: "Task5" })}
          >
            Task5
          </button>
          <button
            onClick={() => this.setState({ screen: "Task6" })}
          >
            Task6
          </button>
          <button
            onClick={() => this.setState({ screen: "Task7" })}
          >
            Task7
          </button>
          <button
            onClick={() => this.setState({ screen: "Task8" })}
          >
            Task8
          </button>
          <button
            onClick={() => this.setState({ screen: "Task9" })}
          >
            Task9
          </button>
          <button
            onClick={() => this.setState({ screen: "Task10" })}
          >
            Task10
          </button>
          <button
            onClick={() => this.setState({ screen: "TaskTest" })}
          >
            TaskTest
          </button>
          </div>
        <ScreenComponent />
      </div>
    );
  }
}

export default App;

