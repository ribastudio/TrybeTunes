import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './results.css';

class Results extends Component {
  render() {
    const { data: { 
      artistName,
      collectionName,
      artworkUrl100,
      collectionId } } = this.props;
    // const { artistName,
    //   collectionName,
    //   artworkUrl100,
    //   collectionId } = this.state;
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
