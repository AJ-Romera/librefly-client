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

  return books.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full mx-auto gap-3 my-6 mb-12">
      {books.map((book) => {
        return <BookItem book={book} key={book._id} loadBooks={loadBooks} />;
      })}
    </div>
  ) : (
    <div className="flex items-center justify-center my-12">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-36 w-36"></div>
    </div>
  );
};

export default BookList;
