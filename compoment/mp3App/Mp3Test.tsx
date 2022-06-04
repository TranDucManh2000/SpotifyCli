import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// Import the react-native-sound module
var Sound = require('react-native-sound');
// import Sound from 'react-native-sound';
// import deVuong from '../../android/app/src/main/res/raw/mp3s.mp3';
// import choemve from '../../android/app/src/main/res/raw/choemve.mp3';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Mp3Test = ({music, playon}: any) => {
  Sound.setCategory('Playback');
  console.log('aaa', music, playon);

  // const [indexMusic, setindexMusic] = useState(music);
  // const [musicOnOf, setMusicOnOf] = useState(play);

  var ding = new Sound(music, Sound.MAIN_BUNDLE, (error: any) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // if loaded successfully
    console.log(
      'duration in seconds: ' +
        ding.getDuration() +
        'number of channels: ' +
        ding.getNumberOfChannels(),
    );
  });

  useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    };
  }, []);

  const playPause = () => {
    ding.play((success: any) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };
  const pauseMusic = async () => {
    ding.pause();
  };
  // const nexMusic = async () => {
  //   ding.stop();
  //   setindexMusic(music);
  // };
  // const nexTimeMusic = async () => {
  //   ding.getCurrentTime((seconds: any) => ding.setCurrentTime(15 + seconds));
  // };

  setTimeout(() => {
    if (playon == 1) {
      ding.stop();
      ding.play();
    } else {
      ding.stop();
    }
  }, 1000);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        display: 'none',
      }}>
      <TouchableOpacity style={{padding: 20}} onPress={playPause}>
        <Ionicons name={'ios-play-outline'} size={36} color={'#fff'} />
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 20}} onPress={pauseMusic}>
        <Text style={{fontSize: 20, color: '#fff'}}>Pause</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Mp3Test;
