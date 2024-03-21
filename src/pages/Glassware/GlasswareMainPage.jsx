import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductTemplate from '../../components/ProductTemplate';
import Glasswarebg from "../../assets/images/products/cateogories/Glassware/Glasswarebg.png";
import GlasswareDetail from "../../assets/images/products/cateogories/Glassware/GlasswareDetails.png";
import client from "../../assets/images/products/cateogories/Glassware/client.png";
function GlasswareMainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  return (
    <div>
      {" "}
      <ProductTemplate
        id={id}
        imgOne={Glasswarebg}
        imgTwo={GlasswareDetail}
        imgThree={client}
        nextpath="glassware"
      />
    </div>
  );
}

export default GlasswareMainPage;