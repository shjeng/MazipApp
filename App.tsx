import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './src/navigation/AuthStackNavigator.tsx';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

// flexDirection이 column이 기본
// display: flex는 생략해도 됨.

export default App;
