import React, {Component} from "react"
import "./Task2.css"

class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      count: 0
    };
  }

    increment () {
      this.setState({count: this.state.count + this.state.value});
    };
    decrement () {
      this.setState({count: this.state.count - this.state.value});
    };
    reset () {
      this.setState({count: 0});
    };
    valueOne () {
      this.setState({value: 1})

    }
    valueFive () {
      this.setState({value: 5})
    }
    valueTen () {
      this.setState({value: 10})
    }
    valueFifteen () {
      this.setState({value: 15})
    }
  
  render() { 
    return ( 
      <div>
        <div className="buttons"> 
        <button className="button"
        onClick={() => this.increment()}>+</button>
        <div className="count">{this.state.count}</div>
        <button className="button"
        onClick={() => this.decrement()}>-</button>
        <button className="button"
        onClick={() => this.reset()}
        >Reset</button>
        <button
        onClick={() => this.valueOne()}>1</button>
        <button
        onClick={() => this.valueFive()}>5</button>
        <button
        onClick={() => this.valueTen()}>10</button>
        <button
        onClick={() => this.valueFifteen()}>15</button>


        </div>
        

      </div>
     );
  }
}
 
export default Task2;