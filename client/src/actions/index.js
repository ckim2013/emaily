import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios.get('/api/current_user')
         .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};

// vs

// const getUser = user => ({
//   type: FETCH_USER,
//   payload: user
// });
//
// const fetchUser = () => dispatch => (
//   axios.get('/api/current_user')
//        .then(res => dispatch(getUser(res)))
// );
