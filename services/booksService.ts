import {ICreateBook} from '../src/components/Library/components/ModalCreate/types';

const API = ''
export const getBooksList = async () => {
  try {
    const response = await fetch(
      `http://${API}/api/v1/books/getList`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
};

export const deleteBook = async (id: number | null) => {
  try {
    const response = await fetch(
      `http://${API}/api/v1/books/deleteBook/${id}`,
      {
        method: 'DELETE',
      },
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
};

export const createBook = async (body: ICreateBook) => {
  try {
    const response = await fetch(
      `http://${API}/api/v1/books/addBook`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
};

export const getBookById = async (id: number) => {
  try {
    const response = await fetch(
      `http://${API}/api/v1/books/${id}`,
      {
        method: 'GET',
      },
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
};

export const updateBook = async (id: number | null, body: ICreateBook) => {
  try {
    const response = await fetch(
      `http://${API}/api/v1/books/updateBook/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
};
