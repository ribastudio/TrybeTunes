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
    const onEnter = (event, callback) => event.key === 'Enter' && callback();
    if (loading) {
      return <Loading />;
    }

    if (logged) {
      return <Redirect to="/search" />;
    }

    const minUserInputLength = 3;
    return (
      <div>
        <section className="section" data-testid="page-login">
          <div className="column-img">
            <img src={ TrybeLogo } alt="TrybeTunes" />
          </div>
          <div className="login_box">
            <div className="login_inside">
              <input
                name="input-login"
                data-testid="login-name-input"
                onChange={ this.handleChange }
                /*  Esta função utiliza o 'enter' para usar o input https://qastack.com.br/programming/31272207/to-call-onchange-event-after-pressing-enter-key */
                onKeyPress={ inputUser.length < minUserInputLength
                  ? null : (e) => onEnter(e, () => this.createNewUser(inputUser)) }
                status={ loading }
                placeholder="Insira seu nome"
              />
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
          </div>
        </section>
      </div>
    );
  }
}

// Login.propTypes = {
//   inputUser: PropTypes.object.isRequired,
// };

export default Login;
