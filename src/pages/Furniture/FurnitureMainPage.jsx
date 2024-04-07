import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import furnitureProductTemplate from "../../assets/data/catelogue/furnitureProductTemplate";
import ProductTemplate from "../../components/ProductTemplate";

export default function FurnitureMainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  return (
    <div>
      {" "}
      {furnitureProductTemplate.map((item) => (
        <ProductTemplate
          nextPath={item.nextPath}
          key={item.id}
          imgOne={item.imgOne}
          clients={item.clients}
          MainNextpath="furniture"
          description="Our comprehensive range of lab furniture designed to meet the evolving needs of modern laboratories. Backed by years of experience and a commitment to excellence, we strive to provide unmatched quality, reliability, and customization options to our clients worldwide. Partner with us for superior lab furniture solutions that elevate your workspace to new heights."
        />
      ))}
    </div>
  );
}
