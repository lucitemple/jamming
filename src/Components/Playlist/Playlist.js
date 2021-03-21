import React from "react";
//import TrackList from "../Tracklist";
import "./Playlist.css";

export default function Playlist() {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      {/* <TrackList /> */}
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
