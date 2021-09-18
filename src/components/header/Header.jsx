import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import Loading from '../loading/Loading';
import TrybeLogo from '../../assets/logo.png';
import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      userLogged: '',
      logged: false,
    };

    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  async loadUser() {
    const user = await getUser();
    const { name: userLogged } = user;
    this.setState({
      userLogged,
      logged: true,
    });
  }

  render() {
    const { userLogged, logged } = this.state;
    return (
      <header data-testid="header-component">
        <Link to="/search">
          <img className="header_img" src={ TrybeLogo } alt="TrybeTunes" />
        </Link>
        <nav>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profiles</Link>
        </nav>
        <section className="user_area">
          <Link to="/profile">
            <span
              data-testid="header-user-name"
              className="user_name"
            >
              { logged ? userLogged : <Loading /> }
            </span>
          </Link>
        </section>
      </header>
    );
  }
}

export default Header;
