import React, { useEffect } from "react";

import ProductTemplate from "../../components/ProductTemplate";
import plasticwareProductTemplate from "../../assets/data/catelogue/plasticwareProductTemplate";
function PlasticwareMainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {" "}
      {plasticwareProductTemplate.map((item) => (
        <ProductTemplate
          nextPath={item.nextPath}
          key={item.id}
          imgOne={item.imgOne}
          clients={item.clients}
          MainNextpath="plasticware"
          description="Our extensive range of lab plasticware encompasses a wide array of products tailored to meet the diverse needs of laboratories across various industries. From beakers and flasks to pipettes and vials, each item is crafted with precision and durability to ensure reliable performance in laboratory settings. Committed to upholding the highest standards, our products undergo rigorous testing and adhere to stringent quality control measures."
        />
      ))}
    </div>
  );
}

export default PlasticwareMainPage;
