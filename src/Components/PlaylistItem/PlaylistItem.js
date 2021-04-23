import React from "react";
import './PlaylistItem.css';

export default class PlaylistItem extends React.Component {
render() {
    return (
      <div className="PlaylistItem">
          <h3 playlistName={this.props.playlistName}>{this.playlistName}</h3>
      </div>
    );
}
}
