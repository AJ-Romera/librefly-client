import { Author } from "./Author.interface";

export interface Book {
  name: string;
  isbn: string;
  author?: Author;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}
