import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

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

  render() {
    const { inputUser } = this.state;
    const minUserInputLength = 2;
    return (
      <div data-testid="page-search">
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
        >
          Procurar
        </button>
      </div>
    );
  }
}

export default Search;
