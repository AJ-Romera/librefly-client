import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center max-w-[1640px] h-20 mx-auto p-4">
      <div className="flex items-centers">
        <h1 className="text-2xl px-2">
          Libre<span className="font-bold">Fly</span>
        </h1>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[500px]">
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search books"
        />
      </div>

      <div className="flex items-center w-auto">
        <div className="text-sm">
          <Link
            className="block lg:inline-block lg:mt-0 hover:text-red-500 mr-4"
            to="/"
          >
            Books
          </Link>
        </div>
        <div className="text-sm">
          <Link
            className="block lg:inline-block lg:mt-0 hover:text-red-500 mr-4"
            to="/example1"
          >
            example
          </Link>
        </div>
        <div className="text-sm">
          <Link
            className="block lg:inline-block lg:mt-0 hover:text-red-500 mr-4"
            to="/example2"
          >
            example 2
          </Link>
        </div>
      </div>

      <div>
        <Link
          className=" text-sm px-4 py-2 border rounded border-black hover:border-transparent hover:text-white hover:bg-black mt-0"
          to="/new-book"
        >
          + Create new book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
