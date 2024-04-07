import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import equipmentProductTemplate from "../../assets/data/catelogue/equipmentProductTemplate";
import ProductTemplate from "../../components/ProductTemplate";

export default function FurnitureMainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  return (
    <div className="">
      {" "}
      {equipmentProductTemplate.map((item) => (
        <ProductTemplate
       
          key={item.id}
          imgOne={item.imgOne}
          clients={item.clients}
          MainNextpath="equipment"
          description="Our portfolio includes innovative thermometers, centrifuges, and mercury-free measuring tools, alongside advanced devices for pH, ORP, conductivity, and TDS analysis. We offer high-tech laboratory equipment like field meters, electrophoresis supplies, conductometers, microscopes, and solutions for microbiology, water testing, and environmental analysis, catering to the needs of chemical, pharmaceutical, and medical sectors with a focus on quality and sustainability.."
        />
      ))}
    </div>
  );
}
