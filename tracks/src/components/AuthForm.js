import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [ email, setEmail ]  = useState('');
  const [ password, setPassword ]  = useState('');

  // could use React fragment (<>  </>) instead of View, but IDE theme does not match
  return (
    <View> 
      <Spacer>
        <Text h4>{headerText}</Text>
      </Spacer>
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
      {errorMessage ? <Text style={styles.errorMessage} >{errorMessage}</Text> : null}
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({email, password})} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16
    ,color: 'red'
    ,marginLeft: 15
    ,marginTop: 15
  }
});

export default AuthForm;