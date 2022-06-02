import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const PlayListMp3 = () => {
  return (
    <View style={styles.PlayMp3}>
      <View style={styles.list_PlayMp3}>
        <ScrollView
          style={styles.list_itemMp3}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.item_PlayMp3}>
            <Image
              style={styles.Img_PlayMp3}
              source={{
                uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
              }}
            />
            <View style={styles.name_item}>
              <Text style={styles.text_nameItem}>
                From Me to You - Mono / Remastered{' '}
              </Text>
              <View style={styles.play_device}>
                <Feather name="bluetooth" size={16} color={'#1DB954'} />
                <Text style={styles.play_deviceText}>BEATSPILL+</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.item_paus}>
          <Feather name="bluetooth" size={25} color={'#1DB954'} />
          <Entypo name="controller-paus" size={35} color={'#fff'} />
        </View>
      </View>
      <View style={styles.time_play}>
        <View style={styles.time_play_go} />
      </View>
    </View>
  );
};

export default PlayListMp3;