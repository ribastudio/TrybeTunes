import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Album from './pages/Album';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import ProfileEdit from './pages/ProfileEdit';
import Header from './components/header/Header';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/search">
            <Header />
            <Search />
          </Route>
          <Route path="/album/:id">
            <Album />
          </Route>
          <Route path="/favorites">
            <Header />
            <Favorites />
          </Route>
          <Route exact path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/profile/edit">
            <Header />
            <ProfileEdit />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
