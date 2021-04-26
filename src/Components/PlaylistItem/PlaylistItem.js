import React from "react";
import './PlaylistItem.css';

export default class PlaylistItem extends React.Component {
render() {
    return (
      <div className="PlaylistItem">
          <h3 name={this.props.name}>{this.props.name}</h3>
      </div>
    );
}
}
