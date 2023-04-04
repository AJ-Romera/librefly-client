import React from "react";
import { Book } from "../ts-interfaces/Book.interfaces";

interface Props {
  book: Book;
}

const BookItem = ({ book }: Props) => {
  return (
    <div className="p-4">
      <div>
        <div>
          <h2>{book.name}</h2>
          <span>X</span>
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