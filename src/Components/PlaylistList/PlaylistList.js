import React from "react";
import Spotify from "../../util/Spotify";
import PlaylistItem from "../PlaylistItem/PlaylistItem";
import "./PlaylistList.css";

export default class PlaylistList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    Spotify.getUserPlaylists().then((playlists) => {
      this.setState({ playlists });
    });
  }

  render() {

    return (
      <div className="PlaylistList">
        <h2>Your Playlists</h2>
        <>
        {this.state.playlists && this.state.playlists.map((playlist) => {
          return (
            <PlaylistItem
              name={playlist.playlistName}
              key={playlist.playlistId}
            />
          );
        })}
        </>
      </div>
    );
  }
}
