import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/deals" element={<Deals />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;