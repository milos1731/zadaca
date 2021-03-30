import React, {Component} from "react";
import SearchBar from "./SearchBar";
import MusicList from "./MusicList";    

class Task10  extends Component {
    constructor(props){
        super(props);
        this.state= {
            musicList: [{name:'Nice piano and ukulele', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/buddy.jpg', audio:'https://www.bensound.com/bensound-music/bensound-buddy.mp3', duration: '2:02'}, 
                        {name:'Gentle acoustic', author: 'Acoustic', img: 'https://www.bensound.com/bensound-img/sunny.jpg', audio:'https://www.bensound.com//bensound-music/bensound-sunny.mp3', duration: '2:20'},
                        {name:'Corporate motivational', author: 'Corporate', img: 'https://www.bensound.com/bensound-img/energy.jpg', audio:'https://www.bensound.com/bensound-music/bensound-energy.mp3', duration: '2:59'},
                        {name:'Slow cinematic', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/slowmotion.jpg', audio:'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3', duration: '3:26'}],

        }
    }
    
    render() { 
        return ( <div>
            <SearchBar />
            <MusicList
            songs={this.state.musicList} />
        </div> );
    }
}
 
export default Task10 ;