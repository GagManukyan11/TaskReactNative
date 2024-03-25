import React from 'react';

import {
  ActivityIndicator,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles} from './styles';
import {IModalDeletParams} from './types';
import {useModalDelete} from './useModalDelete';

function ModalDelete({
  modalVisible,
  setModalVisible,
  id,
  fetchData,
}: IModalDeletParams): React.JSX.Element {
  const {handleDeleteBook, loading} = useModalDelete(fetchData);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Do you want to delete this book?
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonDelete]}
                onPress={() => {
                  handleDeleteBook(id);
                  setModalVisible(!modalVisible);
                }}>
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.buttonText}>Delete</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalDelete;
