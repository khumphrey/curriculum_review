// Required libraries and modules
import axios from 'axios';
import { FETCH_GAMES } from '../constants'

// ----------- Sync Action Creators
export const receiveGames = (games) => {
  return {
    type: FETCH_GAMES,
    games
  };
};

// ----------- Reducer
const initialState = {
  allGames: []
};

export default function reducer (prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case FETCH_GAMES:
      nextState.allGames = action.games;
      break;
    default:
      return prevState;
  }

  return nextState;
}

// ----------- Dispatchers / Async Action Creators
export const fetchGames = () => {
  return (dispatch) => {
    axios.get('api/game/')
      .then(res => res.data)
      .then(games => dispatch(receiveGames(games)))
      .catch(console.error);
  };
};
