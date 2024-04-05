import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductTemplate from "../../components/ProductTemplate";
import { chemicalsProductTemplate } from "../../assets/data/catelogue/chemicalsProductTemplate";

function ChemicalasMainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {chemicalsProductTemplate.map((item) => (
        <ProductTemplate
          nextPath={item.nextPath}
          key={item.id}
          imgOne={item.imgOne}
          clients={item.clients}
          MainNextpath="chemicatalogue"
          description="Our expansive inventory showcases a diverse array of meticulously selected chemicals and standards, tailored to meet the varied requirements of laboratories across different industries. From essential reagents and solvents to precision-calibrated reference materials, each product undergoes rigorous manufacturing processes to ensure unparalleled purity and accuracy. Our stringent quality assurance protocols guarantee consistent reliability, making us the preferred choice for researchers and laboratory professionals worldwide."
        />
      ))}
    </div>
  );
}

export default ChemicalasMainPage;
