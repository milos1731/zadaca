import React, {Component} from "react";
import "./MusicItem.css";

class MusicItem extends Component {

    render() { 
        return ( <div className="music">

            <img className="music-image"
                src={this.props.song.img} />

            <div className="music-item">
            {this.props.song.name} 
            </div>
            
            
        
        </div> 
            );
    }
}
 
export default MusicItem;