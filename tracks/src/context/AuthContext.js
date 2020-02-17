import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign up with email and password
    try {
      // if we sign up, modify our state, and say that we are authenticated
      const response = await trackerApi.post('/signup', {email, password});

      console.log(response.data);
    } catch (err) {
        // if fails, show error message
        dispatch({ type: 'add_error', payload: 'Something went wrong.' });
    }
  };
};

const signIn = (dispatch) => {
  return ({ email, password }) => {
    // try to sign in

    // handle success by updating state

    // handle failure with error message
  };
};

const signOut = (dispatch) => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer // reducer
  ,{signUp, signIn, signOut} // object with action functions
  ,{ isSignedIn: false, errorMessage: '' } // initial state
);