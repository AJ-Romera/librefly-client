import React, { useEffect, useState } from "react";
import { Book } from "../ts-interfaces/Book.interfaces";
import { useParams } from "react-router-dom";
import { getBook } from "../services/BookService";

const BookDetails = () => {
  const params = useParams();
  const [book, setBook] = useState<Book>({
    name: "",
    isbn: "",
  });

  const loadBook = async (id: string) => {
    const response = await getBook(id);

    setBook(response.data);
  };

  useEffect(() => {
    if (params.id) {
      loadBook(params.id);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-between px-4 py-3 sm:px-6">
      <h3>Name: {book.name}</h3>
      <h3>ISBN: {book.isbn}</h3>
      <h3>
        Author: {book.author?.last_name}, {book?.author?.first_name}
      </h3>
      <h3>ID: {book._id}</h3>
      <h3>Create at: {book.createdAt}</h3>
      <h3>Updated at: {book.updatedAt}</h3>
    </div>
  );
};

export default BookDetails;
