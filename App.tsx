/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BodyHome from './compoment/body/home/BodyHome';
import LoginStart from './compoment/login/loginBody/LoginStart';
import auth from '@react-native-firebase/auth';
import Signup from './compoment/login/signup/Signup';
import {Provider} from 'react-redux';
import {store} from './compoment/redux/Store';
import MyTabs from './compoment/NavigationBottom';
import AlbumControl from './compoment/body/AlbumControl';
import Login, {signOut} from './compoment/login/loginBody/Login';
import Mp3Test from './compoment/mp3App/Mp3Test';

const Stack: any = createNativeStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState('mytab');

  // signOut();

  function onAuthStateChanged() {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (user == null) {
    setUser('loginStart');
  }
  return (
    <Provider store={store}>
      <NavigationContainer independent>
        <Stack.Navigator initialRouteName="mytab">
          <Stack.Screen
            name="mytab"
            component={MyTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="homebody"
            component={BodyHome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="loginStart"
            component={LoginStart}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="mp3"
            component={Mp3Test}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="album"
            component={AlbumControl}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
