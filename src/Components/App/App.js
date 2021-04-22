import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: "New Playlist Name",
      playlistTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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
    console.log(`line 45 App.js`); //printing - before error
    let trackUris = this.state.playlistTracks.map((track) => track.uri);
    console.log(`line 47 App.js ${trackUris}`); // printing before error
    if (trackUris && trackUris.length) {
      console.log(`line 49 App.js ${trackUris}`); //printing before error
      // below line is the problem 'Uncaught TypeError Cannot read property 'then' of undefined
      Spotify.savePlayList(this.state.playlistName, trackUris).then(() => {
        console.log(`line 52 App.js ${trackUris}`); //not printing
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
