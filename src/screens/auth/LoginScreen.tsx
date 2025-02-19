import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputField from '../../components/InputField.tsx';

const LoginScreen = () => {
  // const [email, setEmail] = useState('');
  // const handelChangeEmail = (text: string) => {
  //   setEmail(text);
  // };
  // const [password, setPassword] = useState('');
  // const handleChangePassword = (text: string) => {
  //   setPassword(text);
  // };
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const handleChangeText = (name: string, text: string) => {
    setValues({
      ...values,
      [name]: text,
    });
  };
  const handleBlur = (name: string) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder={'이메일'}
          error={'이메일을 입력하세요.'}
          touched={touched.email}
          inputMode={'email'}
          /*InputMode: 키패드에 이메일을 추가 */
          value={values.email}
          onChangeText={text => handleChangeText('email', text)}
          onBlur={() => handleBlur('email')}
          /* ✅ 사용자가 입력 필드에서 벗어날 때(탭하거나 다른 곳을 클릭할 때) 실행됨.
           * ✅ onFocus가 반대로, 입력 필드를 클릭해서 포커스를 얻었을 때 실행됨.
           * ✅ 입력 검증, 입력 필드의 touched 상태 변경 등에 사용됨.
           *
           * */
        />

        <InputField
          placeholder={'비밀번호'}
          error={'비밀번호를 입력하세요.'}
          touched={touched.password}
          secureTextEntry /* 비밀번호 속성 */
          value={values.password}
          onChangeText={text => handleChangeText('password', text)}
          onBlur={() => handleBlur('password')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});

export default LoginScreen;
