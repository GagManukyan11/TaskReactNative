export interface IModalDeletParams {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  id: number | null;
  fetchData: () => Promise<void>;
}
