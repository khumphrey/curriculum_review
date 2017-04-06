// Required libraries and modules
import axios from 'axios';
import { FETCH_TEAMS } from '../constants'

// ----------- Sync Action Creators
export const receiveTeams = (teams) => {
  return {
    type: FETCH_TEAMS,
    teams
  };
};

// ----------- Reducer
const initialState = {
  allTeams: []
};

export default function reducer (prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case FETCH_TEAMS:
      nextState.allTeams = action.teams;
      break;
    default:
      return prevState;
  }

  return nextState;
}

// ----------- Dispatchers / Async Action Creators
export const fetchTeams = () => {
  return (dispatch) => {
    axios.get('api/team/')
      .then(res => res.data)
      .then(teams => dispatch(receiveTeams(teams)))
      .catch(console.error);
  };
};
