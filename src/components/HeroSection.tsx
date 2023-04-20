import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section>
      <div className="bg-hero-1 text-white">
        <div className="bg-gradient-to-r from-white to-blue-500/40 backdrop-blur-sm py-6 mt-6 dark:bg-gradient-to-r dark:from-[#2F3855]/80 dark:to-[#282932]/40">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start py-8 pl-8">
              <h1 className="text-3xl md:text-5xl py-2 text-blue-500 tracking-loose">
                LibreFly
              </h1>
              <h2 className="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2 text-slate-800">
                Experience the joy of reading and let your thoughts take flight
                with LibreFly
              </h2>
              <p className="text-sm md:text-base text-slate-600 mb-4">
                Feed your mind and nourish your soul with our extensive
                collection of books. Or bring your book to life and connect with
                readers who will love and cherish your work
              </p>
              <Link
                to="/new-book"
                className="bg-transparent hover:bg-blue-400 text-blue-400 hover:text-black rounded shadow hover:shadow-lg py-2 px-7 md:py-2 md:px-4 border border-blue-400 hover:border-transparent"
              >
                Publish Now
              </Link>
            </div>

            <div className="hidden m-28 w-full gap-1 content-center items-center justify-center md:flex flex-wrap md:h-48">
              <div>
                <img
                  className="w-60 mt-14 hidden xl:block"
                  src="https://images-eu.bookshop.org/es/9788499083209.jpg?height=500&v=v4-eee5a36253261bb63539fd94d0fe7cca"
                />
              </div>
              <div>
                <img
                  className="w-60 inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="https://images-eu.bookshop.org/es/9788418037085.jpg?height=500&v=v4-aa52b52cb90b45ea379a1769cb1589a8"
                />
              </div>
              <div>
                <img
                  className="w-60 mt-28 hidden lg:block"
                  src="https://images-eu.bookshop.org/es/9788412553079.jpg?height=500&v=v4-8f31471954da34088565abbb6ccb9c06"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
