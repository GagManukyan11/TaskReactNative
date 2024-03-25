import React from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import {styles} from './styles';
import {IModalEditParams} from './types';
import {useModalEdit} from './useEditModal';

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  author: yup.string().required('Author is required'),
  year_of_publication: yup
    .number()
    .required('Year is required')
    .positive('Year must be a positive number')
    .test(
      'valid-year',
      'Year must be less than or equal to the current year',
      function (value) {
        const currentYear = new Date().getFullYear();
        return value <= currentYear;
      },
    ),
});

function ModalEdit({
  modalVisible,
  setModalVisible,
  fetchData,
  initialValues,
  id,
}: IModalEditParams): React.JSX.Element {
  const {handleEdit} = useModalEdit(fetchData, id);

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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, {resetForm}) => {
                handleEdit(values);
                setModalVisible(false);
                resetForm();
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                dirty,
              }) => (
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Title"
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    value={values.title}
                  />
                  {errors.title && (
                    <Text style={styles.errorText}>{errors.title}</Text>
                  )}
                  <TextInput
                    style={styles.input}
                    placeholder="Author"
                    onChangeText={handleChange('author')}
                    onBlur={handleBlur('author')}
                    value={values.author}
                  />
                  {errors.author && (
                    <Text style={styles.errorText}>{errors.author}</Text>
                  )}
                  <TextInput
                    style={styles.input}
                    placeholder="Year of Publication"
                    onChangeText={handleChange('year_of_publication')}
                    onBlur={handleBlur('year_of_publication')}
                    value={values.year_of_publication}
                    keyboardType="numeric"
                  />
                  {errors.year_of_publication && (
                    <Text style={styles.errorText}>
                      {errors.year_of_publication}
                    </Text>
                  )}
                  <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                      style={[styles.button, styles.buttonCancel]}
                      onPress={() => {
                        setModalVisible(false);
                      }}>
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.button,
                        styles.buttonCreate,
                        !dirty && styles.buttonDisabled,
                      ]}
                      onPress={() => handleSubmit()}
                      disabled={!dirty}>
                      <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalEdit;
