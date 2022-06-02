import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {stylesBody} from '../../styles/Stylesbody';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from '../../styles/Styles';
import {stylesText} from '../../styles/StylesText';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}: any) => {
  const [email, setemail]: any = useState();
  const [password, setpassword]: any = useState();

  const register = () => {
    console.log('dang ky');
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(e => {
        console.log('User account created & signed in!');
        firestore()
          .collection('User')
          .doc(e.user.uid)
          .onSnapshot(documentSnapshot => {
            if (documentSnapshot.data() == null) {
              firestore()
                .collection('User')
                .doc(e.user.uid)
                .set({
                  email: e.user.email,
                  uid: e.user.uid,
                })
                .then(() => {
                  console.log('User added!');
                });
            }
          });
        AsyncStorage.setItem('userId', e.user.uid);
        navigation.navigate('mytab');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert('register', 'That email address is already in use!', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert('register', 'That email address is invalid!', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }

        console.error(error);
      });
  };

  return (
    <View style={stylesBody.container100}>
      <View style={stylesBody.container90}>
        <ScrollView>
          <View style={stylesBody.vewBetwen100}>
            <IconAntDesign
              onPress={() => navigation.goBack()}
              style={{width: '22%'}}
              name="left"
              color="#fff"
              size={28}
            />
            <Text style={stylesText.font18BollWrite}>Create account</Text>
            <Text>Create account</Text>
          </View>
          <View style={stylesBody.vewTopBottom10}>
            <Text style={stylesText.font20BollWrite}>What’s your email?</Text>
            <TextInput
              style={styles.texInputStyle}
              onChangeText={(emailvl: any) => setemail(emailvl)}
            />
            <Text style={stylesText.font20BollWrite}>Create a password</Text>
            <TextInput
              style={styles.texInputStyle}
              onChangeText={(passwordvl: any) => setpassword(passwordvl)}
            />
            <Text style={stylesText.font20BollWrite}>What’s your gender?</Text>
            <TextInput
              style={styles.texInputStyle}
              // onChangeText={(passwordvl: any) => setpassword(passwordvl)}
            />
            <Text style={stylesText.font12Write}>
              You’ll need to confirm this email and password later.
            </Text>
            <View style={stylesBody.container90}>
              <View
                onTouchStart={() => register()}
                style={stylesBody.btnGreen88}>
                <Text style={stylesText.font16BollWrite}>Register</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;
