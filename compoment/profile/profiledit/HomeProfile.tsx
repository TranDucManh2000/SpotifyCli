import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {stylesText} from '../../styles/StylesText';
import {stylesLibary} from '../Library/StyleLibary';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {stylesProfileEdit} from './StyleProfileEdit';
import {useSelector} from 'react-redux';
import {dataUser} from '../../redux/ReduxSlice';
import firestore from '@react-native-firebase/firestore';

const HomeProfile = ({navigation}: any) => {
  const datasUser: any = useSelector(dataUser);
  const [dataUsers, setdataUser] = useState(datasUser.email);

  const btnSetUser = () => {
    firestore()
      .collection('User')
      .doc(datasUser.uid)
      .set({
        email: dataUsers,
        uid: datasUser.uid,
        img: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg',
      })
      .then(() => {
        console.log('User added faill!');
      });
  };

  return (
    <LinearGradient
      colors={['#00667B', '#002F38', '#101010']}
      style={{flex: 1}}>
      <View style={stylesProfileEdit.conTainer}>
        <View style={stylesLibary.conTainer95T20}>
          <ScrollView style={{width: '100%', height: '100%'}}>
            <View
              onTouchStart={() => navigation.goBack()}
              style={stylesLibary.viewrowBetween}>
              <Ionicons
                name="ios-chevron-back-outline"
                color="#fff"
                size={33}
              />
              <IconAntDesign name="ellipsis1" color="#fff" size={30} />
            </View>
            <View style={stylesProfileEdit.vewCenter}>
              <Image
                style={stylesProfileEdit.avatar}
                source={{
                  uri: datasUser.img,
                }}
              />
            </View>
            {/* <View>
              <Image style={{width: 200, height: 200}} source={require(path)} />
            </View> */}
            <View style={stylesProfileEdit.vewCenter}>
              <TextInput
                style={stylesProfileEdit.inputProfile}
                placeholderTextColor="#FFF"
                placeholder={datasUser.email}
                onChangeText={(newText: any) => setdataUser(newText)}
              />
            </View>
            <View style={stylesProfileEdit.vewCenter}>
              <TouchableOpacity
                onPress={() => btnSetUser()}
                style={stylesProfileEdit.btnEdit}>
                <Text style={stylesText.font16BollWrite}>Save</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeProfile;
