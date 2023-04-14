import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CreateBook from "./pages/CreateBook";
import DetailsPage from "./pages/DetailsPage";
import Footer from "./components/Footer";
import ScrollToTop from "./helpers/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="max-w-[1640px] mx-auto px-4">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-book" element={<CreateBook />} />
          <Route path="/edit-book/:id" element={<CreateBook />} />
          <Route path="book-details/:id" element={<DetailsPage />} />
        </Routes>
        <ToastContainer />
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
