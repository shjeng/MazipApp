import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../screens/AuthHomeScreen.tsx';
import LoginScreen from '../screens/LoginScreen.tsx';
import {authNavigations} from '../constants';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
};

const AuthStackNavigator = () => {
  const Stack = createStackNavigator<AuthStackParamList>();
  /*
  createStackNavigator란? (React Navigation에서 Stack Navigator의 역할)
  createStackNavigator는 React Navigation 라이브러리에서 화면을 "스택(Stack)" 방식으로 관리하는 네비게이션 컨테이너를 생성하는 함수입니다.
  즉, 사용자가 여러 화면을 이동할 때 이전 화면이 사라지지 않고 스택처럼 쌓이는 구조를 관리합니다.
*/

  /*
  * 설명
  createStackNavigator<AuthStackParamList>()
  createStackNavigator를 호출하여 Stack Navigator 객체(Stack)를 생성.
  <AuthStackParamList>는 타입스크립트에서 네비게이션에 전달할 수 있는 매개변수를 타입으로 정의하는 역할 (TSX 코드일 경우).
  * */

  return (
    <Stack.Navigator>
      <Stack.Screen name={authNavigations.AUTH_HOME} component={AuthHomeScreen} /> {/* name: 해당 화면의 이름 ( navigation.navigate("AUTH_HOME")로 이동 가능) */}
      <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({});

export default AuthStackNavigator;
