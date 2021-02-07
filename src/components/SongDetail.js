import React from "react";
import { connect } from "react-redux";


const SongDetail = ({ currentSong }) => {
  if (!currentSong) {
    return <h2 className="ui segment">Pick up a song</h2>;
  }

  return (
    <div className="ui segment">
      <h2> Detail for:</h2>
      <h3>{ currentSong.title }</h3>
      <p>Duration: { currentSong.duration }</p>
    </div>
  );
};


//this code get information out Redux Store
const mapStateToProps = state => {
  return { currentSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
