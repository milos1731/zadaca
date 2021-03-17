import React, {Component} from "react";
import "./Task1_1.css";
import SquareComponent from "./SquareComponent"


class Task1_1 extends Component {
    constructor(props){
        super(props);
    
    this.state = { 
        squares: [ 
                    {number: 1, color: "red"},
                    {number: 2, color: "blue"},
                    {number: 3, color: "yellow"},
                    {number: 4, color: "navy"},
                    {number: 5, color: "orange"},
                    {number: 6, color: "green"},
                    {number: 7, color: "aqua"},
                    {number: 8, color: "gray"},
                    {number: 9, color: "salmon"}
        ],
        bigSquareBackground: ""
     }
     this.handleColor = this.handleColor.bind(this);
    }

     handleColor(value) {
        this.setState({bigSquareBackground: value})
     }

    render() { 
        const items =  this.state.squares;
        console.log(items);

        return ( <div className="squares">
            <div className="smallSquares"
            >
                {items.map((i) => (
                   <SquareComponent
                   bigSquareBackground={this.state.bigSquareBackground}
                   number={i.number}
                   color={i.color}
                   handleColor={this.handleColor}
                   />))}
            </div>
            <div 
            style={{backgroundColor: this.state.bigSquareBackground}}

            className="bigSquare">BIG SQUARE</div>
        </div>
            
         );
    }
}
 
export default Task1_1;

