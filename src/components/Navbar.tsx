import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiPlus,
  HiSearch,
  HiMenu,
  HiOutlineX,
  HiPlusCircle,
} from "react-icons/hi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleNav = () => {
    setOpenMenu(!openMenu);
  };

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
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "block lg:inline-block lg:mt-0 hover:text-blue-500 mr-4"
                : isActive
                ? "block lg:inline-block lg:mt-0 mr-4 text-blue-600"
                : "hover:text-blue-500"
            }
            to="/"
          >
            Books
          </NavLink>
        </div>
        <div className="text-sm">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "block lg:inline-block lg:mt-0 hover:text-blue-500 ml-4"
                : isActive
                ? "block lg:inline-block lg:mt-0 ml-4 text-blue-600"
                : "hover:text-blue-500"
            }
            to="/example1"
          >
            Example
          </NavLink>
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
        <div className="cursor-pointer" onClick={handleNav}>
          {openMenu ? <HiOutlineX size={20} /> : <HiMenu size={20} />}
        </div>
        <div
          className={
            openMenu
              ? "fixed pt-28 uppercase bg-blue-500 left-0 top-0 w-[60%] border-r border-r-gray-900 h-screen ease-in-out duration-500"
              : "fixed left-[-100%] ease-out duration-1000"
          }
        >
          <div className="text-sm">
            <NavLink
              onClick={handleNav}
              // className="block lg:inline-block lg:mt-0 text-gray-50 hover:text-blue-100 mr-4 p-4 border-b border-b-slate-100"
              className={({ isActive, isPending }) =>
                isPending
                  ? "block lg:inline-block lg:mt-0 text-gray-50 hover:text-blue-100 mr-4 p-4 border-b border-b-slate-100"
                  : isActive
                  ? "block lg:inline-block lg:mt-0 text-blue-300 mr-4 p-4 border-b border-b-slate-100"
                  : "block lg:inline-block lg:mt-0 text-gray-50 hover:text-blue-100 mr-4 p-4 border-b border-b-slate-100"
              }
              to="/"
            >
              Books
            </NavLink>
          </div>
          <div className="text-sm">
            <NavLink
              onClick={handleNav}
              // className="block lg:inline-block lg:mt-0 text-gray-50 hover:text-blue-100 mr-4 p-4 border-b border-b-slate-100"
              className={({ isActive, isPending }) =>
                isPending
                  ? "block lg:inline-block lg:mt-0 text-gray-50 hover:text-blue-100 mr-4 p-4 border-b border-b-slate-100"
                  : isActive
                  ? "block lg:inline-block lg:mt-0 text-blue-300 mr-4 p-4 border-b border-b-slate-100"
                  : "block lg:inline-block lg:mt-0 text-gray-50 hover:text-blue-100 mr-4 p-4 border-b border-b-slate-100"
              }
              to="/example1"
            >
              Example
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
