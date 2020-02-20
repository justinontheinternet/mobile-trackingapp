import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
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
      <NavLink
        linkText="Already have an account? Sign in!"
        routeName="Signin"
      />
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
