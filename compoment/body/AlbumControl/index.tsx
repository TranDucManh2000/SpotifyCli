import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
const AlbumControl = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#A62B20', '#121212']}
        style={styles.content_Album}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.5}}>
        <View style={styles.baner_Album}>
          <Image
            style={styles.img_Album}
            source={{
              uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
            }}
          />
        </View>
        <View style={styles.name_Album}>
          <Text style={styles.Remastered}>1(Remastered)</Text>
          <Text style={styles.Beatles}>The Beatles</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.Option}>
            <EvilIcons name="heart" size={30} color="#B3B3B3" />
            <Text style={styles.name_Option}>Like</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Option}>
            <MaterialCommunityIcons
              name="account-music-outline"
              size={30}
              color="#B3B3B3"
            />
            <Text style={styles.name_Option}>View artist</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Option}>
            <EvilIcons name="share-apple" size={30} color="#B3B3B3" />
            <Text style={styles.name_Option}>Share</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Option}>
            <EvilIcons name="heart" size={30} color="#B3B3B3" />
            <Text style={styles.name_Option}>Like all songs</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Option}>
            <Ionicons
              name="ios-musical-notes-outline"
              size={30}
              color="#B3B3B3"
            />
            <Text style={styles.name_Option}>Add to queue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Option}>
            <Feather name="radio" size={30} color="#B3B3B3" />
            <Text style={styles.name_Option}>Go to radio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack('Search');
          }}>
          <View style={styles.Close}>
            <Text style={styles.name_Option}>Close</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default AlbumControl;
