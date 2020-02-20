import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Sign Up for Tracker"
        errorMessage={ state.errorMessage }
        submitButtonText="Sign Up"
        // onSubmit={({ email, password }) => signUp({ email, password })} this is equal to below
        onSubmit={signUp}
      />
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
  ,link: {
    color: 'blue'
  }
});

export default SignupScreen;
