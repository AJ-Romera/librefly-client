import React from "react";
import { Link } from "react-router-dom";

const PortfolioBanner = () => {
  return (
    <div className="bg-gray-100 dark:bg-blue-100 border-t border-b border-gray-500 dark:border-blue-500 text-gray-700 dark:text-blue-700 px-4 py-3 mt-4 text-center">
      <p className="font-bold text-sm md:text-base">
        AJ-Romera´s Portfolio Project
      </p>
      <p className="text-xs md:text-sm">
        This is a fake web to showcase my skills
      </p>
      <Link
        to="https://google.es"
        className="font-semibold text-sm md:text-base hover:text-blue-400 dark:hover:text-blue-500/80"
      >
        Visit my Portfolio for more
      </Link>
    </div>
  );
};

export default PortfolioBanner;
