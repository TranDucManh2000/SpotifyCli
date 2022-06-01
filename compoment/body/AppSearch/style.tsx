import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  AppSearch: {
    flex: 1,
    backgroundColor: '#1B1A1C',
  },
  AppSearch_main: {
    flex: 1,
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  AppSearch_title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },
  Text_title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
  },
  Search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: '5%',
  },
  list_your: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21,
    color: '#fff',
    marginBottom: 19,
  },
  img_Your: {
    height: 109,
    width: 175,
    marginRight: 10,
  },
  Browe_list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img_Browe: {
    height: 109,
    width: 175,
    marginRight: 10,
    marginBottom: 20,
  },
});

export default styles;