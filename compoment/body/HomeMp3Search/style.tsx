import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  AlbumView: {
    flex: 1,
    paddingHorizontal: '3%',
  },
  Comback: {
    marginTop: '5%',
    marginBottom: '3%',
  },
  SearchBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  homeSearch: {
    height: 40,
    backgroundColor: '#7E6E5B',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  inputSearch: {
    fontSize: 16,
    paddingLeft: 5,
    height: '100%',
    width: '70%',
  },
  SearchSort: {
    height: 40,
    backgroundColor: '#7E6E5B',
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  img_play: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%',
  },

  Play: {
    marginBottom: 20,
  },

  name_Remastered: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 34,
    color: '#B3B3B3',
    marginBottom: 8,
  },
  play_item_album: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  play_item_img: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  play_item: {
    width: 23,
    height: 21,
    borderRadius: 50,
  },
  play_name_item: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
    marginLeft: 7,
  },
  Album_number: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 17,
    color: '#B3B3B3',
    marginTop: 17,
  },
  doawload: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
  },
  doawload_item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  The_Beatles: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19,
    color: '#B3B3B3',
  },

  item_Album_play: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default styles;
