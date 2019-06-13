import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class PlayerBar extends Component {

  formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);

    if (seconds > 9) {
    return minutes + ":" + seconds;
  } else {
    return minutes + ":0" + seconds;
  }
}

  render() {

    return (

      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-md-skip-backward"></span>
          </button>
          <button class= "button" id="play-pause" onClick={this.props.handleSongClick}>
            <span className="ion-md-play"></span>
            <span className="ion-md-pause"></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion-md-skip-forward"></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">{this.formatTime(this.props.currentTime)}</div>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.formatTime(this.props.duration)}</div>
        </section>
        <section id="volume-control">
          <div className="icon ion-md-volume-low"></div>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentVolume)}
            max="1"
            min="0"
            step="0.01"
            onChange= {this.props.handleVolumeChange} />
          <div className="icon ion-md-volume-high"></div>
        </section>
      </section>


    );
  }
}

export default PlayerBar;
