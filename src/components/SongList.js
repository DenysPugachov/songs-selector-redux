import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongsList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={ song.title }>
          <div className="right floated content">
            <button className="ui button primary"
              onClick={ () => this.props.selectSong(song) }
            >
              Select
              </button>
          </div>
          <div className="content">{ song.title }  </div>
        </div>
      );
    });
  }


  render() {
    return (
      <div className="ui divided list">{ this.renderList() }</div>
    );
  }
};

//always pass state as first argument
const mapStateToProps = (state) => {
  //return this.props.song = state
  return { songs: state.songs };
};

//pass actions {selectSong} as props to this component
//(after each action(selectSong) call component(SongsList) will reloaded automatically)
//connect(mapStateToProps, {actions2, action2})(componentWithPropsOfState)
export default connect(mapStateToProps, { selectSong })(SongsList);