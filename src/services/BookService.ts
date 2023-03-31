import axios from "axios";
import { Book } from "../ts-interfaces/Book.interfaces";

export const getBooks = async () => {
  return await axios.get<Book[]>("http://localhost:8080/books");
};
