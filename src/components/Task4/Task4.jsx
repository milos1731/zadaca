import React, {Component} from "react";
import "./Task4.css"


class Task4 extends Component {
    state = {
        xMain: 0,
        yMain: 0,
        xTrailing: 0,
        yTrailing: 0,
      }
      
      handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        this.setState({
          xMain: clientX,
          yMain: clientY,
        }, () => {
         
          setTimeout(() => {
            this.setState({
              xTrailing: clientX,
              yTrailing: clientY,
            })
          }, 50);
        })
      }
    
      render = () => {
        // we retrieve coordinates from state
        const {
          xMain,
          yMain,
          xTrailing,
          yTrailing
        } = this.state;
    
        return (

          <div
            className='square'
            onMouseMove={e => this.handleMouseMove(e)}
          >
            <div className='cursors'>
              <div 
                className='cursor'
                style={{ 
                  left: xMain, 
                  top: yMain,
                }}
              />

              <div 
                className='cursor'
                style={{ 
                  left: xTrailing, 
                  top: yTrailing,
                }}
              />
            </div>
          </div>
          )
      }
  }
export default Task4;