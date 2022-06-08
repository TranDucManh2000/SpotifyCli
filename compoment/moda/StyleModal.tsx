import {StyleSheet} from 'react-native';

export const stylesModal = StyleSheet.create({
  conTainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  bodyModal: {
    margin: 20,
    backgroundColor: '#B7B7B7',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    opacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  vewRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 150,
  },
  vewTab: {
    marginTop: 10,
    marginBottom: 10,
  },
  btnGren: {
    width: 60,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 5,
  },
  btnRed: {
    width: 60,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 5,
  },
});
