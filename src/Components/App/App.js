import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";
import PlaylistList from "../PlaylistList/PlaylistList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: "New Playlist Name",
      playlistTracks: [],
      playlists: [], // array of objects to store each playlist's playlistId and playlistName
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.getUserPlaylists = this.getUserPlaylists.bind(this);
  }

  componentDidMount() {
    this.getUserPlaylists();
  }

  getUserPlaylists() {
    Spotify.getUserPlaylists().then((playlists) => {
      this.setState({ playlists });
    });
    console.log(this.state.playlists);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks.filter(
      (currentTrack) => track.id !== currentTrack.id
    );
    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    let trackUris = this.state.playlistTracks.map((track) => track.uri);
    if (trackUris && trackUris.length) {
      // below line gets an "Uncaught TypeError:  Spotify.getCurrentUserId(...).then is not a function" breaks the website & doesn't save to spotify
      Spotify.savePlayList(this.state.playlistName, trackUris).then(() => {
        this.setState({
          playlistName: "New Playlist Name",
          playlistTracks: [],
        });
      });
    } else {
      alert("Your playlist is empty! Please add tracks.");
    }
  }

  search(term) {
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onSearch={this.search}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
            
          </div>
          <PlaylistList playlists={this.state.playlists}/>
        </div>
      </div>
    );
  }
  // This forces login to Spotify on mount, to prevent the search loading issue.
  /*   componentDidMount() {
    window.addEventListener("load", () => {
      Spotify.getAccessToken();
    });
  } */
}

export default App;
