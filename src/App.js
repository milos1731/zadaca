import React, {Component} from "react";
import './App.css';
import Task1 from "./components/Task1/Task1"
import Task1_1 from "./components/Task1_1/Task1_1"
import Task2 from "./components/Task2/Task2"
import Task3 from "./components/Task3/Task3"
import Task4 from "./components/Task4/Task4"
import Task5 from "./components/Task5/Task5"
import Task6 from "./components/Task6/Task6"




class App extends Component {
  constructor() {
    super();
    this.state = {
      screen: "Task6"
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
          </div>
        <ScreenComponent />
      </div>
    );
  }
}

export default App;

