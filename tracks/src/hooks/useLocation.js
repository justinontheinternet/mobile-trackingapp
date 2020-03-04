import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (callback) => {
  const [error, setError] = useState(null);

  const startWatching = async() => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation  // more accuracy means more bettery consumption
          ,timeInterval: 1000 // once every second
          ,distance: 10 // or every 10 metres
        }
        ,callback
      );
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [error];
};
