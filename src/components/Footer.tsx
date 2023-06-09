import React from "react";
import { SiTiktok, SiTwitter, SiInstagram, SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gray-900 dark:bg-[#101420] border-t-2 border-t-blue-400 dark:border-t-[#2D2F40] text-xs sm:text-sm md:text-base">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
              <p className="font-medium tracking-wide text-gray-300 dark:text-[#F7F8FB]">
                Books
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    New Releases
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    Pre-Order
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    Trending
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300 dark:text-[#F7F8FB]">
                Services
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    Sell with Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    Presale
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    Information for Publishers
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    Wholesale Books
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    Afiliate Program
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300 dark:text-[#F7F8FB]">
                Information
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 dark:text-[#cdd6f5]/70 transition-colors duration-300 hover:text-blue-500 dark:hover:text-[#8EBBFF]"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2 mt-8 lg:mt-0">
            <span className="text-base font-medium tracking-wide text-gray-300 dark:text-[#F7F8FB]">
              Subscribe for Special Offer and Updates
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-blue-400 focus:border-2 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none dark:text-white dark:bg-[#4075c5] dark:hover:bg-transparent dark:border-transparent dark:hover:text-[#8EBBFF]"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Get up to 50% off, and enjoy the latest books, pre-orders and
              news, right into your inbox for free!
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright 2023 AJ-Romera. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-xl text-gray-500 transition-colors duration-300 hover:text-white"
            >
              <SiTiktok />
            </a>
            <a
              href="/"
              className="text-xl text-gray-500 transition-colors duration-300 hover:text-blue-400"
            >
              <SiTwitter />
            </a>
            <a
              href="/"
              className="text-xl text-gray-500 transition-colors duration-300 hover:text-pink-600"
            >
              <SiInstagram />
            </a>
            <a
              href="/"
              className="text-xl text-gray-500 transition-colors duration-300 hover:text-blue-500"
            >
              <SiFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
