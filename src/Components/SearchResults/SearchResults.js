import React from "react";
import TrackList from "../Tracklist";
import './SearchResults.css';

export default function SearchResults() {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList />
    </div>
  );
}
