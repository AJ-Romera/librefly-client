import React, { ChangeEvent, FormEvent, useState } from "react";
import { Book } from "../ts-interfaces/Book.interfaces";
import { createBook } from "../services/BookService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type FormChange = FormEvent<HTMLFormElement>;

const BookForm = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState<Book>({
    name: "",
    isbn: "",
  });

  const handleInputChange = (e: InputChange) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormChange) => {
    e.preventDefault();

    try {
      await createBook(book);
      toast.success("New book added!");

      navigate("/");
    } catch (error) {
      console.error({ message: "Error: Wrong data or duplicated content" });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen -mt-20 w-full">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 w-1/2">
        <div className="p-6">
          <h3>New Book</h3>
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

            <button className="bg-green-700 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
