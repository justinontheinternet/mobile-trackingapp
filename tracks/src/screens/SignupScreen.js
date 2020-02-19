import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);
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
      {state.errorMessage ? <Text style={styles.errorMessage} >{state.errorMessage}</Text> : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signUp({email, password})} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')} >
        <Spacer>
          <Text style={styles.link} >Already have an account? Sign in!</Text>
        </Spacer>
      </TouchableOpacity>
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
  ,errorMessage: {
    fontSize: 16
    ,color: 'red'
    ,marginLeft: 15
    ,marginTop: 15
  }
  ,link: {
    color: 'blue'
  }
});

export default SignupScreen;
