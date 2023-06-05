import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  TextRegular,
  TextBold,
  TextMedium,
  Header,
  InputText,
} from '../../component/global';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import ModalBottom from '../../component/modal/ModalBottom';
import ModalCenter from '../../component/modal/ModalCenter';
import {NumberFormater, validateEmail} from '../../utils/Helpher';
import LoginComponent from '../../component/section/Auth/LoginComponent';

const Login = ({navigation, route}) => {
  const [modalBottom, setModalBottom] = useState(false);
  const [modalCenter, setModalCenter] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const onLogin = () => {
    const contohEmail = 'EkaPryhananto@gmail.com';
    if (!validateEmail(contohEmail)) {
      console.log('error');
    } else {
      console.log('berhasil');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TextRegular
        text={`${NumberFormater(100000, 'Rp. ')}`}
        size={16}
        color={Colors.BLACK}
        style={{marginTop: 20, marginLeft: 20}}
      />
      <TouchableOpacity
        style={styles.btnShowModalBottom}
        onPress={() => setModalBottom(true)}>
        <TextBold text="Modal Bottom" size={16} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btnShowModalBottom,
          {backgroundColor: Colors.DEEPORANGE},
        ]}
        onPress={() => setModalCenter(true)}>
        <TextBold text="Modal Center" size={16} color="#fff" />
      </TouchableOpacity>
      <ModalBottom
        show={modalBottom}
        onClose={() => setModalBottom(false)}
        title="Modal Bottom">
        <View>
          <TextBold text="Ini text Bold" />
          <TextRegular text="Ini text Regular" style={{marginVertical: 20}} />
          <TextMedium text="Ini text Medium" />
        </View>
      </ModalBottom>
      <ModalCenter
        show={modalCenter}
        onClose={() => setModalCenter(false)}
        title="Modal Center">
        <View>
          <TextBold text="Ini text Bold" />
          <TextRegular text="Ini text Regular" style={{marginVertical: 20}} />
          <TextMedium text="Ini text Medium" />
        </View>
      </ModalCenter>
      <LoginComponent
        navigation={navigation}
        email={email}
        setEmail={text => setEmail(text)}
        password={password}
        setPassword={text => setPassword(text)}
        hidePassword={hidePassword}
        setShowPassword={() => setHidePassword(prevState => !prevState)}
        onPressLogin={() => onLogin()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnShowModalBottom: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: Colors.PRIMARY,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default Login;
