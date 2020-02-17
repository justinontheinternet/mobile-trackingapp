import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = createDataContext(
  authReducer // reducer
  ,{} // object with action functions
  ,{ isSignedIn: false } // initial state
);