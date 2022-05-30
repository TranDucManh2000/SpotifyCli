import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const [email, setemail]: any = useState();
  const [password, setpassword]: any = useState();

  // const storeData = async () => {
  //   try {
  //     const jsonValue = JSON.stringify({name: 'manh', duy: 'cc'});
  //     await AsyncStorage.setItem('@storage_Key', jsonValue);
  //   } catch (e) {
  //     // saving error
  //   }
  // };
  // // storeData();
  // const getData = async () => {
  //   try {
  //     const jsonValue: any = await AsyncStorage.getItem('@storage_Key');
  //     console.log('data', jsonValue);

  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     console.log('codata');
  //   }
  // };
  const register = () => {
    console.log('dang ky');
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const login = () => {
    console.log('gang nhao!');
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(e => {
        console.log('User account created & signed in!', e);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View>
      <TextInput
        onChangeText={(use: any) => setemail(use)}
        placeholder=" Search..."></TextInput>
      <TextInput
        onChangeText={(pas: any) => setpassword(pas)}
        placeholder=" Search..."></TextInput>
      <View
        style={{width: 200, height: 200, backgroundColor: 'red'}}
        onTouchStart={() => login()}>
        <Text> Dang nhap</Text>
      </View>
      <View
        style={{width: 200, height: 200, backgroundColor: 'red'}}
        onTouchStart={() => register()}>
        <Text> Dang ky</Text>
      </View>
    </View>
  );
};

export default Signup;
