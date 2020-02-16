import React from 'react';
import { View, StyleSheet } from 'react-native';

// this is a helper component that is intended to only provide some spacing around other, child components
const Spacer = ({ children }) => {
  return (
    <View style={styles.spacer} >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});

export default Spacer;