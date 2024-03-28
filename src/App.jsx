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
import EquipmentMainPAge from "./pages/Equipments/EquipmentMainPAge";
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
        <Route path="/products" element={<Products />}></Route>

        <Route path="/services" element={<Services />}></Route>
        <Route path="/research" element={<Research />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/equipment/:id" element={<EquipmentMainPAge />}></Route>
        <Route path="/filterpapers" element={<NotFoundPage />}></Route>
        <Route path="/furniture/:id" element={<FurnitureMainPage />}></Route>
        <Route path="/glassware/:id" element={<GlasswareMainPage />}></Route>
        <Route path="/chemicals/:id" element={<ChemicalasMainPage />}></Route>
        <Route
          path="/plasticware/:id"
          element={<PlasticwareMainPage />}
        ></Route>
        <Route
          path="/consumables/:id"
          element={<ConsumablesMainPage />}
        ></Route>

        
        <Route
          path="/productCatelgoue/:id"
          element={<ProductCataloguetemplate />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
