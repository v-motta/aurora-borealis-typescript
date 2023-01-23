import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Aurostars from "../pages/Aurostars";
import Contact from "../pages/Contact";
import Lovestruck from "../pages/Lovestruck";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<About />} />
        <Route path="/lovestruck" element={<Lovestruck />} />
        <Route path="/aurostars" element={<Aurostars />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
