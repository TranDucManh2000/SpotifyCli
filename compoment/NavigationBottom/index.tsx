import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BodyHome from '../body/home/BodyHome';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppSearch from '../body/AppSearch';
import {GetDataMusic, GetDataUser} from '../redux/Reduce';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import Library from '../profile/Library';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab: any = createBottomTabNavigator();

function MyTabs() {
  const dispatch: any = useDispatch();

  // nap du lieu vao store

  const retrieveDataUser = async () => {
    try {
      const value: any = await AsyncStorage.getItem('userId');
      firestore()
        .collection('User')
        .doc(value)
        .onSnapshot(documentSnapshot => {
          dispatch(GetDataUser(documentSnapshot.data()));
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    retrieveDataUser();
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
