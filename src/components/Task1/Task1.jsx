import React, {Component} from "react"
import "./Task1.css";
import Square1 from './task1Components/Square1/Square1';
import Square2 from './task1Components/Square2/Square2';
import Square3 from './task1Components/Square3/Square3';
import Square4 from './task1Components/Square4/Square4';
import Square5 from './task1Components/Square5/Square5';
import Square6 from './task1Components/Square6/Square6';
import Square7 from './task1Components/Square7/Square7';
import Square8 from './task1Components/Square8/Square8';
import Square9 from './task1Components/Square9/Square9';
import Square10 from './task1Components/Square10/Square10';
import Square11 from './task1Components/Square11/Square11';




class Task1 extends Component {
  constructor() {
    super();
    this.state = {
      squareBackground: "",
      border: "1px solid black",
      // squareNum: 0;
    };
    this.handleColor = this.handleColor.bind(this);
  }

  handleColor (value) {

    this.setState( {squareBackground: value});
    this.setState({activeSquare: true})
    console.log(this.state.activeSquare)

  }

  render() { 


    const styleSq = {
      backgroundColor: this.state.squareBackground,
      border: this.state.border
    }

    return ( <div className="App">
    <header className="App-header">
      <div className="squares">   
      <div 
      onClick={() => this.handleColor ("rgb(38, 22, 219)") }>
        <Square1  />
      </div>
      <div 
      onClick={() => this.handleColor ( "rgb(91, 167, 47)")}>
      <Square2 />
      </div>
      <div onClick={() => this.handleColor( "green")}>
      <Square3 />
      </div>
      
      <div onClick={() => this.handleColor( "gray")}>
      <Square4 />
      </div>
      <div onClick={() => this.handleColor( "red" )}>
      <Square5 />
      </div>
      <div onClick={() => this.handleColor( "rgb(47, 40, 109)"  )}>
        <Square6 /></div>
      
        <div onClick={() => this.handleColor ("rgb(219, 137, 82)"  )}>
        <Square7 /></div>
        
        <div onClick={() => this.handleColor("rgb(30, 195, 207)")}>
        <Square8 /></div>

      <div onClick={() => this.handleColor("rgb(67, 170, 91)"  )}>
        <Square9 /></div>

      <div onClick={() => this.handleColor("rgb(3, 2, 12)"  )}>
        <Square10 /></div>     
        </div>
     <div style={styleSq}>
     <Square11
      />
     </div>
    </header>
  </div> );
  }
}
 


export default Task1;