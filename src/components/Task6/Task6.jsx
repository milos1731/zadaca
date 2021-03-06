import React, {Component} from "react";
import "./Task6.css";
import Button from "./components/Button"
import Input from "./components/Input"
import ClearButton from "./components/ClearButton"





class Task5 extends Component {
   constructor(props){
       super (props);
       this.state= {
           input: "",
           previousNumber: "",
           currentNumber: "",
           operator:""
       }

   }

   addToInput = val => {
       this.setState({input:this.state.input + val});
   }
   addDecimal = val => {
       if (this.state.input.indexOf(".") === -1 ){
        this.setState({input:this.state.input + val});

       }
   }
   addZeroToInput = val => {
       if (this.state.input !=="") {
        this.setState({input:this.state.input + val});

       }
    }

    add = () => {
        this.state.previousNumber = this.state.input;
        this.setState({input: ""});
        this.state.operator = "plus"
    }
    subtract =() => {
        this.state.previousNumber = this.state.input;
        this.setState({input: ""});
        this.state.operator = "minus"
    }
    multiply =() => {
        this.state.previousNumber = this.state.input;
        this.setState({input: ""});
        this.state.operator = "multiply"
    }
    divide =() => {
        this.state.previousNumber = this.state.input;
        this.setState({input: ""});
        this.state.operator = "divide"
    }

    
    evaluate = () => {
        this.state.currentNumber = this.state.input;
        if (this.state.operator == "plus") {
            this.setState({
                input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
            })
        }
        else if (this.state.operator == "minus") {
            this.setState({
                input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
            })
        }
        else if (this.state.operator == "multiply") {
            this.setState({
                input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
            })
        }
        else if (this.state.operator == "divide") {
            this.setState({
                input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
            })
        }

    }


    render() { 
        return ( <div className="task5">
            <div className="calc-wrapper">
                <Input
                input={this.state.input}></Input>
                <div className="row">
                <Button handleClick={this.addToInput}>7</Button>
                <Button handleClick={this.addToInput}>8</Button>
                <Button handleClick={this.addToInput}>9</Button>
                <Button handleClick={this.divide}>/</Button>
 

                </div>
                <div className="row">
                <Button handleClick={this.addToInput}>4</Button>
                <Button handleClick={this.addToInput}>5</Button>
                <Button handleClick={this.addToInput}>6</Button>
                <Button handleClick={this.multiply}>*</Button>


                </div> <div className="row">
                <Button handleClick={this.addToInput}>1</Button>
                <Button handleClick={this.addToInput}>2</Button>
                <Button handleClick={this.addToInput}>3</Button>
                <Button handleClick={this.add}>+</Button>
                </div> <div className="row">
                <Button handleClick={this.addDecimal}>.</Button>
                <Button handleClick={this.addZeroToInput}>0</Button>
                <Button handleClick={this.evaluate}>=</Button>
                <Button handleClick={this.subtract}>-</Button>
                </div>
                <div className="row">
                    <ClearButton
                    handleClear={() => this.setState({input: ""})}
                    >
                        Clear</ClearButton>
                </div>
            </div>
        </div> );
    }
}
 
export default Task5;