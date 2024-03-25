export interface IModalCreateParams {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => Promise<void>;
}

export interface ICreateBook {
  author: string;
  title: string;
  year_of_publication: string;
}
