import React, { useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';


// MapView component is very similar to an image in that it has no dimension unless assigned
const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  // temp code only for testing
  // let points = [];
  // for (let i = 0; i < 20; i++) {
  //   if (i % 2 === 0) {
  //     points.push({
  //       latitude: 37.33233 + i * 0.001
  //       ,longitude: -122.03121 + i * 0.001
  //     });
  //   } else {
  //     points.push({
  //       latitude: 37.33233 - i * 0.002
  //       ,longitude: -122.03121 + i * 0.001
  //     });
  //   }
  // }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords
        ,latitudeDelta: 0.01
        ,longitudeDelta: 0.01
      }}
      region={{
        ...currentLocation.coords
        ,latitudeDelta: 0.01
        ,longitudeDelta: 0.01
      }}
    >
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
