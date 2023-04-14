import React from "react";
import { Link } from "react-router-dom";
import {
  HiPlus,
  HiSearch,
  HiMenu,
  HiPlusSm,
  HiPlusCircle,
} from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="flex sticky top-0 z-10 backdrop-blur-md shadow-md bg-white/60 w-full justify-between items-center max-w-[1640px] h-20 mx-auto p-4 border-b border-gray-200">
      {/* LibreFly´s Logo */}
      <h1 className="text-2xl px-2 md:text-xl">
        <Link
          className="block lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
          to="/"
        >
          Libre<span className="font-bold">Fly</span>
        </Link>
      </h1>

      {/* Search */}
      <div className="hidden md:flex bg-gray-200 rounded-full items-center px-2 w-[44%]">
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search books"
        />
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center w-auto">
        <div className="text-sm">
          <Link
            className="block lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
            to="/"
          >
            Books
          </Link>
        </div>
        <div className="text-sm">
          <Link
            className="block lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
            to="/example1"
          >
            example
          </Link>
        </div>
      </div>

      {/* Button to Create a new book */}
      <div className="hidden md:flex">
        <Link
          className="flex items-center gap-1 text-sm px-4 py-2 rounded border border-black hover:border-transparent hover:text-white hover:bg-blue-400"
          to="/new-book"
        >
          <HiPlusCircle className="text-blue-600 text-lg" />
          Publish book
        </Link>
      </div>

      {/* MOBILE */}

      <div className="flex md:hidden justify-between items-center w-28">
        {/* Mobile Search */}
        <div>
          <HiSearch />
        </div>

        {/* Mobile Button to create a new book */}
        <div>
          <Link
            className="flex text-sm px-4 py-2 rounded border border-black hover:border-transparent hover:text-white hover:text-base hover:bg-blue-400"
            to="/new-book"
          >
            <HiPlus />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div>
          <HiMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
