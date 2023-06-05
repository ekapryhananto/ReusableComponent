import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {InputText, TextBold, TextRegular} from '../../global';
import {Colors} from '../../../styles';

const LoginComponent = ({
  navigation,
  email,
  setEmail,
  password,
  setPassword,
  hidePassword,
  setShowPassword,
  onPressLogin,
}) => {
  return (
    <View>
      <TextBold
        text="Login"
        size={20}
        color={Colors.BLACK}
        style={{marginTop: 20, alignSelf: 'center'}}
      />
      <InputText
        placeholderText="Masukkan Email"
        style={styles.inputText}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <InputText
        placeholderText="Masukkan Password"
        style={styles.inputText}
        onChangeText={text => setPassword(text)}
        value={password}
        isPassword={true}
        hidePassword={hidePassword}
        setShowPassword={setShowPassword}
      />
      <TouchableOpacity style={styles.btnLogin} onPress={onPressLogin}>
        <TextRegular text="Log In" color={Colors.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  btnLogin: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginComponent;
