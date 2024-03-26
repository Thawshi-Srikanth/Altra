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
import NotFoundPage from "./pages/NotFoundPage";
import Equipment from "./pages/ProductsSubPages/Equipment";
import EquipmentMainPAge from "./pages/Equipments/EquipmentMainPAge";
import France from "./pages/Equipments/Comapnies/France";
import FurnitureMainPage from "./pages/Furniture/FurnitureMainPage";
import ProductCataloguetemplate from "./components/ProductCataloguetemplate";
import GlasswareMainPage from "./pages/Glassware/GlasswareMainPage";
import ChemicalasMainPage from "./pages/Chemicals&Standards/ChemicalasMainPage";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>

        <Route path="/services" element={<Services />}></Route>
        <Route path="/research" element={<Research />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/equipment/:id" element={<EquipmentMainPAge />}></Route>
        <Route path="/filterpapers" element={<NotFoundPage />}></Route>
        <Route path="/furniture/:id" element={<FurnitureMainPage />}></Route>
        <Route path="/glassware/:id" element={<GlasswareMainPage />}></Route>
        <Route path="/chemicals/:id" element={<ChemicalasMainPage/>}></Route>

        <Route path="/france" element={<France />}></Route>
        <Route path="/productCatelgoue/:id" element={<ProductCataloguetemplate />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
