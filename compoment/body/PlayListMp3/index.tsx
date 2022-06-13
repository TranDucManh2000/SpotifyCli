import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useCallback, useRef} from 'react';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';
import {dataPlayItem, dataAllTime, dataMusic} from '../../redux/ReduxSlice';
import Mp3Test from '../../mp3App/Mp3Test';
import {useDispatch, useSelector} from 'react-redux';
import {AddPlaysong} from '../../redux/Reduce';

const PlayListMp3 = () => {
  const allTime = useSelector(dataAllTime);
  const [openMV, setOpenMV] = useState(false);
  const [openSong, setOpenSong] = useState(false);
  const dataPlay = useSelector(dataPlayItem);
  const dataMusics = useSelector(dataMusic);
  const [indexSlyte, setindexSlyte] = useState(100);
  const [slider, setSlider] = useState(0);
  const [all, setAll] = useState(6);
  const [times, setTime] = useState(0);
  const dispath = useDispatch();

  const OnChange = (e: any) => {
    setSlider(e);
  };

  useEffect(() => {
    setAll(allTime);
    setOpenSong(false);
  }, [allTime, dataPlay]);

  // useEffect(() => {

  // })

  const OpenPlayMV = () => {
    setOpenMV(!openMV);
  };
  Mp3Test({
    music: dataPlay.music,
    playon: openSong,
    playid: dataPlay.uid,
    slider: slider,
    setTime: setTime,
  });
  const onPlayItem = () => {
    setOpenSong(!openSong);
    setindexSlyte(100);
    setTimeout(() => {
      setAll(all - 1);
    }, 10);
  };
  const OfPauItem = () => {
    setOpenSong(!openSong);
  };

  const offPlayModa = () => {
    setOpenSong(!openSong);
  };
  const openPlayModa = () => {
    setOpenSong(!openSong);
    setindexSlyte(100);
    setTimeout(() => {
      setAll(all - 1);
    }, 10);
  };
  const nextDing = (uid: any, item: any) => {
    dataMusics.musics.map(vl => {
      if (vl.uid === uid + item) {
        dispath(AddPlaysong(vl));
        setOpenSong(false);
        setindexSlyte(0);
      }
    });
  };

  const calTimeOut = useCallback(() => {
    let total = allTime;
    total = total - Math.round(times);
    return Math.round(total);
  }, [allTime, times]);

  const stylel = {
    width: (times / allTime) * 100 + '%',
    backgroundColor: '#B2B2B2',
    height: '100%',
    borderRadius: 30,
  };
  return (
    <View style={styles.PlayMp3}>
      <View style={styles.list_PlayMp3}>
        <ScrollView
          style={styles.list_itemMp3}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => OpenPlayMV()}>
            <View style={styles.item_PlayMp3}>
              <Image
                style={styles.Img_PlayMp3}
                source={{
                  uri: dataPlay.img,
                }}
              />
              <View style={styles.name_item}>
                <Text style={styles.text_nameItem}>{dataPlay.singer}</Text>
                <View style={styles.play_device}>
                  <Feather name="bluetooth" size={16} color={'#1DB954'} />
                  <Text style={styles.play_deviceText}>BEATSPILL+</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.item_paus}>
          <Feather name="bluetooth" size={25} color={'#1DB954'} />
          {openSong && (
            <TouchableOpacity onPress={() => OfPauItem()}>
              <Entypo name="controller-paus" size={35} color={'#fff'} />
            </TouchableOpacity>
          )}

          {!openSong && (
            <TouchableOpacity onPress={() => onPlayItem()}>
              <Entypo name="controller-play" size={35} color={'#fff'} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.time_play}>
        <View style={stylel} />
      </View>
      {/* ============================================= */}
      <Modal
        isVisible={openMV}
        style={{flex: 1, margin: 0, padding: 0}}
        backdropTransitionInTiming={700}>
        <LinearGradient
          colors={['#962419', '#661710', '#430E09']}
          style={{flex: 1}}>
          <ScrollView>
            <View style={styles.PlayModal}>
              <View style={styles.header_PlayModal}>
                <TouchableOpacity onPress={() => OpenPlayMV()}>
                  <Entypo name="chevron-thin-down" size={25} color={'#fff'} />
                </TouchableOpacity>
                <Text style={styles.name_header_PlayModal}>1(Remastered)</Text>
                <TouchableOpacity>
                  <Entypo
                    name="dots-three-horizontal"
                    size={25}
                    color={'#fff'}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.baner_PlayModal}>
                <Image
                  style={styles.img_PlayModal}
                  source={{
                    uri: dataPlay.img,
                  }}
                />
              </View>
              <View>
                <Text style={styles.song_PlayModal}>{dataPlay.singer}</Text>
                <View style={styles.singer_Heart}>
                  <Text style={styles.singer_PlayModal}>The Beatles</Text>
                  <EvilIcons name="heart" size={35} color={'#fff'} />
                </View>
                <Slider
                  style={{width: '100%', height: 20}}
                  minimumValue={0}
                  maximumValue={indexSlyte}
                  value={(times / allTime) * 100}
                  onValueChange={e => OnChange(e)}
                  minimumTrackTintColor="#FFFF"
                  maximumTrackTintColor="#777777"
                  thumbTintColor="#ffff"
                />
                <View style={styles.time_Play}>
                  <Text style={styles.time}>{Math.round(times)}</Text>
                  <Text style={styles.time}>{calTimeOut()}</Text>
                </View>
                <View style={styles.adjust_play}>
                  <TouchableOpacity>
                    <Entypo name="shuffle" size={20} color={'#fff'} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => nextDing(dataPlay.uid, -1)}>
                    <AntDesign name="stepbackward" size={35} color={'#fff'} />
                  </TouchableOpacity>
                  {openSong && (
                    <TouchableOpacity onPress={() => offPlayModa()}>
                      <Ionicons
                        name="pause-circle-sharp"
                        size={80}
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                  )}
                  {!openSong && (
                    <TouchableOpacity onPress={() => openPlayModa()}>
                      <AntDesign name="play" size={80} color={'#fff'} />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity onPress={() => nextDing(dataPlay.uid, +1)}>
                    <AntDesign name="stepforward" size={35} color={'#fff'} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name="repeat" size={25} color={'#65D46E'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.Option_play}>
                  <View style={styles.bluetooth}>
                    <Feather name="bluetooth" size={15} color={'#65D46E'} />
                    <Text style={styles.BEATSPILL}>BEATSPILL+</Text>
                  </View>
                  <View style={styles.bluetooth}>
                    <EvilIcons name="share-apple" size={30} color={'#fff'} />
                    <AntDesign
                      name="menuunfold"
                      size={20}
                      color={'#fff'}
                      style={{marginLeft: 30}}
                    />
                  </View>
                </View>

                <View style={styles.Lyrics}>
                  <View style={styles.Lyrics_title}>
                    <Text style={styles.Lyrics_text}>Lyrics</Text>
                    <View style={styles.MORE}>
                      <Text style={styles.MORE_Text}>MORE</Text>
                      <Entypo
                        name="resize-full-screen"
                        size={15}
                        color={'#fff'}
                        style={{marginLeft: 10}}
                      />
                    </View>
                  </View>
                  <Text>Anh yeu em nhat ma co sao bay gio lai chia xa</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </Modal>
    </View>
  );
};

export default PlayListMp3;
