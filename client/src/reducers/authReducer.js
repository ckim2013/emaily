import { FETCH_USER } from '../actions/types';

// We make the state default to null to signify that we do not know
// if the user is logged in or not. This is to make sure a person with slow
// internet connection doesn't see some funky UI transitions.
export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
