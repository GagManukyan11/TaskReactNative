export interface IModalEditParams {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => Promise<void>;
  initialValues: IEditBook;
  id: number | null;
}

export interface IEditBook {
  author: string;
  title: string;
  year_of_publication: string;
}
