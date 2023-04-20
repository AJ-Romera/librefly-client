import React, { FormEvent, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiPlus,
  HiSearch,
  HiMenu,
  HiOutlineX,
  HiPlusCircle,
  HiChevronUp,
} from "react-icons/hi";
import { useAppDispatch } from "../store/store";
import { setSearchTerm } from "../store/features/searchSlice";
import ThemeToggle from "./ThemeToggle";

type FormChange = FormEvent<HTMLFormElement>;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");

  const dispatch = useAppDispatch();

  const handleNav = () => {
    setOpenMenu(!openMenu);
  };

  const handleSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const handleSearch = (e: FormChange) => {
    e.preventDefault();

    dispatch(setSearchTerm(searchText));
    setSearchText("");
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
        <form onSubmit={handleSearch}>
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search books"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>
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
                : "block lg:inline-block lg:mt-0 mr-4 hover:text-blue-500"
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
                ? "block lg:inline-block lg:mt-0 hover:text-blue-500"
                : isActive
                ? "block lg:inline-block lg:mt-0 text-blue-600"
                : "block lg:inline-block lg:mt-0 hover:text-blue-500"
            }
            to="/example1"
          >
            Example
          </NavLink>
        </div>
      </div>

      {/* ThemeToggle & Button to Create a new book */}
      <div className="hidden md:flex">
        <div className="flex items-center justify-center cursor-pointer mx-2">
          <ThemeToggle />
        </div>
        <Link
          className="flex items-center gap-1 text-sm px-4 py-2 rounded border border-black hover:border-transparent hover:text-white hover:bg-blue-400"
          to="/new-book"
        >
          <HiPlusCircle className="text-blue-600 text-lg" />
          Publish book
        </Link>
      </div>

      {/* MOBILE */}

      <div className="flex md:hidden justify-between items-center w-40">
        {/* Mobile ThemeToggle */}
        <div className="flex cursor-pointer">
          <ThemeToggle />
        </div>

        {/* Mobile Search */}
        <div>
          <div className="cursor-pointer" onClick={handleSearchBar}>
            {openSearchBar ? <HiChevronUp size={16} /> : <HiSearch size={16} />}
          </div>
        </div>

        <div
          className={
            openSearchBar
              ? "fixed bg-blue-400/90 left-0 top-20 w-full h-20 ease-out duration-500 py-5 border-b-2 border-b-blue-400"
              : "fixed pt-2 top-[-100%] left-0 w-full ease-in duration-500 bg-blue-500/30 h-16"
          }
        >
          <div className="flex md:hidden bg-gray-200 rounded-full mx-auto items-center px-2 w-[90%]">
            <form onSubmit={handleSearch}>
              <input
                className="bg-transparent p-2 w-full focus:outline-none"
                type="text"
                placeholder="Search books"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </form>
          </div>
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
              className={({ isActive, isPending }) =>
                isPending
                  ? "block lg:inline-block lg:mt-0 text-gray-50 hover:text-blue-100 mr-4 p-4 border-b border-b-slate-100"
                  : isActive
                  ? "block lg:inline-block lg:mt-0 text-blue-300 mr-4 ml-4 p-4 border-b border-b-slate-100"
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
