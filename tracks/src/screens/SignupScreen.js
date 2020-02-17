import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  const [ email, setEmail ]  = useState('');
  const [ password, setPassword ]  = useState('');

  return (
    <View style={styles.container}>
      <Spacer><Text h4>Sign Up for Tracker</Text></Spacer>
      <Input
        label="Email"
        value={email}
        // onChangeText={(newEmail) => setEmail(newEmail) }
        onChangeText={setEmail } // equivalent to above
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        // secureTextEntry={true}
        secureTextEntry // equivalent to above
      />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    ,justifyContent: 'center'
    ,marginBottom: 200
  }
});

export default SignupScreen;
