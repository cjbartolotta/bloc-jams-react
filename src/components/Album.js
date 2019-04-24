import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      hoveredIndex: null
    };



    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song })
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handleMouseHover(index) {
    this.setState({hoveredIndex: index})
  }

  handleMouseLeave(index) {
    this.setState({hoveredIndex: null})
  }

  renderIcon(index) {
    var song = this.state.currentSong;
    if (this.state.hoveredIndex === index && !this.state.isPlaying) {
      return 'play button';
      } else if (this.state.isPlaying && this.state.currentSong === song) {
        return <span className="icon ion-play"></span>;
      } else {
        return (index + 1);
      }
    }



  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
          <table id="song-list">
            <colgroup>
              <col id="song-number-column" />
              <col id="song-title-column" />
              <col id="song-duration-column" />
            </colgroup>
            <tbody>
             {
               this.state.album.songs.map((song, index) => {
                 return (
                   <tr className="song" key={index} onClick= {() => this.handleSongClick(song)}>
                     <td  onMouseEnter= {() => this.handleMouseHover(index)} onMouseLeave= {() => this.handleMouseLeave(index)}>
                      {this.renderIcon(index)}
                     </td>
                     <td>
                      {song.title}
                     </td>
                     <td>
                      {song.duration}
                     </td>
                    </tr>
                  )})
              }


            </tbody>
          </table>
      </section>
    );
  }
}

export default Album;
