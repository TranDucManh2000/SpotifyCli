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
import Mp3Home from './compoment/mp3App/home/Mp3Home';
import BodyHome from './compoment/body/home/BodyHome';
import LoginStart from './compoment/login/loginBody/LoginStart';
import auth from '@react-native-firebase/auth';
import Signup from './compoment/login/signup/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Provider} from 'react-redux';
import {store} from './compoment/redux/Store';
import MyTabs from './compoment/NavigationBottom';

const Stack: any = createNativeStackNavigator();
GoogleSignin.configure({
  webClientId:
    '409381713776-off6mdvbk981apm2ui8fkbk1jop5lij1.apps.googleusercontent.com',
});
const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify({name: 'manh', duy: 'cc'});
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  storeData();
  const getData = async () => {
    try {
      const jsonValue: any = await AsyncStorage.getItem('@storage_Key');
      console.log('data', jsonValue);
      setUser(jsonValue);

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('codata');
    }
  };
  getData();

  // Handle user state changes
  function onAuthStateChanged() {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <LoginStart />;
    // return <Signup />;
  }
  return (
    <Provider store={store}>
      <NavigationContainer independent>
        <Stack.Navigator initialRouteName="mytab">
          <Stack.Screen
            name="homeMp3"
            component={Mp3Home}
            options={{headerShown: false}}
          />
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
