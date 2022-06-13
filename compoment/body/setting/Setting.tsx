import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Setting = ({Navigation, setOfDetailSong, setSetTing}: any) => {
  const ComBack = () => {
    setOfDetailSong(true);
    setSetTing(false);
  };

  return (
    <View>
      <TouchableOpacity style={{paddingRight: 15}} onPress={() => ComBack()}>
        <Fontisto name="bell" size={25} color={'black'} />
      </TouchableOpacity>
      <Text>Thieu Ga</Text>
    </View>
  );
};

export default Setting;
