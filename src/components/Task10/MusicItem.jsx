import React, {Component} from "react";
import "./MusicItem.css";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MusicItem extends Component {
    constructor(props) {
        super(props)
    this.state = { 
        likes: 2,
        isButtonDisabled: false,

    }
}

    likesHandler () {
        if (this.state.isButtonDisabled === false) {
            this.setState({
            likes: this.state.likes + 1,
            isButtonDisabled: true,
        })
        } 
        
    }
    
    render() { 

        return ( <div className="music">
                    
                        <div className="thumbs">
                            <FontAwesomeIcon 
                            className="like-icon"
                            onClick={() => this.likesHandler()} 
                            disabled={this.state.isButtonDisabled}
                            icon={faThumbsUp} />
                        <div className="like-button">                    
                            {this.state.likes}
                        </div>
                </div>
                                       

                    <img className="music-image"
                            src={this.props.song.img} />
   
                        <div className="music-item">
                            {this.props.song.author} - {this.props.song.name}
                        </div>

                      <audio className="audio-controls" controls>
                        <source src={this.props.song.audio} type="audio/mpeg"/>
                      </audio>
                      
                </div> 
            );
    }
}
 
export default MusicItem;

