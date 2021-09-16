import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import TrybeLogo from '../assets/logo.png';
import { createUser } from '../services/userAPI';
import Loading from '../components/loading/Loading';
import './Login.css';
// Aprendendo a importar a imagem que não esteja no diretorio public do React https://daveceddia.com/react-image-tag/

class Login extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.createNewUser = this.createNewUser.bind(this);

    this.state = {
      inputUser: '',
      loading: false,
      logged: false,
    };
  }

  handleChange({ target: { value } }) {
    this.setState({
      inputUser: value,
    });
  }

  async createNewUser(user) {
    this.setState({
      loading: true,
    });
    await createUser({ name: user });

    this.setState({
      loading: false,
      logged: true,
    });
  }

  render() {
    const { inputUser, loading, logged } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (logged) {
      return <Redirect to="/search" />;
    }

    const minUserInputLength = 3;
    return (
      <section className="section" data-testid="page-login">
        <img src={ TrybeLogo } alt="TrybeTunes" />
        <div className="login_box">
          <h1 className="login_title">Insira seu usuário</h1>
          <label htmlFor="input-login">
            <input
              name="input-login"
              data-testid="login-name-input"
              onChange={ this.handleChange }
              status={ loading }
            />
            Insira seu nome
          </label>
          <button
            className="enter-btn"
            type="button"
            data-testid="login-submit-button"
            // Dica durante room com o Diogo Fiuza
            disabled={ inputUser.length < minUserInputLength }
            onClick={ () => this.createNewUser(inputUser) }
          >
            Entrar
          </button>
        </div>
      </section>
    );
  }
}

// Login.propTypes = {
//   inputUser: PropTypes.object.isRequired,
// };

export default Login;
