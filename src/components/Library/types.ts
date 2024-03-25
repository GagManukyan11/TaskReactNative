export interface IBook {
  author: string;
  id: number;
  title: string;
  year_of_publication: number | string;
  createdAt?: Date;
  updatedAt?: Date;
}
