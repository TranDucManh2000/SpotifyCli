import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import Search from '../Search';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AlbumView from '../AlbumView';
import PlayListMp3 from '../PlayListMp3';

const AppSearch = ({navigation}: any) => {
  const [AppSearcha, setAppsearch] = useState<boolean>(true);
  const [search, setSearch] = useState<boolean>(false);
  const [AlbumViews, setAlbumViews] = useState<boolean>(false);
  // const dataPlay = useSelector(dataPlayItem);
  const Navigation = navigation;
  const SearchItem = () => {
    setAppsearch(false);
    setSearch(true);
  };
  return (
    <View style={styles.AppSearch}>
      {AppSearcha && (
        <View style={styles.AppSearch_main}>
          <View style={styles.AppSearch_title}>
            <Text style={styles.Text_title}>Search</Text>
            <Feather name="camera" size={30} color={'#fff'} />
          </View>
          <View style={styles.Search}>
            <EvilIcons
              name="search"
              size={25}
              color={'#000'}
              style={{paddingLeft: 10}}
            />
            <TextInput
              placeholder="Artists, songs, or podcasts"
              placeholderTextColor={'#000'}
              style={{width: '80%'}}
              onFocus={() => {
                SearchItem();
              }}
            />
          </View>
          <ScrollView>
            <Text style={styles.list_your}>Your top genres</Text>
            <ScrollView horizontal={true} style={{marginBottom: '10%'}}>
              <TouchableOpacity>
                <Image
                  style={styles.img_Your}
                  source={{
                    uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.img_Your}
                  source={{
                    uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                  }}
                />
              </TouchableOpacity>
            </ScrollView>
            <Text style={styles.list_your}>Popular podcast categories</Text>
            <ScrollView horizontal={true} style={{marginBottom: '10%'}}>
              <TouchableOpacity>
                <Image
                  style={styles.img_Your}
                  source={{
                    uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                  }}
                />
              </TouchableOpacity>
            </ScrollView>
            <Text style={styles.list_your}>Browse all</Text>
            <View style={styles.Browe_list}>
              <TouchableOpacity>
                <Image
                  style={styles.img_Browe}
                  source={{
                    uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.img_Browe}
                  source={{
                    uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.img_Browe}
                  source={{
                    uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                  }}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
      {search && (
        <Search
          setAppsearch={setAppsearch}
          setSearch={setSearch}
          setAlbumViews={setAlbumViews}
        />
      )}
      {AlbumViews && (
        <AlbumView
          setAppsearch={setAppsearch}
          setSearch={setSearch}
          setAlbumViews={setAlbumViews}
          Navigation={Navigation}
        />
      )}
      <PlayListMp3 />
    </View>
  );
};

export default AppSearch;
