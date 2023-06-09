import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Searched from "../pages/Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
