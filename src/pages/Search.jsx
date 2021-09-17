import React, { Component } from 'react';
import './Search.css';
import searchAlbumsApi from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.loadingArtistAlbum = this.loadingArtistAlbum.bind(this);

    this.state = {
      inputUser: '',
    };
  }

  handleChange({ target: { value } }) {
    console.log(value);
    this.setState({
      inputUser: value,
    });
  }

  async loadingArtistAlbum({ inputUser }) {
    const album = await searchAlbumsApi(inputUser)
      .then((albumSearch) => album.filter(albumSearch));
    console.log(album);
  }

  render() {
    const { inputUser } = this.state;
    const minUserInputLength = 2;
    return (
      <div data-testid="page-search" className="search-body">
        <h1>Search</h1>
        <input
          onChange={ this.handleChange }
          data-testid="search-artist-input"
        />
        <button
          className="search-btn"
          data-testid="search-artist-button"
          type="button"
          disabled={ inputUser.length < minUserInputLength }
          onClick={ this.loadingArtistAlbum }
        >
          Procurar
        </button>
      </div>
    );
  }
}

export default Search;
