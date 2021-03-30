import React, {Component} from "react";
import MusicItem from "./MusicItem";

class MusicList extends Component {

    render() { 
        return ( <div>
            {this.props.songs.map(song => (
                <MusicItem song={song} />
            )
                )}
        </div> );
    }
}
 
export default MusicList;