import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCataloguetemplate from "./components/ProductCataloguetemplate";

import AboutUs from "./pages/AboutUs";
import ChemicalasMainPage from "./pages/Chemicals&Standards/ChemicalasMainPage";
import ConsumablesMainPage from "./pages/Consumables/ConsumablesMainPage";
import Contact from "./pages/Contact";
import EquipmentMainPage from "./pages/Equipments/EquipmentMainPage";
import FurnitureMainPage from "./pages/Furniture/FurnitureMainPage";
import GlasswareMainPage from "./pages/Glassware/GlasswareMainPage";
import NotFoundPage from "./pages/NotFoundPage";
import PlasticwareMainPage from "./pages/Plasticware/PlasticwareMainPage";
import Products from "./pages/Products";
import Research from "./pages/Research";
import Services from "./pages/Services";



export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}/>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/research" element={<Research />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
  
         <Route path="/products/equipment" element={<EquipmentMainPage />}></Route>
      
        <Route path="/products/furniture" element={<FurnitureMainPage />}></Route>
        <Route path="/products/glassware" element={<GlasswareMainPage />}></Route>
        <Route path="/products/chemicals" element={<ChemicalasMainPage />}></Route>
        <Route
          path="/products/plasticware"
          element={<PlasticwareMainPage />}
        ></Route>
        <Route
          path="/products/consumables"
          element={<ConsumablesMainPage />}
        ></Route> 

        <Route
          path="/products/:mainNextpath/:clientNextpath"
          element={<ProductCataloguetemplate />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
