import { combineReducers } from "redux";


const songsReducer = () => {
  return [
    { title: "My favorite game", duration: "3:05" },
    { title: "Just song title", duration: "5:55" },
    { title: "Nothing is matter", duration: "2:44" },
    { title: "Unforgiven", duration: "3:33" },
  ];
};


const selectedSongReducer = (selectedSong = null, action) => {

  if (action.type === "SONG_SELECTED") {
    //return a particular song
    return action.payload;
  }

  return selectedSong;
};


export default combineReducers({
  //key = keys in state
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});