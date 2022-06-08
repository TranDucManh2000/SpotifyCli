/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
import PlayListMp3 from '../PlayListMp3';
import {useSelector} from 'react-redux';
import HomeMp3Search from '../HomeMp3Search';
import {dataMusic} from '../../redux/ReduxSlice';

const BodyHome = ({navigation}: any) => {
  const Navigation = navigation;
  const [ofDetailSong, setOfDetailSong] = useState(true);
  const [detailSong, setDetailSong] = useState(false);
  const dataMusics = useSelector(dataMusic);
  // data item song home
  const dataRecently = dataMusics.musics.slice(8, 13);
  const dataView2021 = dataMusics.musics.slice(30, 35);
  const dataEditorPicks = dataMusics.musics.slice(60, 65);

  // Mp3Test({
  //   music: dataPlay.music,
  //   playon: onPlaySong,
  // });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const PlaySong = (item: any) => {
    setOfDetailSong(false);
    setDetailSong(true);
  };

  return (
    <View style={styles.Home}>
      {ofDetailSong && (
        <ScrollView
          style={styles.homePage}
          showsVerticalScrollIndicator={false}>
          <View style={styles.RecentlyHome}>
            <View style={styles.title_Home}>
              <Text style={styles.Recently_text}>Recently played</Text>
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
              {dataRecently.map(item => (
                <TouchableOpacity onPress={() => PlaySong(item)}>
                  <View style={styles.itemImage}>
                    <Image
                      style={styles.imgPlayyed}
                      source={{
                        uri: item.img,
                      }}
                    />
                    <Text style={styles.imgText}>{item.singer}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={styles.Your_2021}>
              <Image
                source={require('../../imgApp/view2021.png')}
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
              {dataView2021.map(item => (
                <TouchableOpacity>
                  <View>
                    <Image
                      source={{
                        uri: item.img,
                      }}
                      style={styles.img_listReview}
                    />
                    <Text style={styles.text_listReview}>{item.album}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text style={styles.Text_Editor}>Editor’s picks</Text>
            <ScrollView horizontal={true} style={{marginBottom: 100}}>
              {dataEditorPicks.map(item => (
                <TouchableOpacity style={styles.item_Editor}>
                  <View style={{width: 154}}>
                    <Image
                      source={{
                        uri: item.img,
                      }}
                      style={styles.img_Editor}
                    />
                    <Text style={styles.Text_img_Editor}>{item.album}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      )}
      {detailSong && (
        <HomeMp3Search
          Navigation={Navigation}
          setOfDetailSong={setOfDetailSong}
          setDetailSong={setDetailSong}
        />
      )}

      <View style={styles.ListMp3}>
        <PlayListMp3 />
      </View>
    </View>
  );
};

export default BodyHome;
