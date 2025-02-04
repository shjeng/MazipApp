import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/MapHomeScreen.tsx';
import FeedHomeSccreen from '../../screens/FeedHomeSccreen.tsx';
import CalendarHomeScreen from '../../screens/CalendarHomeScreen.tsx';

const Drawer = createDrawerNavigator();
const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={'MapHome'} component={MapHomeScreen} />
      <Drawer.Screen name={'FeedHome'} component={FeedHomeSccreen} />
      <Drawer.Screen name={'CalendarHome'} component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
