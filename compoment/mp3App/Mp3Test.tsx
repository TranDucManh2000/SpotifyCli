import React, {useCallback, useEffect, useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// Import the react-native-sound module
var Sound = require('react-native-sound');
// import Sound from 'react-native-sound';
// import deVuong from '../../android/app/src/main/res/raw/mp3s.mp3';
// import choemve from '../../android/app/src/main/res/raw/choemve.mp3';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {AddPlaysong} from '../redux/Reduce';
import {
  getDataCurrentTime,
  getDataAllTime,
  dataPlayItem,
  dataMusic,
} from '../redux/ReduxSlice';

const Mp3Test = async ({music, playon, playid}: any) => {
  const dataPlay = useSelector(dataPlayItem);
  const dataMusics = useSelector(dataMusic);
  const dispatch = useDispatch();
  Sound.setCategory('Playback');

  const ding = useMemo(
    () =>
      new Sound(music, Sound.MAIN_BUNDLE, (error: any) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // if loaded successfully
        const allTimeSong = ding.getDuration();

        dispatch(getDataAllTime(allTimeSong));

        console.log(
          'duration in second>>>>>: ' +
            ding.getDuration() +
            'number of channels: ' +
            ding.getNumberOfChannels() +
            '>>>>wwwwwwww',
        );
      }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [music],
  );

  ding.getCurrentTime((t: any) => dispatch(getDataCurrentTime(t)));

  useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [music]);

  const playPause = useCallback(() => {
    ding.play((success: any) => {
      if (success) {
        console.log('successfully finished playing', ding.getDuration());
        dataMusics.musics.map(vl => {
          if (vl.uid == dataPlay.uid + 1) {
            dispatch(AddPlaysong(vl));
          }
        });
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ding]);

  const pauseMusic = useCallback(() => {
    ding.pause();
  }, [ding]);

  useEffect(() => {
    console.log('playon', playon);
    playon ? playPause() : pauseMusic();
  }, [pauseMusic, playPause, playon, playid]);

  // setTimeout(() => {
  //   if (playon == true) {
  //     playPause();
  //   }
  // }, 1000);

  // const nexMusic = async () => {
  //   ding.stop();
  //   setindexMusic(music);
  // };
  // const nexTimeMusic = async () => {
  //   ding.getCurrentTime((seconds: any) => ding.setCurrentTime(15 + seconds));
  // };

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
