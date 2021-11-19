import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Main from './views/Main'
import Detail from './views/Detail';
import Create from './views/Create';
import MyList from './views/MyList';
import RandomTen from './views/RandomTen';
import SearchByName from './views/SearchByName';
import SearchByPopularity from './views/SearchByPopularity';
import SearchByIngredient from './views/SearchByIngredient';
import Error from './views/Error';
import Navbar from "./components/Navbar"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/mylist">
            <MyList />
          </Route>
          <Route exact path="/randomten">
            <RandomTen />
          </Route>
          <Route exact path="/searchbyname">
            <SearchByName />
          </Route>
          <Route exact path="/searchbyname/:nameParam">
            <SearchByName />
          </Route>
          <Route exact path="/searchbypopularity">
            <SearchByPopularity />
          </Route>
          <Route exact path="/searchbyingredient">
            <SearchByIngredient />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/drinks/:id">
            <Detail />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
