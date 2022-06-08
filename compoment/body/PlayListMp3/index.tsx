import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';
import {
  dataCurrentTime,
  dataPlayItem,
  dataAllTime,
} from '../../redux/ReduxSlice';
import Mp3Test from '../../mp3App/Mp3Test';
import {useSelector} from 'react-redux';

const PlayListMp3 = () => {
  const [openMV, setOpenMV] = useState(false);
  const [openSong, setOpenSong] = useState(false);

  const dataPlay = useSelector(dataPlayItem);
  const currentTime = useSelector(dataCurrentTime);
  const allTime = useSelector(dataAllTime);
  console.log('++)\\\\\\\\\\\\\\', allTime);
  console.log('++)))))))))))))', currentTime);
  const OpenPlayMV = () => {
    setOpenMV(!openMV);
  };
  Mp3Test({
    music: dataPlay.music,
    playon: openSong,
  });
  const onPlayItem = () => {
    setOpenSong(!openSong);
  };
  const OfPauItem = () => {
    setOpenSong(!openSong);
  };

  const offPlayModa = () => {
    setOpenSong(!openSong);
  };
  const openPlayModa = () => {
    setOpenSong(!openSong);
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
        <View style={styles.time_play_go} />
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
                  maximumValue={allTime}
                  value={(currentTime / allTime) * 100}
                  minimumTrackTintColor="#FFFF"
                  maximumTrackTintColor="#777777"
                  thumbTintColor="#ffff"
                />
                <View style={styles.time_Play}>
                  <Text style={styles.time}>23</Text>
                  <Text style={styles.time}>223</Text>
                </View>
                <View style={styles.adjust_play}>
                  <TouchableOpacity>
                    <Entypo name="shuffle" size={20} color={'#fff'} />
                  </TouchableOpacity>
                  <TouchableOpacity>
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

                  <TouchableOpacity>
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
