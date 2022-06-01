import {
               View,
               Text,
               TextInput,
               TouchableOpacity,
               ScrollView,
               Image,
             } from 'react-native';
             import EvilIcons from 'react-native-vector-icons/EvilIcons';
             import styles from './style';
             import React from 'react';
             
             interface Prop {
               setAppsearch: React.Dispatch<React.SetStateAction<boolean>>;
               setSearch: React.Dispatch<React.SetStateAction<boolean>>;
               setAlbumViews: React.Dispatch<React.SetStateAction<boolean>>;
             }
             const Search = ({setSearch, setAppsearch, setAlbumViews}: Prop) => {
               const SearchMain = () => {
                 setSearch(false);
                 setAppsearch(true);
               };
               const PlaySearchMain = () => {
                 setSearch(false);
                 setAppsearch(false);
                 setAlbumViews(true);
               };
               return (
                 <View style={{flex: 1}}>
                   <View style={styles.Page_Search}>
                     <View style={styles.Seacrh_app}>
                       <View style={styles.Search}>
                         <EvilIcons
                           name="search"
                           size={25}
                           color={'#fff'}
                           style={{paddingLeft: 10}}
                         />
                         <TextInput
                           placeholder="Search"
                           style={styles.input_Search}
                           placeholderTextColor={'#fff'}
                           autoFocus
                         />
                       </View>
                       <TouchableOpacity>
                         <Text
                           style={styles.Cancel}
                           onPress={() => {
                             SearchMain();
                           }}>
                           Cancel
                         </Text>
                       </TouchableOpacity>
                     </View>
                     <Text style={styles.title_Search}>Recent searches</Text>
                     <ScrollView>
                       <TouchableOpacity
                         onPress={() => {
                           PlaySearchMain();
                         }}>
                         <View style={styles.item_search}>
                           <Image
                             style={styles.Img_item}
                             source={{
                               uri: 'https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg',
                             }}
                           />
                           <View>
                             <Text style={styles.name_item}>FKA twigs</Text>
                             <Text style={styles.author_item}>Artist</Text>
                           </View>
                         </View>
                       </TouchableOpacity>
                     </ScrollView>
                   </View>
                 </View>
               );
             };
             
             export default Search;