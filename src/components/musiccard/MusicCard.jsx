import React, { Component } from 'react';

class MusicCard extends Component {
  render() {
    const { data: { artistName, trackName, collectionName, previewUrl } } = this.props;
    return (
      <div>
        <h2 data-testid="artist-name">{ artistName }</h2>
        <h2 data-testid="album-name">{ collectionName }</h2>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
      </div>
    );
  }
}

export default MusicCard;
