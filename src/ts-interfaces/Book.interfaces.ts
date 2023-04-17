export interface Book {
  name: string;
  isbn: string;
  author_first_name: string;
  author_last_name: string;
  cover: string;
  blurb?: string;
  genre?: string;
  pages?: number;
  publisher?: string;
  binding?: string;
  year_of_publication?: number;
  release_date?: string;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}
