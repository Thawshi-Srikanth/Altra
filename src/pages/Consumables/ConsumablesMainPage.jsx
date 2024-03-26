import React, { useEffect } from "react";
import ProductTemplate from "../../components/ProductTemplate";
import { consumablesProductTemplate } from './../../assets/data/catelogue/consumablesProductTemplate';


function ConsumablesMainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {consumablesProductTemplate.map((item) => (
        <ProductTemplate
          key={item.id}
          imgOne={item.imgOne}
          clients={item.clients}
          MainNextpath="consumables"
          description="Our extensive range of consumables includes a diverse selection of products tailored to meet the needs of laboratories in various industries. From filter papers for precise filtration to a wide array of consumables essential for daily lab operations, we provide solutions that streamline workflows and ensure accurate results."
        />
      ))}
    </div>
  );
}

export default ConsumablesMainPage;
