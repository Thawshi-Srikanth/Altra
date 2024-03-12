import React, { useEffect } from "react";
import ProductTemplate from "../../components/ProductTemplate";
import { useParams } from "react-router-dom";
import equipmentbg from "../../assets/images/products/cateogories/equipments/EquipmentSeparate/bg/equipmentbg.png";
import equipmentDetail from "../../assets/images/products/cateogories/equipments/EquipmentSeparate/detail/equipmentDetail.png";
import equipmentbgMob from "../../assets/images/products/cateogories/equipments/EquipmentSeparate/bg/equipmentbgMob.png";
import equipmentDetailMob from "../../assets/images/products/cateogories/equipments/EquipmentSeparate/detail/equipmentDetailMob.png";

function EquipmentMainPAge() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  return (
    <div>
      <ProductTemplate
        id={id}
        imgOne={equipmentbg}
        imgTwo={equipmentDetail}
     
      />
    </div>
  );
}

export default EquipmentMainPAge;
