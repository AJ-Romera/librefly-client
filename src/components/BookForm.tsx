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
    <div className="flex justify-center items-center h-screen -mt-20 w-full">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 w-1/2">
        <div className="p-6">
          {params.id ? <h3>Edit Book</h3> : <h3>New Book</h3>}
          <form id="form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="book-title">Book Title</label>
              <input
                id="book-title"
                type="text"
                name="name"
                value={book.name}
                placeholder="Write a title for the book"
                autoFocus
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="isbn">ISBN</label>
              <input
                id="isbn"
                type="text"
                name="isbn"
                value={book.isbn}
                placeholder="Write the ISBN of the book"
                autoFocus
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="author_first_name">Author's first name</label>
              <input
                id="author_first_name"
                type="text"
                name="author_first_name"
                value={book.author_first_name}
                placeholder="Write the first name of the author"
                autoFocus
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="author_last_name">Author's last name</label>
              <input
                id="author_last_name"
                type="text"
                name="author_last_name"
                value={book.author_last_name}
                placeholder="Write the last name of the author"
                autoFocus
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
