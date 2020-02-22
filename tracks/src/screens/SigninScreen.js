import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        // onWillFocus={() => {}} // about to land on this screen
        // onDidFocus={() => {}} // just landed on this screen
        onWillBlur={clearErrorMessage} // about to navigate away from this screen
        // onDidBlur={() => {}} // just navigated away from this screen (buggy?)
      />
      <AuthForm 
        headerText="Sign in to Tracker"
        errorMessage={ state.errorMessage }
        submitButtonText="Sign In"
        // onSubmit={({ email, password }) => signIn({ email, password })} this is equal to below
        onSubmit={signIn}
      />
      <NavLink
        linkText="Don't have an account? Sign up!"
        routeName="Signup"
      />
    </View>
  );
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
