/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
import PlayListMp3 from '../PlayListMp3';
import {useDispatch, useSelector} from 'react-redux';
import {dataUid} from '../../redux/ReduxSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GetDataUid} from '../../redux/Reduce';
import firestore from '@react-native-firebase/firestore';

const BodyHome = () => {
  const datacart = useSelector(dataUid);
  const dispatch = useDispatch();

  console.log('data us home ----------', datacart);

  const getData = async () => {
    try {
      const jsonValue: any = await AsyncStorage.getItem('userId');
      console.log('data', jsonValue);
      firestore()
        .collection('User')
        .doc(jsonValue)
        .onSnapshot(documentSnapshot => {
          console.log('userReduce', documentSnapshot.data());
          dispatch(GetDataUid(documentSnapshot.data()));
        });

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('codata');
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // ben tren code cua manh
  const someText = 'Ed Sheeran, Big Sean, \nJuice WRLD, Post Malone';

  return (
    <View style={styles.Home}>
      <ScrollView style={styles.homePage} showsVerticalScrollIndicator={false}>
        <View style={styles.RecentlyHome}>
          <View style={styles.title_Home}>
            <Text style={styles.Recently_text}>{datacart.email}</Text>
            <View style={styles.icon_nabar}>
              <TouchableOpacity style={{paddingRight: 15}}>
                <Fontisto name="bell" size={25} color={'#fff'} />
              </TouchableOpacity>
              <TouchableOpacity style={{paddingRight: 15}}>
                <MaterialCommunityIcons
                  name="clock-check-outline"
                  size={25}
                  color={'#fff'}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="settings" size={25} color={'#fff'} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: '5%'}}>
            <TouchableOpacity>
              <View style={styles.itemImage}>
                <Image
                  style={styles.imgPlayyed}
                  source={{
                    uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                  }}
                />
                <Text style={styles.imgText}>1(Remastered)</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.Your_2021}>
            <Image
              source={{
                uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
              }}
              style={styles.imgYour}
            />
            <View>
              <Text style={styles.Text_SPOTIFYWRAPPED}>#SPOTIFYWRAPPED</Text>
              <Text style={styles.You_review}>Your 2021 in review</Text>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal
            style={{marginBottom: '5%'}}>
            <TouchableOpacity>
              <View>
                <Image
                  source={{
                    uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                  }}
                  style={styles.img_listReview}
                />
                <Text style={styles.text_listReview}>Your Top Songs 2021</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>

          <Text style={styles.Text_Editor}>Editor’s picks</Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity>
              <View style={{width: 154}}>
                <Image
                  source={{
                    uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                  }}
                  style={styles.img_Editor}
                />
                <Text style={styles.Text_img_Editor}>{someText}</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <ScrollView horizontal={true}>
            <TouchableOpacity>
              <View style={{width: 154}}>
                <Image
                  source={{
                    uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                  }}
                  style={styles.img_Editor}
                />
                <Text style={styles.Text_img_Editor}>{someText}</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.ListMp3}>
        <PlayListMp3 />
      </View>
    </View>
  );
};

export default BodyHome;
