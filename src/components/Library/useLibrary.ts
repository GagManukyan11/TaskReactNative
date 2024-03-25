import {useEffect, useState} from 'react';
import {getBookById, getBooksList} from '../../../services/booksService';
import {IBook} from './types';
import {ICreateBook} from './components/ModalCreate/types';

export const useLibrary = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [initialValues, setInitialvalues] = useState<ICreateBook>({
    title: '',
    author: '',
    year_of_publication: '',
  });

  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const fetchData = async () => {
    setSelectedItem(null);
    try {
      const data = await getBooksList();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getInitialValuesForEdit = async (id: number) => {
    try {
      const data = await getBookById(id);
      setInitialvalues(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {
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
    initialValues,
    getInitialValuesForEdit,
  };
};
