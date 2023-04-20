import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Book } from "../ts-interfaces/Book.interfaces";
import * as bookService from "../services/BookService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type SelectChange = ChangeEvent<HTMLSelectElement>;
type FormChange = FormEvent<HTMLFormElement>;

const BookForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [book, setBook] = useState<Book>({
    name: "",
    isbn: "",
    author_first_name: "",
    author_last_name: "",
    cover: "",
  });

  const handleInputChange = (e: InputChange) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: SelectChange) => {
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
      const {
        name,
        isbn,
        author_first_name,
        author_last_name,
        cover,
        blurb,
        genre,
        pages,
        publisher,
        binding,
        year_of_publication,
        release_date,
      } = response.data;
      setBook({
        name,
        isbn,
        author_first_name,
        author_last_name,
        cover,
        blurb,
        genre,
        pages,
        publisher,
        binding,
        year_of_publication,
        release_date,
      });
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
    <div className="flex justify-center items-center h-full w-full">
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-[#F7F8FB]">
          {params.id ? "Edit Book" : "Publish a Book"}
        </h2>
        <form
          className="w-full max-w-2xl lg:max-w-2xl mx-auto p-8 rounded-md shadow-md bg-blue-300/30 dark:bg-[#2F3855]"
          id="form"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
              htmlFor="book-title"
            >
              Book Title (*)
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
              className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
              htmlFor="isbn"
            >
              ISBN (*)
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

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
                htmlFor="author_first_name"
              >
                Author's First Name (*)
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
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
                htmlFor="author_last_name"
              >
                Author's Last Name (*)
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
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
              htmlFor="cover"
            >
              Book´s Cover (*)
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              id="cover"
              type="text"
              name="cover"
              value={book.cover}
              placeholder="Cover of the book"
              required
              onChange={handleInputChange}
            />
          </div>

          <span className="flex items-center justify-center text-gray-400 text-xs font-semibold pt-4">
            --- OPTIONAL ---
          </span>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
              htmlFor="blurb"
            >
              Blurb
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              id="blurb"
              rows={3}
              name="blurb"
              value={book.blurb}
              placeholder="Blurb of the book"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-2/12 px-3 mb-6 md:mb-0">
              <label
                className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
                htmlFor="pages"
              >
                Pages
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                id="pages"
                type="number"
                name="pages"
                value={book.pages}
                placeholder="100"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-10/12 px-3 mb-6 md:mb-0">
              <label
                className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
                htmlFor="genre"
              >
                Genre
              </label>
              <div className="relative">
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white"
                  id="genre"
                  name="genre"
                  value={book.genre}
                  placeholder="Genre of the book"
                  onChange={handleSelectChange}
                >
                  <option>Action and Adventure</option>
                  <option>Classics</option>
                  <option>Comic Book or Graphic Novel</option>
                  <option>Detective and Mystery</option>
                  <option>Fantasy</option>
                  <option>Historical Fiction</option>
                  <option>Horror</option>
                  <option>Literary Fiction</option>
                  <option>Romance</option>
                  <option>Science Fiction (Sci-Fi)</option>
                  <option>Short Stories</option>
                  <option>Suspense and Thrillers</option>
                  <option>Women's Fiction</option>
                  <option>Biographies and Autobiographies</option>
                  <option>Cookbooks</option>
                  <option>Essays</option>
                  <option>History</option>
                  <option>Memoir</option>
                  <option>Poetry</option>
                  <option>Self-Help</option>
                  <option>True Crime</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
                htmlFor="binding"
              >
                Binding
              </label>
              <div className="relative">
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white"
                  id="binding"
                  name="binding"
                  value={book.binding}
                  placeholder="Binding of the book"
                  onChange={handleSelectChange}
                >
                  <option>Hard Binding</option>
                  <option>Soft Binding</option>
                  <option>Pocket Edition</option>
                  <option>Ebook</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
                htmlFor="publisher"
              >
                Publisher
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                id="publisher"
                type="text"
                name="publisher"
                value={book.publisher}
                placeholder="Publisher of the book"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-2/6 px-3 mb-6 md:mb-0">
              <label
                className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
                htmlFor="year_of_publication"
              >
                Publication Year
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                id="year_of_publication"
                type="number"
                name="year_of_publication"
                value={book.year_of_publication}
                placeholder="2023"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
              <label
                className="block text-gray-700 dark:text-[#F7F8FB] text-sm font-bold mb-2"
                htmlFor="release_date"
              >
                Release Date
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                id="release_date"
                type="text"
                name="release_date"
                value={book.release_date}
                placeholder="Release Date of the Book"
                onChange={handleInputChange}
              />
            </div>
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
  );
};

export default BookForm;
