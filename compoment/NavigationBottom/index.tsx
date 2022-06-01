import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BodyHome from '../body/home/BodyHome';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AppSearch from '../body/AppSearch';

const Tab: any = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarHideOnKeyboard: 'true',
      }}>
      <Tab.Screen
        name="Home"
        component={BodyHome}
        options={{
          headerShown: false,
          tabBarIcon: () => <Foundation name="home" size={30} color={'#000'} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={AppSearch}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <EvilIcons name="search" size={30} color={'#000'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;