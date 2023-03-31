import React, { useEffect, useState } from "react";
import { Book } from "../ts-interfaces/Book.interfaces";
import { getBooks } from "../services/BookService";

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const loadBooks = async () => {
    const response = await getBooks();

    setBooks(response.data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book._id} className="flex flex-col p-4">
            <span>{book.name}</span>
            <span>{book.isbn}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
