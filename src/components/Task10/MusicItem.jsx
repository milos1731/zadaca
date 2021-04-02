import React, {Component} from "react";
import "./MusicItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class MusicItem extends Component {

    state ={ 
        likes: 0
    }

    render() { 



        return ( <div className="music">
                    <i class="fa fa-thumbs-up" aria-hidden="true"></i>     
                    <img className="music-image"
                            src={this.props.song.img} />
   
                        <div className="music-item">
                            {this.props.song.name} - {this.props.song.author}
                        </div>

                      <audio className="audio-controls" controls>
                        <source src={this.props.song.audio} type="audio/mpeg"/>
                      </audio>
                </div> 
            );
    }
}
 
export default MusicItem;

