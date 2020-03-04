import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  // location currently comes from _mockLocation.js
  // const [err] = useLocation((location) => addLocation(location));
  const [error] = useLocation(addLocation); // same as line above

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
