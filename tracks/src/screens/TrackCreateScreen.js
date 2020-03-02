import '../_mockLocation';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);

  const startWatching = async() => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation  // more accuracy means more bettery consumption
        ,timeInterval: 1000 // once every second
        ,distance: 10 // or every 10 metres
      }, (location) => {
        // console.log(location);
      });
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>Please enable location services.</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;
