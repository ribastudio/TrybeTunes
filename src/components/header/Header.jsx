import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import Loading from '../loading/Loading';
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
      <header>
        <p>Header</p>
        <section>
          <span>{ logged ? userLogged : <Loading /> }</span>
        </section>
        <nav>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profiles</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
