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
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Provider} from 'react-redux';
import {store} from './compoment/redux/Store';
import MyTabs from './compoment/NavigationBottom';
import AlbumControl from './compoment/body/AlbumControl';
import Login from './compoment/login/loginBody/Login';
import Mp3Test from './compoment/mp3App/Mp3Test';

const Stack: any = createNativeStackNavigator();

GoogleSignin.configure({
  webClientId:
    '409381713776-off6mdvbk981apm2ui8fkbk1jop5lij1.apps.googleusercontent.com',
});

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState('mytab');

  // signOut();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    // console.log('ua', user);

    setUser('loginStart');
  }
  return (
    <Provider store={store}>
      <NavigationContainer independent>
        <Stack.Navigator initialRouteName="mp3">
          <Stack.Screen
            name="homebody"
            component={BodyHome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="mytab"
            component={MyTabs}
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
