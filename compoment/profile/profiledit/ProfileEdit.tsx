import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {stylesText} from '../../styles/StylesText';
import {stylesLibary} from '../Library/StyleLibary';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {stylesProfileEdit} from './StyleProfileEdit';

const ProfileEdit = ({setIndexLibary, setIndexProfiedit, navigation}: any) => {
  const ComBack = () => {
    setIndexLibary(true);
    setIndexProfiedit(false);
  };
  const data = [
    {
      name: '',
    },
    {
      name: '',
    },
    {
      name: '',
    },
  ];
  return (
    <LinearGradient
      colors={['#00667B', '#002F38', '#101010']}
      style={{flex: 1}}>
      <View style={stylesProfileEdit.conTainer}>
        <View style={stylesLibary.conTainer95T20}>
          <ScrollView style={{width: '100%', height: '100%'}}>
            <View
              onTouchStart={() => ComBack()}
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
                  uri: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg',
                }}
              />
            </View>
            <View style={stylesProfileEdit.vewCenter}>
              <TouchableOpacity
                onPress={() => navigation.navigate('homeprofile')}
                style={stylesProfileEdit.btnEdit}>
                <Text style={stylesText.font16BollWrite}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={stylesProfileEdit.vewAround}>
              <View style={stylesProfileEdit.vewCenter}>
                <Text style={stylesText.font18BollWrite}>23</Text>
                <Text style={stylesText.font12Write}>PLAYLISTS</Text>
              </View>
              <View style={stylesProfileEdit.vewCenter}>
                <Text style={stylesText.font18BollWrite}>58</Text>
                <Text style={stylesText.font12Write}>FOLLOWERS</Text>
              </View>
              <View style={stylesProfileEdit.vewCenter}>
                <Text style={stylesText.font18BollWrite}>43</Text>
                <Text style={stylesText.font12Write}>FOLLOWING</Text>
              </View>
            </View>
            <View>
              <View style={stylesProfileEdit.tab20}>
                <Text style={stylesText.font18BollWrite}>Playlists</Text>
              </View>
              {data.map((vl, index) => (
                <View style={stylesProfileEdit.vewBetween} key={index}>
                  <View style={stylesProfileEdit.vewAround}>
                    <Image
                      style={stylesProfileEdit.imgPlaylis}
                      source={{
                        uri: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg',
                      }}
                    />
                    <View>
                      <Text style={stylesText.font18BollWrite}>Shazam</Text>
                      <Text style={stylesText.font12Write}>7 likes</Text>
                    </View>
                  </View>
                  <IconAntDesign name="right" color="#fff" size={25} />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ProfileEdit;
