import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BodyHome from '../body/home/BodyHome';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppSearch from '../body/AppSearch';
import {GetDataMusic} from '../redux/Reduce';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import Library from '../profile/Library';
import {ImageBackgroundComponent} from 'react-native';

const Tab: any = createBottomTabNavigator();

function MyTabs() {
  const dispatch = useDispatch();

  // nap du lieu vao store
  useEffect(() => {
    firestore()
      .collection('SpotifiMusic')
      .doc('dbmusics')
      .onSnapshot(documentSnapshot => {
        dispatch(GetDataMusic(documentSnapshot.data()));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarHideOnKeyboard: 'true',
        tabBarActiveBackgroundColor: '#000',
        tabBarInactiveBackgroundColor: '#000',
      }}>
      <Tab.Screen
        name="Home"
        component={BodyHome}
        options={{
          headerShown: false,
          tabBarIcon: () => <Foundation name="home" size={30} color={'#fff'} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={AppSearch}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <EvilIcons name="search" size={30} color={'#fff'} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="library-outline" size={25} color={'#fff'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
