import React, { useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([
    {
      _id: "64256ce01b2bfd193d176b48",
      name: "Hijos de la fábula",
      isbn: "978-84-1107-228-1",
      author: {
        _id: "64256c921b2bfd193d176b45",
        first_name: "Fernando",
        last_name: "Aramburu",
        createdAt: "2023-03-30T11:03:46.081Z",
        updatedAt: "2023-03-30T11:03:46.081Z",
      },
      createdAt: "2023-03-30T11:05:04.745Z",
      updatedAt: "2023-03-30T11:05:04.745Z",
    },
    {
      _id: "6425b5c32bf33dde23f682d0",
      name: "Solo Humo",
      isbn: "9788420473116",
      author: {
        _id: "64257448fda041b54b72ce83",
        first_name: "Juan José",
        last_name: "Millas",
        createdAt: "2023-03-30T11:36:40.076Z",
        updatedAt: "2023-03-30T11:36:40.076Z",
      },
      createdAt: "2023-03-30T16:16:03.511Z",
      updatedAt: "2023-03-30T16:16:03.511Z",
    },
    {
      _id: "6425b5f32bf33dde23f682d3",
      name: "Juego de Tronos - Canción de hielo y fuego 1",
      isbn: "9788496208964",
      author: {
        _id: "6426a5a1236d77a574bb4f19",
        first_name: "George",
        last_name: "R. R. Martin",
        createdAt: "2023-03-31T09:19:29.447Z",
        updatedAt: "2023-03-31T09:19:29.447Z",
      },
      createdAt: "2023-03-30T16:16:51.795Z",
      updatedAt: "2023-03-31T09:19:42.427Z",
    },
  ]);

  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book._id}>
            <span>{book.name}</span>
            <span>
              {book.author.first_name}
              {book.author.last_name}
            </span>
            <span>{book.isbn}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
