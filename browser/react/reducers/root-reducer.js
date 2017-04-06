// Required libraries
import { combineReducers } from 'redux';

// Required files
import playerReducer from './players';
import gamesReducer from './games';
import teamReducer from './teams';

export default combineReducers({
  players: playerReducer,
  games: gamesReducer,
  teams: teamReducer
});
