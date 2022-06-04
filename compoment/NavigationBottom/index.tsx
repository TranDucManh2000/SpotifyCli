import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BodyHome from '../body/home/BodyHome';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AppSearch from '../body/AppSearch';
import {GetDataMusic} from '../redux/Reduce';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';

const Tab: any = createBottomTabNavigator();

function MyTabs() {
  const dispatch = useDispatch();

  // nap du lieu vao store
  useEffect(() => {
    firestore()
      .collection('SpotifiMusic')
      .doc('dbmusic')
      .onSnapshot(documentSnapshot => {
        dispatch(GetDataMusic(documentSnapshot.data()));
      });
  }, []);

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