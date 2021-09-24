import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLogin} from '../store/action';

//Components
import {Input, Button} from '../components';

//Utils
import {EmailValid} from '../utils';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
    let validEmail = EmailValid(email);
    if (!email) return alert('Enter email.');
    if (!validEmail) return alert('Enter correct email.');
    if (!password) return alert('Enter password.');
    if (password.length < 8) return alert('Atleast 8 characters in Password.');
    dispatch(setLogin(true));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View>
        <Input
          inputStyling={styles.inputText}
          onChangeText={e => setEmail(e)}
          value={email}
          iconName="mail"
          placeholder="Email"
          styling={styles.inputContainer}
        />
        <Input
          secureTextEntry={true}
          inputStyling={styles.inputText}
          onChangeText={e => setPassword(e)}
          value={password}
          iconName="key"
          placeholder="Password"
          styling={styles.inputContainer}
        />
        <Button onPress={submit} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'AdobeFanHeitiStd-Bold',
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputText: {
    color: '#000',
    fontFamily: 'AdobeFanHeitiStd-Bold',
  },
});
