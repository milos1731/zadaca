import React, { Component } from "react";
import SearchBar from "./SearchBar";
import MusicList from "./MusicList";

class Task10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicList: [
        {
          id: 1,
          name: "1977",
          author: "Ana Tijoux",
          img: "https://www.bensound.com/bensound-img/buddy.jpg",
          audio: "/track1.mp3",
        },
        {
          id: 2,
          name: "Don't let the man get you down",
          author: "Moby",
          img: "https://www.bensound.com/bensound-img/sunny.jpg",
          audio: "track2.mp3",
        },
        {
          id: 3,
          name: "Extreme ways",
          author: "Moby",
          img: "https://www.bensound.com/bensound-img/energy.jpg",
          audio: "track3.mp3",
        },
        {
          id: 4,
          name: "Big girls don't cry",
          author: "Fergie",
          img: "https://www.bensound.com/bensound-img/slowmotion.jpg",
          audio: "track4.mp3",
        },
        {
          id: 5,
          name: "Instant crash",
          author: "Natalie Imbruglia",
          img: "https://www.bensound.com/bensound-img/slowmotion.jpg",
          audio: "track5.mp3",
        },
      ],

      search: "",
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    let filteredSongs = this.state.musicList.filter((song) => {
      return (
        song.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1 ||
        song.author.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
      );
    });

    return (
      <div>
        <SearchBar value={this.state.search} change={this.updateSearch} />

        <MusicList songs={filteredSongs} />
      </div>
    );
  }
}

export default Task10;
