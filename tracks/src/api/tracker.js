import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance =  axios.create({
  baseURL: 'http://d5cef94c.ngrok.io'
});

// this ensures the token is automatically attached to our request each time
instance.interceptors.request.use(
  // called each time we are about to make a request
  async (oConfig) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      oConfig.headers.Authorization = `Bearer ${token}`;
    }

    return oConfig;
  }
  // called each time there is an error with the request (not necessarily with response)
  ,(err) => {
    return Promise.reject(err);
  }
);


export default instance;