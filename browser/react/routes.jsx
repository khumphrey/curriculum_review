// Required libraries
import React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { connect } from 'react-redux';

// Required files
import store from './store';
import Players from './components/Players.jsx';
import Splash from './components/Splash.jsx';
import Games from './components/Games.jsx';
import Teams from './components/Teams.jsx';
import Home from './components/Home.jsx';

// ------------ Component
const Root = (props) => (
    <Router history={ browserHistory }>
      <Route path="/" component={ Home }>
        <Route path="/players" component={ Players } onEnter={ props.newFetchPlayers }/>
        <Route path="/games" component={ Games } onEnter={ props.newFetchGames }/>
        <Route path="/teams" component={ Teams } onEnter={ props.newFetchTeams }/>
        <IndexRoute component={ Splash } />
      </Route>
    </Router>
  );

// ------------ Container Component

// Required files
import { fetchPlayers } from './reducers/players';
import { fetchGames } from './reducers/games';
import { fetchTeams } from './reducers/teams';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    newFetchPlayers: () => dispatch(fetchPlayers()),
    newFetchGames: () => dispatch(fetchGames()),
    newFetchTeams: () => dispatch(fetchTeams())
  });

// Alternative
// const mapDispatchToProps = { newFetchPlayers: fetchPlayers }; //wrapping happens behind the scenes by react-redux

export default connect(mapStateToProps, mapDispatchToProps)(Root);
