import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Book } from "../ts-interfaces/Book.interfaces";
import * as bookService from "../services/BookService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormChange = FormEvent<HTMLFormElement>;

const BookForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [book, setBook] = useState<Book>({
    name: "",
    isbn: "",
    author_first_name: "",
    author_last_name: "",
  });

  const handleInputChange = (e: InputChange) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormChange) => {
    e.preventDefault();

    try {
      if (!params.id) {
        await bookService.createBook(book);
        toast.success("New book added!");
      } else {
        await bookService.updateBook(params.id, book);
        toast.success("Book edited!");
      }

      navigate("/");
    } catch (error) {
      console.error({ message: "Error: Wrong data or duplicated content" });
    }
  };

  const getBook = async (id: string) => {
    try {
      const response = await bookService.getBook(id);
      const { name, isbn, author_first_name, author_last_name } = response.data;
      setBook({ name, isbn, author_first_name, author_last_name });
    } catch (error) {
      console.error({ message: "Error: No book found with the given id" });
    }
  };

  useEffect(() => {
    if (params.id) {
      getBook(params.id);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {params.id ? <h3>Edit Book</h3> : <h3>Publish a Book</h3>}
        </h2>
        <form
          className="w-full max-w-sm mx-auto p-8 rounded-md shadow-md bg-blue-300/30"
          id="form"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="book-title"
            >
              Book Title
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              id="book-title"
              type="text"
              name="name"
              value={book.name}
              placeholder="Write a title for the book"
              autoFocus
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="isbn"
            >
              ISBN
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              id="isbn"
              type="text"
              name="isbn"
              value={book.isbn}
              placeholder="Write the ISBN of the book"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author_first_name"
            >
              Author's First Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              name="author_first_name"
              value={book.author_first_name}
              placeholder="Write the first name of the author"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author_last_name"
            >
              Author's Last Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              id="author_last_name"
              type="text"
              name="author_last_name"
              value={book.author_last_name}
              placeholder="Write the last name of the author"
              required
              onChange={handleInputChange}
            />
          </div>
          {params.id ? (
            <button className="bg-green-500 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              Update
            </button>
          ) : (
            <button className="bg-green-700 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              Create
            </button>
          )}
          {/* <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Register
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default BookForm;
