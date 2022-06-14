import {useCallback, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddPlaysong} from '../redux/Reduce';
import {getDataAllTime, dataPlayItem, dataMusic} from '../redux/ReduxSlice';
// Import the react-native-sound module

var Sound = require('react-native-sound');

const Mp3Test = ({music, playon, playid, slider, setTime}: any) => {
  const dataPlay = useSelector(dataPlayItem);
  const dataMusics = useSelector(dataMusic);
  const dispatch: any = useDispatch();

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
        ding.getCurrentTime((t: any) => setTime(t));
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

  ding.getCurrentTime((t: any) => {
    console.log('===============');
    setTime(t);
  });

  useEffect(() => {}, []);
  useEffect(() => {
    ding.setVolume(1);

    return () => {
      ding.release();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [music]);

  const playPause = useCallback(() => {
    console.log('pauyyyyyyyyyyyyyyyyyyyy');
    ding.play((success: any) => {
      if (success) {
        console.log('successfully finished playing', ding.getDuration());

        dataMusics.musics.map(vl => {
          if (vl.uid == dataPlay.uid + 1) {
            dispatch(AddPlaysong(vl));
            ding.stop();
          }
        });
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playon]);

  const pauseMusic = useCallback(() => {
    console.log('pausssssssssssssssss');
    ding.pause();
  }, [playon]);

  useEffect(() => {
    console.log('playon', playon);
    playon ? playPause() : pauseMusic();
  }, [pauseMusic, playPause, playon, playid]);

  useEffect(() => {
    const allTimeSong = ding.getDuration();
    ding.getCurrentTime((seconds: any) =>
      ding.setCurrentTime((allTimeSong / 100) * slider),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slider]);
};

export default Mp3Test;
