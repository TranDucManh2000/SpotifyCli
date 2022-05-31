import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

interface Prop {
  setAppsearch: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setAlbumViews: React.Dispatch<React.SetStateAction<boolean>>;
}
const AlbumView = ({setAppsearch, setSearch, setAlbumViews}: Prop) => {
  const ComBack = () => {
    setAppsearch(false);
    setAlbumViews(false);
    setSearch(true);
  };
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#C63224', '#641D17', '#271513', '#121212']}
        style={styles.AlbumView}>
        <TouchableOpacity
          style={styles.Comback}
          onPress={() => {
            ComBack();
          }}>
          <EvilIcons name="chevron-left" size={30} color={'#fff'} />
        </TouchableOpacity>
        <View style={styles.img_play}>
          <Image
            style={styles.img_Your}
            source={{
              uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
            }}
          />
        </View>
        <View style={styles.Play}>
          <Text style={styles.name_Remastered}>1(Remastered)</Text>
          <View style={styles.play_item_album}>
            <View>
              <View style={styles.play_item_img}>
                <Image
                  style={styles.play_item}
                  source={{
                    uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                  }}
                />
                <Text style={styles.play_name_item}>The Beatles</Text>
              </View>
              <Text style={styles.Album_number}>Album - 2000</Text>
              <View style={styles.doawload}>
                <EvilIcons name="heart" size={25} color={'#B3B3B3'} />
                <Ionicons
                  name="arrow-down-circle"
                  size={25}
                  color={'#57B65F'}
                  style={{marginLeft: 10}}
                />
                <Entypo
                  name="dots-three-horizontal"
                  size={20}
                  color={'#B3B3B3'}
                  style={{marginLeft: 10}}
                />
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

export default AlbumView;
