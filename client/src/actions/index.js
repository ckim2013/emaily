import axios from 'axios';
import { FETCH_USER } from './types';

// export const fetchUser = () => {
//   return function(dispatch) {
//     axios.get('/api/current_user')
//          .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
//   };
// };

// vs

// const getUser = user => ({
//   type: FETCH_USER,
//   payload: user
// });
//
// const fetchUser = () => dispatch => (
//   axios.get('/api/current_user')
//        .then(res => dispatch(getUser(res.data)))
// );

// es2017!!
// export const fetchUser = () => async dispatch => {
//   const res = await axios.get('/api/current_user');
//   dispatch({ type: FETCH_USER, payload: res.data });
// }
// which can be further reduced to...
// export const fetchUser = () => async dispatch => (
//   dispatch({
//     type: FETCH_USER,
//     payload: (await axios.get('/api/current_user')).data
//   })
// )

export const fetchUser = () => async dispatch => {
  try {
    dispatch({
      type: FETCH_USER,
      payload: (await axios.get('/api/current_user')).data
    });
  } catch (error) {
    console.log('ERROR!', error);
  }
}

export const handleToken = token => async dispatch => {
  try {
    const res = await axios.post('/api/stripe');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    console.log('ERROR!', error);
  }
}
