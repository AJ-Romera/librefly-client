import React, { useEffect, useState } from "react";
import { Book } from "../ts-interfaces/Book.interfaces";
import { useParams } from "react-router-dom";
import { getBook } from "../services/BookService";

const BookDetails = () => {
  const params = useParams();
  const [book, setBook] = useState<Book>({
    name: "",
    isbn: "",
    author_first_name: "",
    author_last_name: "",
    cover: "",
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

  return book.name !== "" ? (
    <section className="text-gray-700 body-font">
      <div className="container px-5 pt-10 py-14 lg:py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full h-auto object-contain object-center rounded border border-gray-200 dark:border-[#2D2F40] lg:h-[42rem] lg:px-10 lg:py-6 py-6 mt-6 lg:mt-0 lg:sticky lg:top-40">
            <img
              className="flex w-2/3 object-contain object-center items-center justify-center mx-auto rounded border dark:border-[#2D2F40]"
              src={book.cover}
              alt={`${book.name} book cover`}
            />

            <div className="grid lg:grid-cols-2 justify-center items-center mx-auto gap-2 mt-6 justify-items-center">
              <p className="text-sm text-gray-500 dark:text-[#c8d5ff] tracking-wide">
                <span className="font-bold">Binding: </span>
                {book.binding}
              </p>
              <p className="text-sm text-gray-500 dark:text-[#c8d5ff] tracking-wide">
                <span className="font-bold">Pages: </span>
                {book.pages}
              </p>
              <p className="text-sm text-gray-500 dark:text-[#c8d5ff] tracking-wide">
                <span className="font-bold">Genre: </span>
                {book.genre}
              </p>
              <p className="text-sm text-gray-500 dark:text-[#c8d5ff] tracking-wide">
                <span className="font-bold">Publisher: </span>
                {book.publisher}
              </p>
              <p className="text-sm text-gray-500 dark:text-[#c8d5ff] tracking-wide">
                <span className="font-bold">Publication Year: </span>
                {book.year_of_publication}
              </p>
              <p className="text-sm text-gray-500 dark:text-[#c8d5ff] tracking-wide">
                <span className="font-bold">Release Date: </span>
                {book.release_date}
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 dark:text-[#c8d5ff] tracking-widest">
              {book.author_first_name} {book.author_last_name}
            </h2>
            <h2 className="text-gray-900 dark:text-[#F7F8FB] text-3xl title-font font-medium mb-1">
              {book.name}
            </h2>
            <h3 className="text-xs title-font text-gray-400 dark:text-[#c8d5ff] tracking-widest">
              {book.isbn}
            </h3>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-blue-400 dark:text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-blue-400 dark:text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-blue-400 dark:text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-blue-400 dark:text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-blue-400 dark:text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 dark:text-[#c8d5ff] ml-3">
                  4 Reviews
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 dark:border-gray-500">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 hover:text-blue-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 hover:text-blue-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 hover:text-green-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed whitespace-pre-line text-slate-800 dark:text-[#F7F8FB]">
              {book.blurb}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900 dark:text-[#c8d5ff]">
                XX,XX €
              </span>
              <button className="flex ml-auto text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded dark:text-white dark:bg-[#4075c5] dark:hover:bg-transparent dark:hover:border-white dark:border-transparent dark:hover:text-[#8EBBFF]">
                Buy
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 hover:text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="flex items-center justify-center my-12 h-[35rem]">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-36 w-36"></div>
    </div>
  );
};

export default BookDetails;
