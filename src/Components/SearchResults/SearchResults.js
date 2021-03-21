import React from "react";
import TrackList from "../TrackList/TrackList";
import './SearchResults.css';

export default function SearchResults() {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList />
    </div>
  );
}
