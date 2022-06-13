import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {stylesBody} from '../../styles/Stylesbody';
import {stylesText} from '../../styles/StylesText';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from '../../styles/Styles';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import Modals from '../../moda/Modals';

export const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    await AsyncStorage.setItem('userId', '');
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  } catch (error) {
    console.error(error);
  }
};

GoogleSignin.configure({
  webClientId:
    '409381713776-off6mdvbk981apm2ui8fkbk1jop5lij1.apps.googleusercontent.com',
});

const Login = ({navigation}: any) => {
  const [email, setemail]: any = useState();
  const [password, setpassword]: any = useState();
  const [openModal, setOpenModal]: any = useState({
    playmd: false,
    titlemd: '',
    textmd: '',
  });

  const checkLogin = () => {
    if (email == null || password == null) {
      console.log('null');
      setOpenModal({
        playmd: true,
        titlemd: 'Login Error',
        textmd: 'Email or Password not null',
      });
    } else {
      login();
    }
  };
  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(e => {
        console.log('User account created & signed in!', e);
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
                  img: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg',
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
          setOpenModal({
            playmd: true,
            titlemd: 'Login Error',
            textmd: 'auth/email-already-in-use',
          });
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is already in use!');
          setOpenModal({
            playmd: true,
            titlemd: 'Login Error',
            textmd: 'auth/invalid-email',
          });
        }

        console.error(error);
      });
  };
  return (
    <View style={stylesBody.container100}>
      <View style={stylesBody.container90}>
        <ScrollView>
          <Modals
            playmd={openModal.playmd}
            titlemd={openModal.titlemd}
            textmd={openModal.textmd}
          />
          <View style={stylesBody.vewBetwen100}>
            {/* <Modals playmd={false} titlemd={'Login'} textmd={'That'}></Modals>; */}
            <IconAntDesign
              onPress={() => navigation.goBack()}
              style={{width: '22%'}}
              name="left"
              color="#fff"
              size={28}
            />
            <Text style={stylesText.font18BollWrite}>Login account</Text>
            <Text>Login account</Text>
          </View>
          <View style={stylesBody.vewTopBottom10}>
            <Text style={stylesText.font20BollWrite}>What’s your email?</Text>
            <TextInput
              style={styles.texInputStyle}
              onChangeText={(emailvl: any) => setemail(emailvl)}
            />
            <Text style={stylesText.font20BollWrite}>
              What’s your password?
            </Text>
            <TextInput
              style={styles.texInputStyle}
              onChangeText={(passwordvl: any) => setpassword(passwordvl)}
            />
            <Text style={stylesText.font12Write}>
              You’ll need to confirm this email and password later.
            </Text>
            <View
              onTouchStart={() => checkLogin()}
              style={stylesBody.btnGreen88}>
              <Text style={stylesText.font16BollWrite}>Login</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
