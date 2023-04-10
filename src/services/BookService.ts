import axios from "axios";
import { Book } from "../ts-interfaces/Book.interfaces";

const API = "https://librefly-api.onrender.com";

export const getBooks = async () => {
  return await axios.get<Book[]>(`${API}/books`);
};

export const getBook = async (id: string) => {
  return await axios.get<Book>(`${API}/books/${id}`);
};

export const createBook = async (book: Book) => {
  return await axios.post(`${API}/books`, book);
};

export const updateBook = async (id: string, book: Book) => {
  return await axios.put<Book>(`${API}/books/${id}`, book);
};

export const deleteBook = async (id: string) => {
  return await axios.delete<Book>(`${API}/books/${id}`);
};
