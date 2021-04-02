import React, {Component}from "react";
import SearchBar from "./SearchBar";
import MusicList from "./MusicList";   

 

class Task10  extends Component {
    constructor(props){
        super(props);
        this.state= {
                        musicList: [{name:'Nice piano and ukulele', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/buddy.jpg', audio:'/track1.mp3'}, 
                        {name:'Gentle acoustic', author: 'Acoustic', img: 'https://www.bensound.com/bensound-img/sunny.jpg', audio:'track2.mp3'},
                        {name:'Corporate motivational', author: 'Corporate', img: 'https://www.bensound.com/bensound-img/energy.jpg', audio:'track3.mp3'},
                        {name:'Slow cinematic', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/slowmotion.jpg', audio:'track4.mp3'},
                        {name:'Budjo', author: 'Hakerica', img: 'https://www.bensound.com/bensound-img/slowmotion.jpg', audio:'track4.mp3'}],
 
                        search: ""
        }
       this.updateSearch = this.updateSearch.bind(this)
    }

    updateSearch (event){
        this.setState({search: event.target.value})
    }
    render() { 
        let filteredSongs = this.state.musicList.filter(
            (song) => {
                return song.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                song.author.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return ( <div>
            <SearchBar
                value={this.state.search}
                change={this.updateSearch}
            />

          
            <MusicList
            songs={filteredSongs}
             />
        </div> );
    }
}
 
export default Task10 ;