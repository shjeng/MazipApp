import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/map/MapHomeScreen.tsx';
import FeedHomeSccreen from '../../screens/feed/FeedHomeSccreen.tsx';
import CalendarHomeScreen from '../../screens/calendar/CalendarHomeScreen.tsx';

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
