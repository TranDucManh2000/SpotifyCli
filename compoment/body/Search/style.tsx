import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Page_Search: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: '#121212',
  },
  Seacrh_app: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginBottom: '10%',
  },
  Search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#282828',
    borderRadius: 15,
  },
  input_Search: {
    width: '80%',
    color: '#fff',
  },
  Cancel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
  title_Search: {
    fontWeight: '600',
    fontSize: 17,
    color: '#fff',
    lineHeight: 23,
    marginBottom: '5%',
  },
  item_search: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Img_item: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: '5%',
  },
  name_item: {
    fontWeight: '500',
    fontSize: 20,
    color: '#fff',
    lineHeight: 20,
  },
  author_item: {
    fontWeight: '500',
    fontSize: 13,
    color: '#B3B3B3',
    lineHeight: 17,
  },
});

export default styles;