import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-book" element={<CreateBook />} />
          <Route path="/books/:id" element={<CreateBook />} />
          <Route path="edit/books/:id" element={<EditBook />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
