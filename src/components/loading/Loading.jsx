import React, { Component } from 'react';
import './loading.css';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <h2 className="loading-text">Carregando...</h2>
      </div>
    );
  }
}
