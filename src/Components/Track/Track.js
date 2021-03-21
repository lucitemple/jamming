import {React } from "react";
import './Track.css';


export default function Track() {

  const renderAction = (isRemoval) => {
          <button className="Track-action">{isRemoval ? '+' : '-'}</button>
  }
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>track name will go here</h3>
        <p>track artist will go here | track album will go here</p>
      </div>
      {{renderAction}}
    </div>
  );
}
