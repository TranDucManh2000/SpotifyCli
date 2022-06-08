import React, {useEffect, useState} from 'react';
import {Modal, Pressable, View, Text} from 'react-native';
import {stylesText} from '../styles/StylesText';
import {stylesModal} from './StyleModal';

const Modals = ({playmd, titlemd, textmd}: any) => {
  const [modalVisible, setModalVisible] = useState(playmd);
  // console.log('moda------------', playmd);

  const closeModal = () => {
    setModalVisible(false);
    console.log('mode');
  };

  useEffect(() => {
    playmd ? setModalVisible(true) : setModalVisible(false);
  }, [playmd, titlemd, textmd]);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={stylesModal.conTainer}>
          <View style={stylesModal.bodyModal}>
            <Text style={stylesText.font20BollBlack}>{titlemd}</Text>
            <Pressable style={stylesModal.vewTab}>
              <Text>{textmd}</Text>
            </Pressable>
            <View style={stylesModal.vewRow}>
              <View
                onTouchStart={() => closeModal()}
                style={stylesModal.btnGren}>
                <Text style={stylesText.font16BollWrite}>Ok</Text>
              </View>
              <View
                onTouchStart={() => closeModal()}
                style={stylesModal.btnRed}>
                <Text style={stylesText.font16BollWrite}>Exit</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modals;
