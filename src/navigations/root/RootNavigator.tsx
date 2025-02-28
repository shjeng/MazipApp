import React from 'react';
import AuthStackNavigator from '../stack/AuthStackNavigator.tsx';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator.tsx';

const RootNavigator = () => {
  const isLoggedIn = false;
  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
};

export default RootNavigator;
