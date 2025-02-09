import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator.tsx';
import {authNavigations} from '../../constants';
import CustomButton from '../../components/CustomButton.tsx';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <CustomButton
          label="로그인하기"
          size={'medium'}
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입하기"
          variant={'outlined'}
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    color: 'blue',
  },
});

export default AuthHomeScreen;
