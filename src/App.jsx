import React from "react";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>

        <Route path="/services" element={<Services />}></Route>
        <Route path="/research" element={<Research />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
