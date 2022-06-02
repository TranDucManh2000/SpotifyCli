import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  PlayMp3: {
    backgroundColor: '#550A1C',
    borderRadius: 12,
  },
  list_PlayMp3: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  list_itemMp3: {
    width: '60%',
  },
  Img_PlayMp3: {
    width: 37,
    height: 37,
    marginRight: 5,
  },
  item_PlayMp3: {
    flexDirection: 'row',
  },
  name_item: {
    overflow: 'hidden',
  },
  text_nameItem: {
    color: '#fff',
  },
  play_device: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  play_deviceText: {
    fontSize: 16,
    color: '#1DB954',
    paddingLeft: 8,
  },
  item_paus: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time_play: {
    height: 6,
    backgroundColor: '#702F3D',
    borderRadius: 30,
  },
  time_play_go: {
    width: '50%',
    backgroundColor: '#B2B2B2',
    height: '100%',
    borderRadius: 30,
  },
});

export default styles;