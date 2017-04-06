// Required libraries and modules
import axios from 'axios';
import { FETCH_PLAYERS } from '../constants'

// ----------- Sync Action Creators
export const receivePlayers = (players) => {
  return {
    type: FETCH_PLAYERS,
    players
  };
};

// ----------- Reducer
const initialState = {
  allPlayers: []
};

export default function reducer (prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case FETCH_PLAYERS:
      nextState.allPlayers = action.players;
      break;
    default:
      return prevState;
  }

  return nextState;
}

// ----------- Dispatchers / Async Action Creators
export const fetchPlayers = () => {
  return (dispatch) => {
    axios.get('api/player/')
      .then(res => res.data)
      .then(players => dispatch(receivePlayers(players)))
      .catch(console.error);
  };
};
