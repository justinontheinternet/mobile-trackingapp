import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

// this mimics the flow of our app navigators
// case naming convention by choice differentiates screens and flows
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen // will show up first because it's first
  ,loginFlow: createStackNavigator({
    Signup: SignupScreen
    ,Signin: SigninScreen
  })
  ,mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen
      ,TrackDetail: TrackDetailScreen
    })
    ,TrackCreate: TrackCreateScreen
    ,Account: AccountScreen
  })
}
// first screen could also be done like this
// ,{
//   initialRouteName: ResolveAuthScreen
// }
);

// export default createAppContainer(switchNavigator);
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </AuthProvider>
    </LocationProvider>
  );
};
