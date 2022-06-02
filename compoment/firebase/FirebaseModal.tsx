import React from 'react';
import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

const FirebaseModal = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState('mytab');
  const ref = firestore().collection('Spotify');

  //   get all
  //   firestore()
  //     .collection('Spotify')
  //     .get()
  //     .then(querySnapshot => {
  //       console.log('Total users: ', querySnapshot.size);

  //       querySnapshot.forEach(documentSnapshot => {
  //         console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //       });
  //     });

  //   get one
  //   function User() {
  //     firestore()
  //       .collection('Spotify')
  //       .doc('kaka')
  //       .onSnapshot(documentSnapshot => {
  //         console.log('User data: ', documentSnapshot.data());
  //       });
  //   }
  //   User();

  //   add new
  //   async function addTodo() {
  //     await ref.add({
  //       title: todo,
  //       complete: false,
  //     });
  //     setTodo('');
  //     console.log('run run ------------');
  //   }
  //   addTodo();

  //   add id
  //   firestore()
  //   .collection('Spotify')
  //   .doc('ABC')
  //   .set({
  //     name: 'Ada Lovelace',
  //     age: 30,
  //   })
  //   .then(() => {
  //     console.log('User added!');
  //   });

  //   update
  //   firestore()
  //     .collection('Spotify')
  //     .doc('user')
  //     .update({
  //       age: 31,
  //       name: 'thieuga',
  //       manh: 'manhkothay',
  //     })
  //     .then(() => {
  //       console.log('User updated!');
  //     });

  //   const storeData = async () => {
  //     try {
  //       const jsonValue = JSON.stringify('manh');
  //       await AsyncStorage.setItem('userId', jsonValue);
  //     } catch (e) {
  //       // saving error
  //     }
  //   };
  //   storeData();

  //   const getData = async () => {
  //     try {
  //       const jsonValue: any = await AsyncStorage.getItem('userId');
  //       console.log('data', jsonValue);

  //       return jsonValue != null ? JSON.parse(jsonValue) : null;
  //     } catch (e) {
  //       console.log('codata');
  //     }
  //   };
  //   getData();
  //   signOut();
  return (
    <View>
      <Text>Model</Text>
    </View>
  );
};

export default FirebaseModal;
