import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import InputField from '../../components/InputField.tsx';
import CustomButton from '../../components/CustomButton.tsx';
import useForm from '../../hooks/useForm.ts';
import {validateLogin} from '../../utils';

const LoginScreen = () => {
  const login = useForm({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });

  login.getTextInputProps('email');
  const handleSubmit = () => {
    console.log(login.values);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder={'이메일'}
          error={login.errors.email}
          touched={login.touched.email}
          inputMode={'email'}
          {...login.getTextInputProps('email')}
        />

        <InputField
          placeholder={'비밀번호'}
          error={login.errors.password}
          touched={login.touched.password}
          secureTextEntry /* 비밀번호 속성 */
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton
        label={'로그인'}
        variant={'filled'}
        size={'large'}
        onPress={handleSubmit}
      />
      .
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
    marginBottom: 30,
  },
});

export default LoginScreen;
