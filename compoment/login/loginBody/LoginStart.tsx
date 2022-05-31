import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {stylesBody} from '../../styles/Stylesbody';
import {stylesText} from '../../styles/StylesText';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {stylesLogin} from '../styleLogin/StyleLogin';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '409381713776-off6mdvbk981apm2ui8fkbk1jop5lij1.apps.googleusercontent.com',
});
const LoginStart = () => {
  const onGoogleButtonPress = async () => {
    console.log('Usersign in!');
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('ss', googleCredential);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };
  // const loginout = () => {
  //   console.log('User signed out!');
  //   auth()
  //     .signOut()
  //     .then(() => console.log('User signed out!'));
  // };
  const signOut = async () => {
    console.log('User signed out!');
    try {
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
      // this.setState({user: null}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={stylesBody.container100}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={require('../../imgApp/IMG_27561.png')} />
        <View style={stylesBody.container100}>
          <View style={stylesLogin.stylesIconSpotifi}>
            <IconFontAwesome name="spotify" color="#fff" size={52} />
            <View style={stylesLogin.width200}>
              <Text style={stylesText.font28BollWrite}>Millions of Songs.</Text>
              <Text style={stylesText.font28BollWrite}>Free on Spotify.</Text>
            </View>
          </View>
          <TouchableOpacity style={stylesBody.btnGreen}>
            <Text style={stylesText.font16Boll}>Sign up free</Text>
          </TouchableOpacity>
          <View
            onTouchStart={() =>
              onGoogleButtonPress().then(() =>
                console.log('Signed in with Google!'),
              )
            }
            style={stylesBody.btnBlack}>
            <IconAntDesign
              style={{width: '22%'}}
              name="google"
              color="#fff"
              size={25}
            />
            <Text style={stylesText.font16BollWrite}>Continue with Google</Text>
          </View>
          <View style={stylesBody.btnBlack}>
            <IconMaterialIcons
              style={{width: '22%'}}
              name="facebook"
              color="#fff"
              size={25}
            />
            <Text style={stylesText.font16BollWrite}>
              Continue with Facebook
            </Text>
          </View>
          <View style={stylesBody.btnBlack}>
            <IconAntDesign
              style={{width: '22%'}}
              name="apple1"
              color="#fff"
              size={25}
            />
            <Text style={stylesText.font16BollWrite}>Continue with Apple</Text>
          </View>
          <View onTouchStart={() => signOut()} style={stylesBody.btnNotcolor}>
            <Text style={stylesText.font16BollWrite}>Log In</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginStart;
