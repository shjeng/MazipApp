import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import InputField from '../../components/InputField.tsx';
import useForm from '../../hooks/useForm.ts';
import CustomButton from '../../components/CustomButton.tsx';
import {validateSignup} from '../../utils';

const SignupScreen = () => {
  const signup = useForm({
    initialValue: {email: '', password: '', passwordConfirm: ''},
    validate: validateSignup,
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder={'이메일'}
          error={signup.errors.email}
          touched={signup.touched.email}
          inputMode={'email'}
          {...signup.getTextInputProps('email')}
        />

        <InputField
          placeholder={'비밀번호'}
          error={signup.errors.password}
          touched={signup.touched.password}
          secureTextEntry /* 비밀번호 속성 */
          {...signup.getTextInputProps('password')}
        />
        <InputField
          placeholder={'비밀번호 확인'}
          error={signup.errors.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          secureTextEntry /* 비밀번호 속성 */
          {...signup.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label={'회원가입'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  }
});

export default SignupScreen;
