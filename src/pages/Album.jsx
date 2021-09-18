import React, { Component } from 'react';
import getMusics from '../services/musicsAPI';
import Header from '../components/header/Header';
import './album.css';
import MusicCard from '../components/musiccard/MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      musicList: [],
    };
  }

  componentDidMount() {
    this.fillMusicList();
  }

  async fillMusicList() {
    const { match: { params: { id } } } = this.props;
    const music = await getMusics(id);
    // console.log(musicList);
    this.setState({
      musicList: music,
    });
  }

  render() {
    const { musicList } = this.state;
    return (
      <>
        <Header />
        <section>
          <img src={ musicList[0].artworkUrl100 } alt="Capa do álbum" />
          <h2 data-testid="album-name">{ musicList[0].collectionName }</h2>
          <h3 data-testid="artist-name">{musicList[0].trackName}</h3>
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
