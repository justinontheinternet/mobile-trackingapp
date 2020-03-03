import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const startRecording = (dispatch) => {
  return () => {

  };
};

const stopRecording = dispatch => () => {};

const addLocation = dispatch => () => {};

export const { Context, Provider } = createDataContext(
  locationReducer
  ,{ startRecording, stopRecording, addLocation }
  ,{ recording: false, locations: [], currentlocation: null }
);