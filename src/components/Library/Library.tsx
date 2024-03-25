import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {IBook} from './types';
import {useLibrary} from './useLibrary';
import ModalDelete from './components/ModalDelete/ModalDelete';
import ModalCreate from './components/ModalCreate/ModalCreate';
import ModalEdit from './components/ModalEdit/ModalEdit';

function Library(): React.JSX.Element {
  const {
    books,
    setDeleteModalVisible,
    deleteModalVisible,
    fetchData,
    createModalVisible,
    setCreateModalVisible,
    setSelectedItem,
    selectedItem,
    editModalVisible,
    setEditModalVisible,
    getInitialValuesForEdit,
    initialValues,
  } = useLibrary();
  const renderItem = ({item}: {item: IBook}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>Author: {item.author}</Text>
        <Text style={styles.year}>
          Year of Publication: {item.year_of_publication}
        </Text>
        <View style={styles.booksActions}>
          <TouchableOpacity
            style={styles.buttonEdit}
            onPress={async () => {
              setSelectedItem(item.id);
              await getInitialValuesForEdit(item.id);
              setEditModalVisible(true);
            }}>
            <Text style={styles.buttonText}>Edit Book</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDelete}
            onPress={() => {
              setDeleteModalVisible(true);
              setSelectedItem(item.id);
            }}>
            <Text style={styles.buttonText}>Delete Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <ModalCreate
        modalVisible={createModalVisible}
        setModalVisible={setCreateModalVisible}
        fetchData={fetchData}
      />
      <ModalDelete
        modalVisible={deleteModalVisible}
        setModalVisible={setDeleteModalVisible}
        id={selectedItem}
        fetchData={fetchData}
      />
      <ModalEdit
        modalVisible={editModalVisible}
        setModalVisible={setEditModalVisible}
        id={selectedItem}
        fetchData={fetchData}
        initialValues={initialValues}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setCreateModalVisible(true)}>
        <Text style={styles.addButtonIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Library;
