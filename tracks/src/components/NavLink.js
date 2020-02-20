import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
// allows direct access to navigation prop when this component is a child of a component rendered by Navigation component
// alternative to passing navigation prop to children
// not using navigationRef because we want to use direct React-Native solutions when possible
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, linkText, routeName }) => {
  console.log('navigation is ', navigation);
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)} >
      <Spacer>
        <Text style={styles.link}>{linkText}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
});

export default withNavigation(NavLink);