import React from "react"
import "./SquareComponent.css"

const SquareComponent = (props) => {

        const isActive = props.bigSquareBackground === props.color;
    return(
       
        <div 
        onClick={() => props.handleColor(props.color)}
        className="smallSquare"
         style={{backgroundColor: props.color,
            border: isActive ? "3px solid black" : undefined
         }}>
        I am {props.color} and {props.number}</div>
    )
}

export default SquareComponent;
