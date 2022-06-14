import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
  Easing,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {dataMusic} from '../../redux/ReduxSlice';
import {playSongHome} from '../../redux/ReduxSlice';
import {useDispatch, useSelector} from 'react-redux';

interface Prop {
  setOfDetailSong: React.Dispatch<React.SetStateAction<boolean>>;
  setDetailSong: React.Dispatch<React.SetStateAction<boolean>>;
  Navigation: any;
  album: any;
  setSetTing: any;
}

const HomeMp3Search = ({
  setOfDetailSong,
  setDetailSong,
  Navigation,
  album,
  setSetTing,
}: Prop) => {
  const ComBack = () => {
    setOfDetailSong(true);
    setDetailSong(false);
    setSetTing(false);
  };
  const [colorItem, setColorItem] = useState();
  const dispatch = useDispatch();
  const Animateds: any = Animated;

  const Data = useSelector(dataMusic);
  const dataHomeSearch = Data.musics.slice(20, 35);

  const playIngSong = (item: any) => {
    dispatch(playSongHome(item));
    setColorItem(item.uid);
  };

  const fadeAnim = useRef(new Animated.Value(216)).current;

  const fadeIn = (vluae: any) => {
    Animateds.timing(fadeAnim, {
      toValue: vluae,
      duration: 600,
      easing: Easing.linear,
    }).start();
  };

  const handelScronl = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    fadeIn(216 - y);
  };

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#c79950', '#641D17', '#271513', '#121212']}
        style={styles.AlbumView}>
        <TouchableOpacity
          style={styles.Comback}
          onPress={() => {
            ComBack();
          }}>
          <EvilIcons name="chevron-left" size={35} color={'#fff'} />
        </TouchableOpacity>
        <View style={styles.SearchBox}>
          <View style={styles.homeSearch}>
            <EvilIcons
              name="search"
              size={23}
              color={'#fff'}
              style={{paddingLeft: 7}}
            />
            <TextInput
              placeholder="Find in playlist"
              placeholderTextColor={'#fff'}
              style={styles.inputSearch}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.SearchSort}>
              <Text style={{color: '#fff'}}>Sort</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.img_play}>
          <Animated.Image
            style={{
              width: fadeAnim,
              height: fadeAnim,
            }}
            source={{
              uri: album.img,
            }}
          />
        </View>
        <View style={styles.Play}>
          <Text style={styles.name_Remastered}>{album.album}</Text>
          <View style={styles.play_item_album}>
            <View>
              <View style={styles.play_item_img}>
                <Image
                  style={styles.play_item}
                  source={require('../../imgApp/logoSpotify.png')}
                />
                <Text style={styles.play_name_item}>Spotify</Text>
              </View>
              <Text style={styles.Album_number}>1,629,592 likes 6h 48m</Text>
              <View style={styles.doawload}>
                <TouchableOpacity>
                  <EvilIcons name="heart" size={25} color={'#B3B3B3'} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="arrow-down-circle"
                    size={25}
                    color={'#B3B3B3'}
                    style={{marginLeft: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Navigation.navigate('album')}>
                  <Entypo
                    name="dots-three-horizontal"
                    size={20}
                    color={'#B3B3B3'}
                    style={{marginLeft: 10}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Ionicons
              name="md-pause-circle-sharp"
              size={80}
              color={'#1DB954'}
            />
          </View>
        </View>
        <ScrollView onScrollEndDrag={handelScronl}>
          <View style={{marginBottom: 70}}>
            {dataHomeSearch.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item_Album_play}
                onPress={() => {
                  playIngSong(item);
                }}>
                <View>
                  <View>
                    <Text
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        fontWeight: '500',
                        fontSize: 17,
                        lineHeight: 23,
                        color: colorItem === item.uid ? '#1ED760' : '#fff',
                      }}>
                      {item.singer}
                    </Text>
                  </View>
                  <View style={styles.doawload_item}>
                    <Ionicons
                      name="arrow-down-circle"
                      size={15}
                      color={'#57B65F'}
                      style={{marginRight: 10}}
                    />
                    <Text style={styles.The_Beatles}>The Beatles</Text>
                  </View>
                </View>
                {colorItem === item.uid && (
                  <Entypo name="bar-graph" size={20} color={'#1ED760'} />
                )}

                <Entypo
                  name="dots-three-horizontal"
                  size={20}
                  color={'#B3B3B3'}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default HomeMp3Search;
