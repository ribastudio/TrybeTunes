import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../../services/favoriteSongsAPI';
import './music-card.css';
import Loading from '../loading/Loading';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      checked: false,
      loading: false,
    };
  }

  // Desenvolvida em conjunto com a Helena Greco - 14B, durante call na madruga.

  loadFavorites = async ({ target }) => {
    const { data } = this.props;
    this.setState({ loading: true });

    if (target.checked) {
      await addSong(data);
      this.setState({
        loading: false,
        checked: true,
      });
    }
  }

  render() {
    const { data: { trackName, trackId, previewUrl } } = this.props;
    const { checked, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="track-items">
        <h3 className="title-music">{ trackName }</h3>
        <div>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            <code>audio</code>
            .
          </audio>
        </div>
        <label
          className="favorite-label"
          htmlFor={ trackId }
          data-testid={ `checkbox-music-${trackId}` }
        >
          Favorita
          <input
            type="checkbox"
            id={ trackId }
            onChange={ this.loadFavorites }
            checked={ checked }
          />
        </label>
      </div>
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  data: PropTypes.shape({
    trackId: PropTypes.number,
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
  }).isRequired,
};
