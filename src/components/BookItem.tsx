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
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div>
        <div className="flex justify-between items-center">
          <h2>{book.name}</h2>
          <span
            className="cursor-pointer bg-red-500 p-2 rounded-full"
            onClick={() => book._id && handleDelete(book._id)}
          >
            X
          </span>
        </div>
        <p className="text-gray-500">ISBN: {book.isbn}</p>
        <p className="text-gray-600">
          {book.author?.last_name}, {book.author?.first_name}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
