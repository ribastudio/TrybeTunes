import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './results.css';

class Results extends Component {
  render() {
    const { data: {
      artistName,
      collectionName,
      artworkUrl100,
      collectionId } } = this.props;
    return (
      <li className="slider-li">
        <Link
          to={ `album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <img className="slider-img" src={ artworkUrl100 } alt={ artworkUrl100 } />
          <h2 className="slider-h2">{ artistName }</h2>
          <h2 className="album_subtitle">{ collectionName }</h2>
        </Link>
      </li>
    );
  }
}

export default Results;

Results.propTypes = {
  data: PropTypes.shape({
    artistName: PropTypes.string,
    trackName: PropTypes.string,
    collectionName: PropTypes.string,
    previewUrl: PropTypes.string,
    artworkUrl100: PropTypes.string,
    collectionId: PropTypes.number,
  }).isRequired,
};
