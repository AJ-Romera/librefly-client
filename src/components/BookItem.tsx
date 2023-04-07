import React from "react";
import { Book } from "../ts-interfaces/Book.interfaces";
import { deleteBook } from "../services/BookService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

  /* <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div> */

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3">
      <div className="flex justify-between items-center">
        <h2
          className="cursor-pointer text-xl font-bold text-gray-900"
          onClick={() => navigate(`/books/${book._id}`)}
        >
          {book.name}
        </h2>
        <span
          className="cursor-pointer bg-red-500 p-2  text-white  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={() => book._id && handleDelete(book._id)}
        >
          X
        </span>
      </div>
      <img
        className="p-8 rounded-t-lg"
        src="https://aprenderbigdata.com/wp-content/uploads/41K-wtoYjiL._SX387_BO1204203200_-mejores-libros-de-programacion.jpg"
        alt="book image"
      />
      <div className="space-y-0.5 text-left flex flex-col">
        <span
          className="cursor-pointer bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
          onClick={() => navigate(`edit/books/${book._id}`)}
        >
          ISBN: {book.isbn}
        </span>
        <span className="text-gray-600">
          {book.author_last_name}, {book.author_first_name}
        </span>
      </div>
    </div>
  );
};

export default BookItem;
