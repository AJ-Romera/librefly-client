import React from "react";
import BookList from "../components/BookList";
import HeroSection from "../components/HeroSection";
import PortfolioBanner from "../components/PortfolioBanner";

const Home = () => {
  return (
    <div>
      <PortfolioBanner />
      <HeroSection />
      <BookList />
    </div>
  );
};

export default Home;
