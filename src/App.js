import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Album from './pages/Album';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import ProfileEdit from './pages/ProfileEdit';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="*">
            <NotFound />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="profile">
            <Profile />
          </Route>
          <Route path="album/:id">
            <Album />
          </Route>
          <Route path="favorites">
            <Favorites />
          </Route>
          <Route path="search">
            <Search />
          </Route>
          <Route path="profile/edit">
            <ProfileEdit />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
