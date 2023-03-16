import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Aurostars from "../pages/Aurostars";
import Mikorin from "../pages/aurostars/Mikorin";
import Venith from "../pages/aurostars/Venith";
import Yukime from "../pages/aurostars/Yukime";
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
        {/* aurostars routes */}
        <Route path="/mikorin" element={<Mikorin />} />
        <Route path="/yukime" element={<Yukime />} />
        <Route path="/venith" element={<Venith />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
