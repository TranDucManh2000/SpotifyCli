import {View, Text, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import {stylesBody} from '../../styles/Stylesbody';
import {stylesText} from '../../styles/StylesText';
import {stylesLibary} from './StyleLibary';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ProfileEdit from '../profiledit/ProfileEdit';

const Library = () => {
  const [indexLibary, setIndexLibary] = useState<boolean>(true);
  const [indexProfiEdit, setIndexProfiedit] = useState<boolean>(false);

  const SetProfileTab = () => {
    setIndexLibary(false);
    setIndexProfiedit(true);
  };

  const data = [
    {
      name: '',
    },
    {
      name: '',
    },
    {
      name: '',
    },
    {
      name: '',
    },
  ];
  return (
    <View style={{flex: 1}}>
      {indexLibary && (
        <View style={stylesBody.container100}>
          <View style={stylesLibary.conTainer95T20}>
            <ScrollView style={{width: '100%', height: '100%'}}>
              <View style={stylesLibary.viewrow100}>
                <View
                  onTouchStart={() => SetProfileTab()}
                  style={stylesLibary.viewrow}>
                  <Image
                    style={stylesLibary.avatar}
                    source={{
                      uri: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg',
                    }}
                  />
                  <Text style={stylesText.font24BollWrite}>Your Library</Text>
                </View>
                <View>
                  <IconAntDesign name="plus" color="#fff" size={30} />
                </View>
              </View>
              <View style={stylesLibary.viewrowStart}>
                <View style={stylesLibary.btnwrite20}>
                  <Text style={stylesText.font12Write}>Your Library</Text>
                </View>
                <View style={stylesLibary.btnwrite20}>
                  <Text style={stylesText.font12Write}>Your Library</Text>
                </View>
                <View style={stylesLibary.btnwrite20}>
                  <Text style={stylesText.font12Write}>Your Library</Text>
                </View>
                <View style={stylesLibary.btnwrite20}>
                  <Text style={stylesText.font12Write}>Your Library</Text>
                </View>
              </View>
              <View style={stylesLibary.viewrowBetween}>
                <Text style={stylesText.font16BollWrite}>Recently played</Text>
                <Entypo name="sweden" color="#fff" size={16} />
              </View>
              {data.map((vl, index) => (
                <View style={stylesLibary.viewrowStart} key={index}>
                  <Image
                    style={stylesLibary.imgMusic}
                    source={{
                      uri: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg',
                    }}
                  />
                  <View>
                    <Text style={stylesText.font16BollWrite}>Lolo Zouaï</Text>
                    <Text style={stylesText.font12Write}>Artist</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      )}
      {indexProfiEdit && (
        <ProfileEdit
          setIndexLibary={setIndexLibary}
          setIndexProfiedit={setIndexProfiedit}
        />
      )}
    </View>
  );
};

export default Library;
