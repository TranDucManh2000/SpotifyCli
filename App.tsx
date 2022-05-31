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
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Mp3Home from './compoment/mp3App/home/Mp3Home';
import MyTabs from './compoment/NavigationBottom';

const Stack: any = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="tab">
        <Stack.Screen
          name="homeMp3"
          component={Mp3Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tab"
          component={MyTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
