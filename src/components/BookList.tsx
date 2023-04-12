import React, { useEffect, useState } from "react";
import { Book } from "../ts-interfaces/Book.interfaces";
import { getBooks } from "../services/BookService";
import BookItem from "./BookItem";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 w-full mx-auto gap-3 my-6">
      {books.map((book) => {
        return <BookItem book={book} key={book._id} loadBooks={loadBooks} />;
      })}
    </div>
  );
};

export default BookList;
