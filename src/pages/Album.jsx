import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Header from '../components/header/Header';
import MusicCard from '../components/musiccard/MusicCard';
import Loading from '../components/loading/Loading';
import './album.css';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musicList: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fillMusicList();
  }

  async fillMusicList() {
    const { match: { params: { id } } } = this.props;
    // this.setState({ loading: true });
    console.log(id);
    const music = await getMusics(id);
    console.log('music aqui', music);
    this.setState({
      musicList: music,
      loading: false,
    });
  }

  render() {
    const { musicList, loading } = this.state;
    console.log(musicList);
    if (loading) {
      return <Loading />;
    }
    return (
      <>
        <Header />
        <section>
          <img src={ musicList[0].artworkUrl100 } alt="Capa do álbum" />
          <h2 data-testid="album-name">{ musicList[0].collectionName }</h2>
          <h3 data-testid="artist-name">{musicList[0].artistName}</h3>
          <div>
            {/* Dica do Matheus Henrique durante call, depois pegar esta dica do Pessini no Slack */}
            { musicList.slice(1)
              .map((eachMusic, i) => <MusicCard key={ i } data={ eachMusic } />)}
          </div>
        </section>
      </>
    );
  }
}

export default Album;

// Dica da Helena Greco, durante sala de estudos, seguindo dicas da documentação.

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
