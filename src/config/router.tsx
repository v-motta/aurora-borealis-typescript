import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Aurostars from "../pages/Aurostars";
import Carolita from "../pages/aurostars/Carolita";
import Kuro from "../pages/aurostars/Kuro";
import Meiko from "../pages/aurostars/Meiko";
import Yukime from "../pages/aurostars/Yukime";
import Contact from "../pages/Contact";
import Lovestruck from "../pages/Lovestruck";
import Jesse from "../pages/aurostars/Jesse";
import Torajo from "../pages/aurostars/Torajo";
import Purple from "../pages/aurostars/Purple";
import Pardal from "../pages/aurostars/Pardal";
import Flora from "../pages/aurostars/Flora";

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
        <Route path="/yukime" element={<Yukime />} />
        <Route path="/carolita" element={<Carolita />} />
        <Route path="/kuro" element={<Kuro />} />
        <Route path="/meiko" element={<Meiko />} />
        <Route path="/purple" element={<Purple />} />
        <Route path="/pardal" element={<Pardal />} />
        <Route path="/flora" element={<Flora />} />
        <Route path="/jesse" element={<Jesse />} />
        <Route path="/torajo" element={<Torajo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
