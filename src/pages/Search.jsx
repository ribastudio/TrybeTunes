import React, { Component } from 'react';
import Loading from '../components/loading/Loading';
import Results from '../components/results/Results';
import './Search.css';
import searchAlbumsApi from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.loadingArtistAlbum = this.loadingArtistAlbum.bind(this);

    this.state = {
      album: '',
      inputUser: '',
      loading: false,
      results: false,
      NoneFind: '',
    };
  }

  handleChange({ target: { value } }) {
    this.setState({
      inputUser: value,
    });
  }

  async loadingArtistAlbum(input) {
    this.setState({
      loading: true,
    });
    const album = await searchAlbumsApi(input);
    if (album.length === 0) {
      this.setState({
        NoneFind: <h2 className="none_find">Nenhum álbum foi encontrado</h2>,
        loading: false,
        results: false,
      });
    } else {
      this.setState({
        NoneFind: '',
        loading: false,
        results: true,
      });
    }

    this.setState({
      results: true,
      album,
    });
  }

  render() {
    const onEnter = (event, callback) => event.key === 'Enter' && callback();
    const { inputUser, album, loading, results, NoneFind } = this.state;
    const minUserInputLength = 2;
    if (loading) {
      return <Loading />;
    }
    return (
      <>
        {/* { loading } */}
        <div data-testid="page-search" className="search-body">
          <section className="search-box">
            <input
              onChange={ this.handleChange }
              /*  Esta função utiliza o 'enter' para usar o input https://qastack.com.br/programming/31272207/to-call-onchange-event-after-pressing-enter-key */
              onKeyPress={ inputUser.length < minUserInputLength
                ? null : (e) => onEnter(e, () => this.loadingArtistAlbum(inputUser)) }
              data-testid="search-artist-input"
              placeholder="Insira o nome do artista"
              min="2"
            />
            <button
              className="search-btn"
              data-testid="search-artist-button"
              type="button"
              disabled={ inputUser.length < minUserInputLength }
              onClick={ () => this.loadingArtistAlbum(inputUser) }
            >
              Procurar
            </button>
          </section>
        </div>
        { NoneFind }
        {/* comparador binário: dica do Gustavo */}
        { loading && <Loading /> }
        { results
          ? <h2>
            Resultado de álbuns de "
            {inputUser}
            "
          </h2> : undefined }
        <ul className="slider">
          { results && album
            .map((eachAlbum, index) => <Results key={ index } data={ eachAlbum } />) }
        </ul>
      </>
    );
  }
}

export default Search;
