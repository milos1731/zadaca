import React, {Component} from "react";
import  "./Task3.css";

class Task3 extends Component {
    constructor(){
      super();
      this.state={
        text:""
      }
    }
  
    myChangeHandler = (event) => {
      this.setState({text: event.target.value});
    }
   
    render() { 
      let x=this.state.text.replace(/\D/g,'');
      let y=this.state.text.replace(/[^a-zA-Z]+/g, '');
      let z=this.state.text.replace(/\s+/g, '')
      let q=this.state.text.replace(/\D/g,'').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
      return ( 
        <div className="main">
          <input 
          className="input-box"
          onChange={this.myChangeHandler} 
          className="input"
          type="text"
          placeholder="place your text here"
          />
          <br/>
  
          
          <p>your input:{this.state.text}</p>
          <p >numbers only:{x}</p>
          <p>letters only:{y}</p>
          <p>without space:{z}</p>
          <p>formatted numbers: {q} </p>
        </div>
       );
    }
  }
   
  export default Task3;
  