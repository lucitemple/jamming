import React from "react";
import TrackList from "../TrackList/TrackList";
import "./SearchResults.css";

export default class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList searchResults={this.props.searchResults}/>
      </div>
    );
  }
}
