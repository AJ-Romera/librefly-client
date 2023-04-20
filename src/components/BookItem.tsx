import React from "react";
import { Book } from "../ts-interfaces/Book.interfaces";
import { deleteBook } from "../services/BookService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HiPencil, HiTrash } from "react-icons/hi";

interface Props {
  book: Book;
  loadBooks: () => void;
}

const BookItem = ({ book, loadBooks }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await deleteBook(id);
    toast.success("Book removed successfully!");
    loadBooks();
  };

  return (
    <div className="w-full relative group overflow-hidden max-w-sm bg-gray-50 border border-gray-200 rounded-lg shadow mx-auto dark:bg-[#282932] dark:border-[#2D2F40]">
      <div onClick={() => navigate(`book-details/${book._id}`)}>
        <img
          className="mx-auto cursor-pointer w-full object-cover p-6 rounded-[30px]"
          src={book.cover}
          alt={`${book.name} book cover`}
        />
      </div>

      <div className="space-y-0.5 text-left flex flex-col border-t px-5 pb-4 pt-0.5">
        <h2 className="text-lg font-bold text-gray-900">{book.name}</h2>
        <span className="text-gray-500">
          {book.author_last_name}, {book.author_first_name}
        </span>
      </div>

      {/* Buttons on Hover */}
      <div className="absolute h-14 w-full bg-blue-300/20 backdrop-blur-sm gap-4 justify-end items-start opacity-0 -top-10 group-hover:top-0 group-hover:opacity-100 transition-all duration-500 hidden md:flex">
        <button
          className="py-2.5 px-5 mt-3 cursor-pointer bg-blue-100 text-blue-800 text-base font-semibold rounded"
          onClick={() => navigate(`/edit-book/${book._id}`)}
        >
          <HiPencil />
        </button>
        <button
          className="py-2.5 px-5 mr-4 mt-3 cursor-pointer bg-red-100 text-red-800 text-base font-semibold rounded"
          onClick={() => book._id && handleDelete(book._id)}
        >
          <HiTrash />
        </button>
      </div>

      {/* Buttons Responsive */}
      <div className="absolute w-full flex gap-4 justify-end items-start top-0 opacity-100 transition-all duration-500 md:hidden">
        <button
          className="py-2.5 px-5 mt-3 cursor-pointer bg-blue-100 text-blue-800 text-base font-semibold rounded"
          onClick={() => navigate(`/edit-book/${book._id}`)}
        >
          <HiPencil />
        </button>
        <button
          className="py-2.5 px-5 mr-4 mt-3 cursor-pointer bg-red-100 text-red-800 text-base font-semibold rounded"
          onClick={() => book._id && handleDelete(book._id)}
        >
          <HiTrash />
        </button>
      </div>
    </div>
  );
};

export default BookItem;
