import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

// MapView component is very similar to an image in that it has no dimension unless assigned
const Map = () => {
  // temp code only for testing
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 37.33233 + i * 0.001
        ,longitude: -122.03121 + i * 0.001
      });
    } else {
      points.push({
        latitude: 37.33233 - i * 0.002
        ,longitude: -122.03121 + i * 0.001
      });
    }
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 43.717798
        ,longitude: -79.803029
        ,latitudeDelta: 0.01
        ,longitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
