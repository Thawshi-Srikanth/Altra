import React from "react";
import ProductTemplate from "../../components/ProductTemplate";
import { useParams } from "react-router-dom";
import furniturebg from "../../assets/images/products/cateogories/furniture/furniturebg.png";
import furnitureDetail from "../../assets/images/products/cateogories/furniture/furnitureDetails.png";
import client from "../../assets/images/products/cateogories/furniture/client.png";
export default function FurnitureMainPage() {
  const { id } = useParams();

  return (
    <div>
      {" "}
      <ProductTemplate
        id={id}
        imgOne={furniturebg}
        imgTwo={furnitureDetail}
        imgThree={client}
        nextpath="furcatalogue"
      />
    </div>
  );
}
