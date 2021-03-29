//import logo from './logo.svg';
import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
//import { ReactComponent } from "*.svg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
        { name: "name3", artist: "artist3", album: "album3", id: 3 },
      ],
      playlistName: "Playlist Name",
      playlistTracks: [
        {
          name: "playlistName1",
          artist: "playlistartist4",
          album: "album4",
          id: 4,
        },
        {
          name: "playlistName3",
          artist: "playlistartist5",
          album: "album5",
          id: 5,
        },
        {
          name: "playListName3",
          artist: "playlist artist6",
          album: "album6",
          id: 6,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks.filter(savedTrack => track.id !== savedTrack.id);
    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
