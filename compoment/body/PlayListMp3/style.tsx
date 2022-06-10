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
    marginLeft: 10,
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
    height: 4,
    backgroundColor: '#702F3D',
    borderRadius: 30,
  },
  PlayModal: {
    paddingHorizontal: '5%',
  },
  header_PlayModal: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name_header_PlayModal: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19,
    color: '#fff',
  },
  img_PlayModal: {
    height: 380,
    width: '100%',
  },
  baner_PlayModal: {
    marginVertical: '8%',
  },
  song_PlayModal: {
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 28,
    color: '#fff',
  },
  singer_Heart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  singer_PlayModal: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21,
    color: '#B3B3B3',
  },
  time_Play: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  time: {
    color: '#B2B2B2',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
  },
  adjust_play: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Option_play: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bluetooth: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BEATSPILL: {
    color: '#17B54E',
    fontSize: 10.5,
    fontWeight: '400',
    marginLeft: 10,
  },
  Lyrics: {
    height: 120,
    paddingHorizontal: 10,
    backgroundColor: '#D8672A',
    marginTop: 30,
    borderRadius: 15,
  },
  Lyrics_title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginBottom: 20,
  },
  Lyrics_text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
    color: '#fff',
  },
  MORE: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 77,
    height: 28,
    backgroundColor: '#6B3311',
    justifyContent: 'center',
    borderRadius: 30,
  },
  MORE_Text: {
    fontSize: 10.5,
    fontWeight: '600',
    color: '#fff',
  },
});

export default styles;
