import {createBook} from '../../../../../services/booksService';
import {ICreateBook} from './types';

export const useModalCreate = (fetchData: () => Promise<void>) => {
  const handleCreate = async (body: ICreateBook) => {
    try {
      await createBook(body);
      await fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return {handleCreate};
};
