import {useState} from 'react';
import {deleteBook} from '../../../../../services/booksService';

export const useModalDelete = (fetchData: () => Promise<void>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleDeleteBook = async (id: number | null) => {
    setLoading(true);
    try {
      await deleteBook(id);
      await fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return {handleDeleteBook, loading};
};
