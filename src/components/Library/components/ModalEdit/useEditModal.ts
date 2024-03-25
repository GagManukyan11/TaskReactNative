import {updateBook} from '../../../../../services/booksService';
import {IEditBook} from './types';

export const useModalEdit = (
  fetchData: () => Promise<void>,
  id: number | null,
) => {
  const handleEdit = async (body: IEditBook) => {
    try {
      await updateBook(id, body);
      await fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return {handleEdit};
};
