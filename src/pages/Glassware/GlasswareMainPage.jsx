import React, { useEffect } from 'react';
import glasswareProductTemplate from '../../assets/data/catelogue/glasswareProductTemplate';
import ProductTemplate from '../../components/ProductTemplate';
function GlasswareMainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      {" "}
      {glasswareProductTemplate.map((item) => (
        <ProductTemplate
          nextPath={item.nextPath}
          key={item.id}
          imgOne={item.imgOne}
          clients={item.clients}
          MainNextpath="glassware"
          description="We have been at the forefront of the industry, catering to the needs of the global chemical, pharmaceutical, and medical sectors. Evidenced by our adherence to ISO 9001 standards and rigorous testing protocols. Each piece of glassware is meticulously crafted with precision and durability, embodying the renowned German engineering standards. Emphasizing uniform design and interchangeable parts for superior lab glassware solutions that elevate your laboratory operations to new heights of excellence."
        />
      ))}
    </div>
  );
}

export default GlasswareMainPage;