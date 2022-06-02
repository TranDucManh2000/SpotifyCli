import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Home: {
    flex: 1,
    position: 'relative',
  },
  homePage: {
    paddingLeft: 16,
    lineHeight: 28,
    backgroundColor: '#000',
  },
  Recently_text: {
    fontWeight: '700',
    fontSize: 19,
    color: '#fff',
    marginBottom: '5%',
  },
  title_Home: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon_nabar: {
    flexDirection: 'row',
    paddingRight: '5%',
  },

  imgPlayyed: {
    width: 105,
    height: 105,
    marginBottom: 8,
  },
  RecentlyHome: {
    marginTop: '10%',
  },
  imgYour: {
    width: 58,
    height: 58,
    marginRight: 8,
  },
  Text_SPOTIFYWRAPPED: {
    fontSize: 10,
    lineHeight: 14,
    color: '#9C9C9C',
  },
  You_review: {
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: '#fff',
  },
  img_listReview: {
    width: 153,
    height: 153,
    marginRight: 8,
    marginBottom: 8,
  },
  text_listReview: {
    fontSize: 13.5,
    fontWeight: '600',
    color: '#fff',
  },
  Text_Editor: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  img_Editor: {
    width: 153,
    height: 153,
    marginRight: 8,
    marginBottom: 8,
  },
  Text_img_Editor: {
    fontSize: 11.5,
    fontWeight: '500',
    lineHeight: 17,
    color: '#fff',
  },

  itemImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  Your_2021: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
  },
  item_Editor: {
    marginRight: 10,
  },
  ListMp3: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 5,
    zIndex: 33,
  },
});

export default styles;
