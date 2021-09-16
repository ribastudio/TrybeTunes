import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </BrowserRouter>
);

export default Routes;