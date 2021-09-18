import React, { Component } from 'react';
import getMusics from '../../services/musicsAPI';
import './album.css';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
    };
  }

  async getArtist(id) {
    const musicList = await getMusics(id);
    console.log(musicList);
    this.setState = ({
      artistName: '',
    });
  }

  render() {
    const {  } = this.state;
    return (
      <div>
        <h2
          className=""
          data-testid="artist-name"
        >
          { artistName }
        </h2>
        <h2
          className=""
          data-testid="album-name"
        >
          { albumName }
        </h2>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </div>
    );
  }
}

export default Album;
