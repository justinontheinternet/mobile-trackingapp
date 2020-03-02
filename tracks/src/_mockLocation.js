// this is a file for testing purposes only. would never want in production.

// importing a bunch of functions in one variable
import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 10000000
    ,coords: {
      speed: 0
      ,heading: 0
      ,accuracty: 5
      ,altitudeAccuracy: 5
      ,altitude: 5
      ,longitude: -122.0312186 + increment * tenMetersWithDegrees
      ,latitude: 37.33233141 + increment * tenMetersWithDegrees
    }
  };
};

// emit an event every second with a new location, into the Location library
let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId()
    ,location: getLocation(counter)
  });
  counter++;
}, 1000);