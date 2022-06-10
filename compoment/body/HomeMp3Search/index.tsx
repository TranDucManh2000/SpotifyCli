import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

interface Prop {
  setOfDetailSong: React.Dispatch<React.SetStateAction<boolean>>;
  setDetailSong: React.Dispatch<React.SetStateAction<boolean>>;
  Navigation: any;
  album: any;
}

const HomeMp3Search = ({
  setOfDetailSong,
  setDetailSong,
  Navigation,
  album,
}: Prop) => {
  const ComBack = () => {
    setOfDetailSong(true);
    setDetailSong(false);
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
        <View style={styles.img_play}>
          <Image
            style={styles.img_Your}
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
        <ScrollView>
          <TouchableOpacity style={styles.item_Album_play}>
            <View>
              <View>
                <Text style={styles.name_item_Album}>
                  Love Me Do - Mono / Remastered
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
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color={'#B3B3B3'}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default HomeMp3Search;
