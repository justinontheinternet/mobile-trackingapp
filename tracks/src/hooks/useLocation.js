import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);
  // const [subscriber, setSubscriber] = useState(null);

  // to help avoid stale references, useEffect should never reference state, props, or context values
  // without adding them to the dependency list.
  // 'setter' functions for state values are okay to reference
  useEffect(() => {
    let subscriber;
    // generally not good to define helper functions (like startWatching)
    // that reference state, props, or context values as they may change over time and introduce bugs
    // better to define them inside of useEffect so we can easily see the references we should
    // add to the useEffect dependency list
    const startWatching = async() => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
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


    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [error];
};
