import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../../screens/AuthHomeScreen.tsx';
import LoginScreen from '../../screens/LoginScreen.tsx';
import {authNavigations} from '../../constants';
import SignupScreen from '../../screens/SignupScreen.tsx';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();
const AuthStackNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
      />
      <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} />
      <Stack.Screen name={authNavigations.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({});

export default AuthStackNavigator;
