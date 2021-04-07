import React, { Component } from "react";
import MusicItem from "./MusicItem";

class MusicList extends Component {
  render() {
    return (
      <div>
        {this.props.songs.map((song) => (
          <MusicItem id={song.id} song={song} />
        ))}
      </div>
    );
  }
}

export default MusicList;
