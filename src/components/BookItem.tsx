import React from "react";
import { Book } from "../ts-interfaces/Book.interfaces";
import { deleteBook } from "../services/BookService";

interface Props {
  book: Book;
  loadBooks: () => void;
}

const BookItem = ({ book, loadBooks }: Props) => {
  const handleDelete = async (id: string) => {
    await deleteBook(id);
    loadBooks();
  };

  return (
    <div className="p-4">
      <div>
        <div>
          <h2>{book.name}</h2>
          <span onClick={() => book._id && handleDelete(book._id)}>X</span>
        </div>
        <p>ISBN: {book.isbn}</p>
        <p>
          {book.author?.last_name}, {book.author?.first_name}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
