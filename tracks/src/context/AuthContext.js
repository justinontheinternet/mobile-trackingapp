import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error':
      return { ...state, errorMessage: '' };
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: ''}
    default:
      return state;
  }
};

// this syntax could also be used with SignUp/SignIn functions if preferred
const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error' });
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token})
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
};

const signUp = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign up with email and password
    try {
      // if we sign up, modify our state, and say that we are authenticated
      const response = await trackerApi.post('/signup', {email, password});
      
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });

      // navigate to main flow
      navigate('TrackList');
    } catch (err) {
      // if fails, show error message
      dispatch({ type: 'add_error', payload: 'Something went wrong.' });
    }
  };
};

const signIn = (dispatch) => {
  return async ({ email, password }) => {
    // try to sign in
    try {
      const response = await trackerApi.post('/signin', {email, password});

      // handle success by updating state
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });

      navigate('TrackList');
    } catch (err) {
      // handle failure with error message
      dispatch({ type: 'add_error', payload: 'Something went wrong.' });
    }
  };
};

const signOut = (dispatch) => {
  return async () => {
    // sign out
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout'});

    navigate('loginFlow');
  };
};

export const { Provider, Context } = createDataContext(
  authReducer // reducer
  ,{signUp, signIn, signOut, clearErrorMessage, tryLocalSignIn} // object with action functions
  ,{ token: null, errorMessage: '' } // initial state
);